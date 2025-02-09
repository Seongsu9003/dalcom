import { useState } from "react";
import axios from "axios";

export default function App() {
  const [story, setStory] = useState("");
  const [choices, setChoices] = useState([]);
  const [selectedChoice, setSelectedChoice] = useState("");

  const API_URL = process.env.REACT_APP_API_URL || "https://dalcom-backend.onrender.com"; // ✅ 실제 Render API URL 넣기!

  const fetchStory = async (userChoice) => {
    console.log("fetchStory called with choice:", userChoice); // ✅ 함수 실행 확인
    console.log("API URL:", API_URL); // ✅ API URL 확인

    try {
        const response = await axios.post(`${API_URL}/story`, { choice: userChoice });
        console.log("API Response:", response.data); // ✅ 응답 데이터 확인
        setStory(response.data.story);
        setChoices(response.data.choices);
    } catch (error) {
        console.error("Error fetching story:", error);
    }
};


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Dalcom GPT Story Generator</h1>
      
      <p className="text-lg bg-white p-4 rounded-lg shadow">{story || "스토리를 시작하세요!"}</p>
      
      <div className="mt-4">
        {choices.map((choice, index) => (
          <button
              key={index}
              className="block px-4 py-2 bg-blue-500 text-white rounded mt-2 hover:bg-blue-700"
              onClick={() => {
                  console.log("Button clicked:", choice); // ✅ 버튼 클릭 로그 확인
                  setSelectedChoice(choice);
                  fetchStory(choice);
              }}
          >
              {choice}
          </button>
        ))}
      </div>
    </div>
  );
}

const API_URL = process.env.REACT_APP_API_URL || "https://dalcom-backend.onrender.com";
console.log("API URL:", API_URL);  // ✅ 콘솔에서 확인하기 위해 API URL 출력하기