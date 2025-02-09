import React from "react";

export default function Image({ imageUrl, altText }) {
  return (
    <div className="mt-4">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={altText || "Story Image"}
          className="w-64 h-64 object-cover rounded-lg shadow-lg"
        />
      )}
    </div>
  );
}
