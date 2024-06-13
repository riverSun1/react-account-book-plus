import { createBrowserRouter } from "react-router-dom";
import NavLayout from "../components/Layouts/NavLayout/NavLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Update from "../pages/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/update/:id", element: <Update /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
  { path: "/login", element: <Login /> },
]);

export default router;
