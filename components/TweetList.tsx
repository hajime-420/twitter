import React from "react";
import { Tweet } from "../types/Tweet";
import FeedCard from "./FeedCard";

type Props = {
  tweets: Tweet[];
};

const TweetList = (props: Props) => {
  const { tweets } = props;

  return (
    <div className="p-4 flex flex-col space-y-1 items-center">
      {tweets.map((tweet, index) => (
        <FeedCard key={index} tweet={tweet} />
      ))}
    </div>
  );
};

export default TweetList;
