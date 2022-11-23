import TweetList from "../components/TweetList";
import { Tweet } from "../types/Tweet";
import React, { useState } from "react";
import AddFeed from "../components/AddFeed";

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
      <AddFeed />
      <TweetList tweets={tweets} />
    </>
  );
};

export default Feed;
