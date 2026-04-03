import { useState } from "react";
import AddUser from "./addUser";
import UserCard from "./userCard";
import type { User } from "../interfaces/User";
const UserCardAddUser = () => {
  const [users, setUsers] = useState<User[]>([
    {
      name: "Marwan",
      imageUrl: "",
      age: 21,
      id: "1",
    },
    {
      name: "Sarah",
      imageUrl: "",
      age: 24,
      id: "2",
    },
  ]);
  const addUser = (user: User) => {
    setUsers([...users, user]);
  };
  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <AddUser addUserFn={addUser} />
        <br />
        <div className="col-span-4">
          <div className="grid grid-cols-4 gap-6">
            {users.map((user, idx) => (
              <UserCard key={user.id || idx} user={user} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserCardAddUser;
