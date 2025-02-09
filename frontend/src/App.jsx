import { useState } from "react";
import axios from "axios";
import Choices from "./components/Choices";
import Image from "./components/Image";
import Story from "./components/Story";

export default function App() {
  const [story, setStory] = useState("");
  const [choices, setChoices] = useState([]);
  const [imageUrl, setImageUrl] = useState(""); // 이미지 URL 상태 추가

  const API_URL = process.env.REACT_APP_API_URL || "https://dalcom-backend.onrender.com"; // ✅ API URL 설정
  console.log("API URL:", API_URL); // ✅ 콘솔에서 확인

  const fetchStory = async (userChoice) => {
    console.log("fetchStory called with choice:", userChoice); // ✅ 함수 실행 확인

    try {
      const response = await axios.post(`${API_URL}/story`, { choice: userChoice });
      console.log("API Response:", response.data); // ✅ 응답 데이터 확인
      setStory(response.data.story);
      setChoices(response.data.choices);
      setImageUrl(response.data.imageUrl || ""); // 이미지 URL 업데이트
    } catch (error) {
      console.error("Error fetching story:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Dalcom GPT Story Generator</h1>

      {/* ✅ 스토리 출력 */}
      <Story text={story} />

      {/* ✅ 이미지 출력 */}
      <Image imageUrl={imageUrl} altText="Generated Story Image" />

      {/* ✅ 선택지 버튼 */}
      <Choices choices={choices} onSelect={fetchStory} />
    </div>
  );
}
