

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
import AddClass from '../pages/dashboard/instructor/AddClass';
import MyClasses from '../pages/dashboard/instructor/myClasses/MyClasses';
import DashboardHome from '../pages/dashboard/dashboardHome/DashboardHome';
import Feedback from '../pages/dashboard/admin/feedback/Feedback';
import PrivetRoute from './PrivateRoute';
import AdminPrivate from './AdminPrivate';
import InstructorPrivate from './InstructorPrivate';





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
      element:<PrivetRoute><Dashboard></Dashboard></PrivetRoute> ,      //will be private route
      children:[
        {
          path:"dashboard-home",
          element:<PrivetRoute><DashboardHome></DashboardHome></PrivetRoute>//will be student private route
        },
        {
          path:"selected-classes",
          element:<PrivetRoute><SelectedClasses></SelectedClasses> </PrivetRoute>
        },
        {
          path:"enrolled-classes",
          element:<PrivetRoute><EnrolledClasses></EnrolledClasses></PrivetRoute> //will be student private route
        },
        {
          path:"manage-classes",
          element:<AdminPrivate><ManageClasses></ManageClasses></AdminPrivate> //will be admin private route
        },
        {
          path:"manage-users",
          element:<AdminPrivate><ManageUsers></ManageUsers></AdminPrivate> //will be admin private route
        },
        {
          path:'manage-classes/feedback/:id',
          element:<AdminPrivate><Feedback></Feedback></AdminPrivate>
        },
        {
          path:"add-class",
          element:<InstructorPrivate><AddClass></AddClass> </InstructorPrivate>
        },
        {
          path:"my-class",
          element:<InstructorPrivate><MyClasses></MyClasses></InstructorPrivate> 
        },
      ]
    }
    
  ]);

export default router;