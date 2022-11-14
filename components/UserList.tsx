import { User } from "../types/User";
import UserCard from "./UserCard";

type Props = {
  users: User[];
};

const UserList = (props: Props) => {
  const { users } = props;

  return (
    <div className="p-4 flex flex-col space-y-1 items-center">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
};

export default UserList;
