import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

export default function App1() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>useRoutes Example</h1>
        <Router />
      </div>
    </BrowserRouter>
  );
}
