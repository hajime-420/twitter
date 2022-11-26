import { useRouter } from "next/router";
import { useState } from "react";

const AddFeed = () => {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  async function onClickButton() {
    await fetch(process.env.NEXT_PUBLIC_VERCEL_URL + "/api/task/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: inputValue }),
    });
    setInputValue("");
    router.push("/");
  }

  return (
    <div className="flex flex-row space-x-4">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border border-gray-400 rounded-xl px-2"
      ></input>
      <button
        onClick={(e) => onClickButton()}
        className="bg-blue-500 text-white rounded-xl px-4"
      >
        投稿
      </button>
    </div>
  );
};

export default AddFeed;
