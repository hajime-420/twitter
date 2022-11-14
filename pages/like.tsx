import FeedCard from "../components/FeedCard";
import TweetList from "../components/TweetList";
import { Tweet } from "../types/Tweet";

const Like = () => {
  const tweets: Tweet[] = [
    {
      id: 4,
      content: "aaaaaa",
      isDeleted: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 5,
      content: "bbbbbbbb",
      isDeleted: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 6,
      content: "7777777",
      isDeleted: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  return <TweetList tweets={tweets} />;
};

export default Like;
