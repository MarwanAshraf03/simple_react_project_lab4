import type { User } from "../interfaces/User";
const UserCard = ({ user }: { user: User }) => {
  return (
    <div className="group relative w-full max-w-sm overflow-hidden rounded-2xl bg-white p-6 shadow-md border border-gray-100">
      <div className="relative flex flex-col items-center text-center">
        <div className="mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-white ring-2 ring-blue-100 shadow-inner">
          <img
            src={
              user.imageUrl ||
              "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?_=20170328184010"
            }
            alt={user.name}
            className="h-full w-full object-cover "
          />
        </div>
        <h3 className="text-xl font-bold text-gray-800 tracking-tight">
          {user.name}
        </h3>
        <span className="text-sm font-medium text-gray-400">
          • {user.age} Years Old
        </span>
        <button className="mt-6 w-full rounded-xl bg-gray-900 py-2.5 text-sm font-bold text-white">
          View Profile
        </button>
      </div>
    </div>
  );
};
export default UserCard;
