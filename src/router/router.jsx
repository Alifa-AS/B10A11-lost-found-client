import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ItemDetails from "../pages/ItemDetails/ItemDetails";
import PrivateRoute from "./PrivateRoute";
import AddPost from "../pages/AddPost/AddPost";
import AllItems from "../pages/All_Items/AllItems";
import MyPostedItems from "../pages/MyPostedItems/MyPostedItems";
import AllRecover from "../pages/AllRecover/AllRecover";

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
            path: '/allItems',
            element: <AllItems />,
        },
        {
          path: '/items/:id',
          element:<PrivateRoute><ItemDetails /></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/items/${params.id}`)
        },
        {
          path: '/addPostItems',
          element: <PrivateRoute><AddPost /></PrivateRoute>,
        },
        {
          path: '/allRecovered',
          element: <PrivateRoute><AllRecover /></PrivateRoute>,
        },
        {
          path: '/myPostedItems',
          element: <PrivateRoute><MyPostedItems /></PrivateRoute>,
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