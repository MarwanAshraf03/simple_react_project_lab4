import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import AboutUs from "./pages/about_us";
import Layout from "./pages/layout";
import MovieDetails from "./pages/movie_details";
import NotFound from "./pages/NotFound";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <AboutUs /> },
        { path: "/movie_details/:id", element: <MovieDetails /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
