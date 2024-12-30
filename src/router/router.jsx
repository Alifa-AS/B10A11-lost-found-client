import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: 'register',
            element: <Register />,
        },
        {
            path: 'login',
            element: <Login />,
        },
      ]
    },
  ]);

export default router;