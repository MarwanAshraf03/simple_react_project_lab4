import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import UserCardAddUser from "./components/userCard_addUser";
import Home from "./pages/home";
import AboutUs from "./pages/about_us";
import Layout from "./pages/layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      // errorElement: <NotFound></NotFound>,
      children: [
        {
          index: true,
          element: <Home></Home>,
          // errorElement: <NotFound></NotFound>,
        },
        { path: "/about", element: <AboutUs /> },
        // { path: "/task", element: <TaskPage /> },
        // { path: "/users", element: <UsersPage />, loader: loadData },
        // { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      {/* <UsersContextProvider> */}
      {/* <RouterProvider router={router}></RouterProvider> */}
      {/* </UsersContextProvider> */}
      <RouterProvider router={router}></RouterProvider>
    </>
  );

  // return (
  //   // <>
  //   //   {/* <UserCardAddUser></UserCardAddUser> */}
  //   //   {/* < */}
  //   // </>

  // );
}

export default App;
