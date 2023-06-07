

import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';

import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
import Home from '../pages/Home/Home/Home';
import Classes from '../pages/Classes/Classes';
import Instructors from '../pages/Instructors/Instructors';
import Dashboard from '../layouts/Dashboard';
import MySelectedClasses from '../pages/dashboard/student/MySelectedClasses';
import MyEnrolledClasses from '../pages/dashboard/student/MyEnrolledClasses';




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
        {
          path:"instructors",
          element:<Instructors></Instructors>
        },

      ]
    },
    {
      path:"dashboard",
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:"myselectedclasses",
          element:<MySelectedClasses></MySelectedClasses>
        },
        {
          path:"myenrolledclasses",
          element:<MyEnrolledClasses></MyEnrolledClasses>
        },
      ]
    }
    
  ]);

export default router;