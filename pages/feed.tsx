import Image from "next/image";
import FeedCard from "../components/FeedCard";

const Feed = () => {
  return (
    <div className="p-4 flex flex-col space-y-1 items-center">
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
    </div>
  );
};

export default Feed;
