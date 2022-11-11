import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>SampleTwotter</title>
      </Head>
      <main className="flex flex-col font-serif">
        <div className="">
          <h1 className="text-4xl font-size:2.25rem;line-height:2.5rem。">
            トゥイッター
          </h1>
          <h2 className="h-10 leading-10">Sample</h2>
        </div>
        <div className="flex flex-row space-x-4 ">
          <p>ID</p>
          <input className="border border-gray-400 rounded-xl px-2" />
          <p>Pass</p>
          <input className="border border-gray-400 rounded-xl px-2" />
          <button className="border border-gray-400 rounded-xl px-3 bg-gray-300 ">
            login
          </button>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
