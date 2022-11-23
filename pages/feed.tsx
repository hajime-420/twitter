import TweetList from "../components/TweetList";
import { Tweet } from "../types/Tweet";

const Feed = () => {
  const tweets: Tweet[] = [
    {
      id: 1,
      content: "11111テキストテキストテキストテキストテキスト",
      isDeleted: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      content: "22222テキストテキストテキストテキストテキスト",
      isDeleted: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      content: "3333テキストテキストテキストテキストテキスト",
      isDeleted: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  return (
    <>
      <div className="flex flex-row space-x-6 flex-col items-center">
        <input className="border border-gray-400 rounded-xl px-2"></input>
        <button className="border border-gray-300 rounded-md space-y-6">
          投稿
        </button>
      </div>
      <TweetList tweets={tweets} />
    </>
  );
};

export default Feed;
