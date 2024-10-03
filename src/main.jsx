import * as React from "react";
// import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
// import AuthProvider from "./components/provider/AuthProvider";
import Home from "./components/Home/Home";
import AuthProvider from "./components/provider/AuthProvider";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Users from "./components/Users/Users";
import AddCoffee from "./components/AddCoffee/AddCoffee";
import UpdateCoffee from "./components/UpdateCoffee/UpdateCoffee";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch('http://localhost:5000/users')
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/updateCoffee",
        element: <UpdateCoffee />,
      },
    ],
  },
]);



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container mx-auto">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </StrictMode>
);