import AdminLayout from "./AdminLayout";
import { useRoutes } from "react-router-dom";
import HeaderLayout from "./HeaderLayout";
import Admin from "./Admin";
import Home from "./Home";
import Service from "./Service";
import Users from "./Users";
import About from "./About";

export default function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <HeaderLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/service", element: <Service /> },
        { path: "/about/:id", element: <About /> },
      ],
    },
    {
      element: <AdminLayout />,
      children: [
        { path: "/admin", element: <Admin /> },
        { path: "/users", element: <Users /> },
      ],
    },
  ]);
  return element;
}
