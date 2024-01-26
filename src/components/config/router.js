import {createBrowserRouter,RouterProvider, } from "react-router-dom"
import Register from "../Sinup";
import Login from "../Login";
import Dashboard from "../../views/Dashboard";
import Detail from "../../views/DetailPage";
import Postadd from "../postAdds";

const router = createBrowserRouter([

  {
    path: "/",
    element: <Register />,
  },

  {
    path: "/login",
    element: <Login />,
  },
    {
      path: "/Dashboard",
      element: <Dashboard />,
    },
    {
      path: "/postadd",
      element: <Postadd />,
    },

    {
      path: "/Dashboard/detail/:id",
      element: <Detail />,
    },
  ]);
  function Router(){
    return  <RouterProvider router={router} />
  }
  export default Router;