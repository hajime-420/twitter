import React from "react";
import FollowCard from "../components/FollowCard";
import { Follow } from "../types/Follower";

const Follower = () => {
  const follower: Follow[] = [
    {
      id: 1,
      followerId: 1,
      followeeId: 1,
      createdAt: new Date(),
    },
    {
      id: 2,
      followerId: 2,
      followeeId: 2,
      createdAt: new Date(),
    },
  ];

  return (
    <div className="p-4 flex flex-col space-y-1 items-center">
      {follower.map((follow, index) => (
        <FollowCard key={index} follow={follow} />
      ))}
    </div>
  );
};

export default Follower;
