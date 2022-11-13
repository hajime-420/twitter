import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Profile = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen items-center justify-center py-2 font-serif">
        <div className="p-3">
          <Image
            alt="icon"
            src="/images/icon.png"
            width={100}
            height={100}
            objectFit="contain"
          />
        </div>
        <div className="">ID//////////</div>
      </div>
    </div>
  );
};

export default Profile;
