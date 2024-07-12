import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [ShowName, setShowName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleButton = () => {
    setShowName(`Welcome,${name}`); // Display the welcome message with the entered name
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={handleChange}
      />
      <button
        className="bg-blue border border-1 w-10"
        onClick={handleButton} // Call handleButton when the button is clicked
      >
        Submit
      </button>
      <p>{ShowName}</p> {/* Display the welcome message */}
    </div>
  );
}