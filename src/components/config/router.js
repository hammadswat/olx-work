import {createBrowserRouter,RouterProvider, } from "react-router-dom"
import Register from "../Sinup";
import Login from "../Login";
import Dashboard from "../../views/Dashboard";
import Detail from "../../views/DetailPage";
import Postadd from "../postAdds";

const router = createBrowserRouter([

  {
    path: "/",
    element: <Dashboard />,
  },

  {
    path: "/Rrgister",
    element: <Register />,
  },

  {
    path: "/login",
    element: <Login />,
  },
    
    {
      path: "/postadd",
      element: <Postadd />,
    },

    {
      path: "/detail/:id",
      element: <Detail />,
    },
  ]);
  function Router(){
    return  <RouterProvider router={router} />
  }
  export default Router;