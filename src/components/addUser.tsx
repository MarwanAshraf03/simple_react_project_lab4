import react from "react";
import type { User } from "../interfaces/User";
interface Props {
  addUserFn: (user: User) => void;
}
const AddUser = ({ addUserFn }: Props) => {
  const [user, setUser] = react.useState<User>({
    name: "",
    id: crypto.randomUUID(),
    imageUrl: "",
    age: 0,
  });
  const handleChange = (e: react.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: name === "age" ? Number(value) : value,
    }));
  };
  const handleSubmit = (e: react.FormEvent) => {
    e.preventDefault();
    addUserFn(user);
    setUser({ name: "", id: crypto.randomUUID(), imageUrl: "", age: 0 });
  };
  return (
    <div className="max-w-md mx-auto mt-10">
      <form
        className="bg-white p-8 border border-gray-100 rounded-2xl shadow-xl space-y-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-extrabold text-gray-800 text-center mb-2">
          Add User
        </h2>
        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-600 ml-1">
            Name
          </label>
          <input
            required
            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="Your Name Here"
            onChange={handleChange}
            name="name"
            value={user.name}
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-600 ml-1">
            Age
          </label>
          <input
            required
            type="number"
            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="25"
            onChange={handleChange}
            name="age"
            value={user.age || ""}
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-600 ml-1">
            Image URL
          </label>
          <input
            required
            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="https://images.unsplash.com/..."
            onChange={handleChange}
            name="imageUrl"
            value={user.imageUrl}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-200 active:scale-[0.98] transition-all duration-150"
        >
          Add User
        </button>
      </form>
    </div>
  );
};
export default AddUser;
