import React from "react";
import Image from "next/image";

const follower = () => {
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
      <div className="pl-20">
        コメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメント
      </div>
    </div>
  );
};

export default follower;
