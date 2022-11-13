import Image from "next/image";
import FeedCard from "../components/FeedCard";
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
    <div className="p-4 flex flex-col space-y-1 items-center">
      {tweets.map((tweet, index) => (
        <FeedCard key={index} tweet={tweet} />
      ))}
    </div>
  );
};

export default Feed;
