import React, { useState } from "react";

const TextReverser = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h2>Text Reverser</h2>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="Type something..." 
        data-testid="text-input"
      />
      <p data-testid="reversed-text">Reversed: {text.split("").reverse().join("")}</p>
    </div>
  );
};

export default TextReverser;
