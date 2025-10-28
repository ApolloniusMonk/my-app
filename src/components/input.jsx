import { useState } from "react";

export default function Input({ addToDo }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <label htmlFor="new-task-input">New task:</label>
      <input
        id="new-task-input"
        type="text"
        value={input}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          addToDo(input);
          setInput("");
        }}
      >
        submit
      </button>
    </>
  );
}
