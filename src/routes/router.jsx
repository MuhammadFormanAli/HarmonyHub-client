

import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';

import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
import Home from '../pages/Home/Home/Home';
import Classes from '../pages/Classes/Classes';
import Instructors from '../pages/Instructors/Instructors';
import Dashboard from '../layouts/Dashboard';
import SelectedClasses from '../pages/dashboard/student/selectedClasses/SelectedClasses';
import EnrolledClasses from '../pages/dashboard/student/enrolledClasses/EnrolledClasses';
import ManageClasses from '../pages/dashboard/admin/manageClasses/ManageClasses';
import ManageUsers from '../pages/dashboard/admin/manageUsers/ManageUsers';





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
      element:<Dashboard></Dashboard>, //will be private route
      children:[
        {
          path:"selectedclasses",
          element:<SelectedClasses></SelectedClasses> //will be student private route
        },
        {
          path:"enrolledclasses",
          element:<EnrolledClasses></EnrolledClasses> //will be student private route
        },
        {
          path:"manageclasses",
          element:<ManageClasses></ManageClasses> //will be admin private route
        },
        {
          path:"manageusers",
          element:<ManageUsers></ManageUsers> //will be admin private route
        },
      ]
    }
    
  ]);

export default router;