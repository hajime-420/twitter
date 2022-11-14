import Image from "next/image";
import { User } from "../types/User";

type Props = {
  user: User;
};

const UserCard = (props: Props) => {
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
        <p className="font-semibold">{props.user.name}</p>
      </div>
    </div>
  );
};

export default UserCard;
