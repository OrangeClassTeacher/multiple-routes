import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderLayout from "./HeaderLayout";
import Admin from "./Admin";
import Home from "./Home";
import Service from "./Service";
import Users from "./Users";
import About from "./About";
import AdminLayout from "./AdminLayout";

export default function App3() {
  return (
    <BrowserRouter>
      <div className="App">
        <h3>Routes, Route example</h3>
        <Routes>
          <Route path="/" element={<HeaderLayout />}>
            <Route index element={<Home />} />
            <Route path="about/:id" element={<About />} />
            <Route path="service" element={<Service />} />
          </Route>
        </Routes>

        <Routes>
          <Route element={<AdminLayout />}>
            <Route index path="/admin" element={<Admin />} />
            <Route path="/users" element={<Users />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
