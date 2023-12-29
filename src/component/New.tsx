// FunComponent.js
import React, { useState } from "react";

const UshaStatement = () => {
  const [agreed, setAgreed] = useState(false);

  const handleOptionSelect = () => {
    // Set agreed to true regardless of the option selected
    setAgreed(true);
  };

  return (
    <div className="flex justify-center items-center h-svh bg-zinc-900 text-teal-50 p-3">
      <div className="text-center py-10 px-4 border border-zinc-600 rounded-lg">
      <div className=" flex justify-center mb-3">
        <img src="/assets/logo.png" alt="" width={40} height={40} />
      </div>
        <h1 className=" text-[24px] mb-5  font-semibold">Hey Honey 🥵</h1>

        <h2 className="mb-6">
          Amra secret kicho pics & videos create korbo - ok?
        </h2>

        {!agreed && (
          <div className="flex gap-5 justify-between items-center mt-4">
            <button
              onClick={handleOptionSelect}
              className="block py-2 px-4 rounded-md bg-blue-600 hover:bg-zinc-400 border border-zinc-700"
            >
              Yes 😛
            </button>
            <button
              onClick={handleOptionSelect}
              className="block py-2 px-4 rounded-md bg-zinc-600 hover:bg-zinc-400 border border-zinc-700"
            >
              No 😞
            </button>
          </div>
        )}
        {agreed && (
          <p className=" text-pink-500">
            Great! You choose YES! <br /> I Love you babe 🥰
          </p>
        )}
      </div>
    </div>
  );
};

export default UshaStatement;
