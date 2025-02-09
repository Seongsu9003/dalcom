import React from "react";

export default function Choices({ choices, onSelect }) {
  return (
    <div className="mt-4">
      {choices.map((choice, index) => (
        <button
          key={index}
          className="block px-4 py-2 bg-blue-500 text-white rounded mt-2 hover:bg-blue-700"
          onClick={() => onSelect(choice)}
        >
          {choice}
        </button>
      ))}
    </div>
  );
}
