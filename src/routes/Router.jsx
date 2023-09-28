import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Home from "../pages/Home"
import RouterProtected from "./RouterProtected"

import {createBrowserRouter} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/",
    element: <RouterProtected/>,
    children: [
      {
        path: "/home",
        element: <Home/>
      }
    ]
  },
])

export default router;