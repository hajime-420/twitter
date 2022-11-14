import React from "react";
import UserCard from "../components/UserCard";
import UserList from "../components/UserList";
import { User } from "../types/User";

const Follower = () => {
  const users: User[] = [
    {
      id: 1,
      name: "aaa",
      image: "aaa",
      isDeleted: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  return <UserList users={users} />;
};

export default Follower;
