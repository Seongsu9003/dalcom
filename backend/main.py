from fastapi import FastAPI
from pydantic import BaseModel
from gpt import get_llm
from dalle import get_image_by_dalle
from openai import OpenAI

app = FastAPI()

class StoryRequest(BaseModel):
    choice: str

@app.post("/story")
async def generate_story(request: StoryRequest):
    llm_model = get_llm()
    client = OpenAI()
    
    # GPT-4로 스토리 생성
    llm_generation_result = llm_model.predict(input=request.choice)
    
    # 선택지 및 이미지 생성
    response_list = llm_generation_result.split("\n")
    img_prompt = response_list[-1] if "Dalle Prompt" in response_list[-1] else None
    image_url = get_image_by_dalle(client, img_prompt) if img_prompt else None

    # 스토리, 선택지 파싱
    story = "\n".join([line for line in response_list if not line.startswith(("A.", "B.", "C.", "D.", "Dalle Prompt"))])
    choices = [line for line in response_list if line.startswith(("A.", "B.", "C.", "D."))]

    return {"story": story, "choices": choices, "image_url": image_url}
