import React, { useState } from "react";

function PassGenerator() {
  const [length, setLenght] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <div className="w-full h-screen bg-neutral-950 p-5 flex justify-center text-white text-2xl font-medium">
      <div className="password-card  bg-gray-900 h-60 rounded-2xl w-2xl flex flex-col justify-center items-center gap-5">
        <h1>Password Generator</h1>
        <form action="">
          <input
            value={password}
            className="bg-white rounded-l-2xl w-lg py-2 px-3 text-orange-500"
            type="text"
          />
          <button className="bg-blue-600 py-2 px-3 rounded-r-2xl">Copy</button>
          <div className="flex gap-2 mt-5 text-orange-300">
            <input type="range" name="range" className="mr-2" />
            <label htmlFor="range">length:</label>
            <input
              type="checkbox"
              name="numbers"
              className="ml-2"
              style={{ width: "16px", height: "16" }}
            />
            <label htmlFor="numbers">Numbers</label>
            <input
              type="checkbox"
              name="chars"
              className="ml-2"
              style={{ width: "16px", height: "16" }}
            />
            <label htmlFor="chars">Characters</label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PassGenerator;
