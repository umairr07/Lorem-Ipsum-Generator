import React, { useState } from "react";
import { loremText } from "../data/data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Lorem = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const generateText = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      toast.warn("Ayyo ! you know that you wrote negative input 😵", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      amount = 1;
    }
    if (count > 10) {
      toast.warn("Ayyo ! you know that you wrote too much input 😵", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      amount = 10;
    }
    setText(loremText.slice(0, amount));
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <div>
        <h1 className="text-4xl font-bold">TIRED OF BORING LOREM IPSUM?</h1>
      </div>

      <div className="flex gap-5 mt-5 items-center">
        <p className="text-2xl"> Paragraphs:</p>
        <input
          type="number"
          className="p-2"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button
          className="bg-[#fff] hover:bg-purple-700 text-purple-700  hover:text-[#fff] font-bold p-2 rounded"
          onClick={generateText}
        >
          GENERATE
        </button>
      </div>

      <div className="w-[80%]">
        {text.map((item, index) => (
          <p
            key={index}
            className="bg-[#fff] p-10  mt-10 mb-10 rounded-lg text-[#524494] font-semibold"
          >
            {item}
          </p>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};
