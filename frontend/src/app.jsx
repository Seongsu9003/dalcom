import { useState } from "react";
import axios from "axios";

export default function App() {
  const [story, setStory] = useState("");
  const [choices, setChoices] = useState([]);
  const [selectedChoice, setSelectedChoice] = useState("");

  const fetchStory = async (userChoice) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/story", {  // 🔥 FastAPI API 주소
        choice: userChoice,
      });
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
