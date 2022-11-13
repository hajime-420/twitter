import Image from "next/image";
import { Tweet } from "../types/Tweet";

type Props = {
  tweet: Tweet;
};

const FeedCard = (props: Props) => {
  const { tweet } = props;

  return (
    <div className="border-4 border-gray-300 w-1/2 p-4 space-y-3">
      <div className="flex flex-row space-x-6 ">
        <Image
          alt="icon"
          src="/images/icon.png"
          width={50}
          height={50}
          objectFit="contain"
        />
        <p className="font-semibold">ID</p>
      </div>
      <div>
        <div>{tweet.content}</div>
        <div className="flex justify-end">💗</div>
      </div>
    </div>
  );
};

export default FeedCard;
