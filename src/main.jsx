import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddCoffe from "./components/AddCoffe.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import Coffee from "./components/Coffee.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import Root from "./components/Root.jsx";
import AuthProvider from "./components/AuthProvider.jsx";
import Users from "./components/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () =>
          fetch(
            "https://coffee-store-server-old-jyym-idrofvbc3-rabiul-sohels-projects.vercel.app/coffee"
          ),
      },

      {
        path: "/addCoffee",
        element: <AddCoffe></AddCoffe>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-old-jyym-idrofvbc3-rabiul-sohels-projects.vercel.app/coffee/${params.id}`
          ),
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () =>
          fetch(
            "https://coffee-store-server-old-jyym-idrofvbc3-rabiul-sohels-projects.vercel.app/users"
          ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
