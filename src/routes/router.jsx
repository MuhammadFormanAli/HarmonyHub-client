

import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';

import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
import Home from '../pages/Home/Home/Home';
import Classes from '../pages/Classes/Classes';



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"register",
          element:<Register></Register>
        },
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:"classes",
          element:<Classes></Classes>
        },
      ]
    },
    
  ]);

export default router;