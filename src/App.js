import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeaderLayout from "./HeaderLayout";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import AdminLayout from "./AdminLayout";
import Admin from "./Admin";
import Users from "./Users";

function App() {
  const router = createBrowserRouter([
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

  return (
    <div className="App">
      <h1>createBrowserRouter example</h1>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
