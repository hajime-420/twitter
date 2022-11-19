import type { NextPage } from "next";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen items-center justify-center py-2 font-serif">
        <div className="">
          <h1 className="text-4xl font-size:2.25rem;line-height:2.5rem。">
            トゥイッター
          </h1>
          <h2 className="h-10 leading-10 flex justify-end text-gray-300">
            Sample
          </h2>
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <p>ID</p>
            <input className="border border-gray-400 rounded-xl px-2" />
          </div>
          <div>
            <p>Pass</p>
            <input className="border border-gray-400 rounded-xl px-2" />
          </div>
          <button className="border border-gray-400 rounded-xl px-3 bg-gray-300 w-20">
            login
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
