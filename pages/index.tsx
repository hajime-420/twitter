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
        <h1 className="text-4xl font-size:2.25rem;line-height:2.5rem。 ">
          トゥイッター
        </h1>
        <h2 className="">Sample</h2>
        <input className="border border-gray-400 rounded-xl px-2" />
        <input className="border border-gray-400 rounded-xl px-2" />
        <button>login</button>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
