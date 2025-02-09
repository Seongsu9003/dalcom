import React from "react";

export default function Story({ text }) {
  return (
    <p className="text-lg bg-white p-4 rounded-lg shadow mt-4">{text || "스토리를 시작하세요!"}</p>
  );
}
