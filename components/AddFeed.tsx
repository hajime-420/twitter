import React, { useState } from "react";

const AddFeed = () => {
  const [text, setText] = useState("");
  const [addText, setAddText] = useState("");

  const onClickAddText = () => {
    setAddText(text);
    setText("");
  };
  return (
    <>
      <div className="flex flex-row space-x-6 flex-col items-center">
        <input
          value={text}
          onChange={(event) => setText(event.target.value)}
          className="border border-gray-400 rounded-xl px-2"
        ></input>
        <button
          onClick={onClickAddText}
          className="border border-gray-300 rounded-md space-y-6"
        >
          投稿
        </button>
      </div>
      <p>{text}</p>
      <p>ボタンクリック：{addText}</p>
    </>
  );
};

export default AddFeed;
