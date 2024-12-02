// import { FaChalkboardTeacher, FaHome, FaSchool } from "react-icons/fa";
// import { RiAdminFill } from "react-icons/ri";
// import { BsPlusSquareFill } from "react-icons/bs";
// import {
//   MdAssignmentTurnedIn,
//   MdDashboard,
//   MdGroups3,
//   MdPayment,
//   MdShoppingCart,
// } from "react-icons/md";

// import { ImMenu } from "react-icons/im";
// import useRole from "../hooks/useRole";

// import { Link, Outlet } from "react-router-dom";
// import Loading from "../components/shared/navbar/Loading";

// const Dashboard = () => {
//   const [userRole, loading] = useRole();
//   if (loading) {
//     return <Loading></Loading>;
//   }
//   // console.log(location)

//   return (
//     <div className="drawer lg:drawer-open bg-gray-100">
//       <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//       <div className="drawer-content  flex flex-col  w-full">
//         <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden">
//           <ImMenu />
//         </label>
//         <Outlet></Outlet>
//       </div>

//       <div className="drawer-side">
//         <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
//         <ul className="menu p-4 w-fit h-full  text-base-content">
//           <li>
//             <Link to="/dashboard">
//               {" "}
//               <MdDashboard></MdDashboard>Dashboard Home
//             </Link>
//           </li>

//           {/* Sidebar content here */}
//           {userRole?.role === "admin" && (
//             <>
//               <li>
//                 <Link to="manage-classes">
//                   <MdGroups3></MdGroups3> Manage Classes
//                 </Link>
//               </li>
//               <li>
//                 <Link to="manage-users">
//                   <RiAdminFill></RiAdminFill> Mange Users
//                 </Link>
//               </li>
//             </>
//           )}

//           {userRole?.role === "instructor" && (
//             <>
//               <li>
//                 <Link to="add-class">
//                   <BsPlusSquareFill></BsPlusSquareFill> Add A Class
//                 </Link>
//               </li>
//               <li>
//                 <Link to="my-class">
//                   <FaSchool></FaSchool> My Classes
//                 </Link>
//               </li>
//             </>
//           )}

//           {userRole?.role === "student" && (
//             <>
//               <li>
//                 <Link to="selected-classes">
//                   {" "}
//                   <MdShoppingCart></MdShoppingCart> My Selected Classes
//                 </Link>
//               </li>
//               <li>
//                 <Link to="enrolled-classes">
//                   {" "}
//                   <MdAssignmentTurnedIn></MdAssignmentTurnedIn>My Enrolled
//                   Classes
//                 </Link>
//               </li>
//               <li>
//                 <Link to="payments-history">
//                   {" "}
//                   <MdPayment></MdPayment>Payments History
//                 </Link>
//               </li>
//             </>
//           )}

//           <div className="divider"></div>
//           <li>
//             <Link to="/">
//               <FaHome></FaHome> Home
//             </Link>{" "}
//           </li>
//           <li>
//             <Link to="/instructors">
//               <FaChalkboardTeacher></FaChalkboardTeacher> Instructors
//             </Link>
//           </li>
//           <li>
//             <Link to="/classes">
//               <MdGroups3></MdGroups3> Classes
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import { FaSchool } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { BsPlusSquareFill } from "react-icons/bs";
import {
  MdAssignmentTurnedIn,
  MdBlock,
  MdDashboard,
  MdGroups3,
  MdOutlineMessage,
  MdPayment,
  MdShoppingCart,
} from "react-icons/md";

import useRole from "../hooks/useRole";

import { Link, Outlet } from "react-router-dom";
// import Loading from "../components/shared/navbar/Loading";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const {  user } = useAuth();
  const [userRole] = useRole();
  const [isOpen, setIsOpen] = useState(false);
  // if (loading) {
  //   return <Loading></Loading>;
  // }
  // console.log(location)

  return (
    <div className="flex  bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } bg-[#1f2937] text-white flex flex-col duration-300  fixed h-full px-[10px] `}
      >
        <div>
          <a
            href="/"
            className="flex items-center gap-2 py-[20px] text-[26px] text-[#d78d45] mb-[25px] border-b "
          >
            <span>H</span>
            {isOpen && <span>harmonyHub</span>}
          </a>

          {/* Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-[#d78d45] p-3 active:bg-[#1f2937]  absolute top-[30px] right-[-10px]  text-white text-[20px]  font-bold rounded-full h-[20px] w-[20px] flex items-center justify-center "
          >
            {isOpen ? "<" : ">"}
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-2 grow ">
          <Link
            href="/"
            className="flex items-center gap-2  hover:text-[#d78d45]"
          >
            <MdDashboard size={20} />
            {isOpen && <span>Dashboard Home</span>}
          </Link>

          {/* Menu for admin   */}
          {userRole?.role === "admin" && (
            <div className="flex flex-col gap-2">
              <Link
                to="manage-classes"
                className="flex items-center gap-2  hover:text-[#d78d45]"
              >
                <MdGroups3 size={20} />
                {isOpen && <span>Manage Classes</span>}
              </Link>

              <Link
                to="manage-users"
                className="flex items-center gap-2  hover:text-[#d78d45]"
              >
                <RiAdminFill size={20} />
                {isOpen && <span>Manage Users</span>}
              </Link>

              <Link
                to="#"
                className="flex items-center gap-2  hover:text-[#d78d45]"
              >
                <MdOutlineMessage size={20} />
                {isOpen && <span>Messages</span>}
              </Link>
              <Link
                to="#"
                className="flex items-center gap-2  hover:text-[#d78d45]"
              >
                <MdBlock size={20} />
                {isOpen && <span>Blocked Users</span>}
              </Link>
            </div>
          )}


          {/* Menu for instructor   */}
          {userRole?.role === "instructor" && (
            <div className="flex flex-col gap-2">
              <Link
                to="add-class"
                className="flex items-center gap-2  hover:text-[#d78d45]"
              >
                <BsPlusSquareFill size={20} />
                {isOpen && <span>Add A Class</span>}
              </Link>

              <Link
                to="my-class"
                className="flex items-center gap-2  hover:text-[#d78d45]"
              >
                <FaSchool size={20} />
                {isOpen && <span>My Classes</span>}
              </Link>

            </div>
          )}


          {/* Menu for student   */}
          {userRole?.role === "student" && (
            <div className="flex flex-col gap-2">
              <Link
                to="selected-classes"
                className="flex items-center gap-2  hover:text-[#d78d45]"
              >
                <MdShoppingCart size={20} />
                {isOpen && <span>My Selected Classes</span>}
              </Link>

              <Link
                to="enrolled-classes"
                className="flex items-center gap-2  hover:text-[#d78d45]"
              >
                <MdAssignmentTurnedIn size={20} />
                {isOpen && <span>My Enrolled Classes</span>}
              </Link>

              <Link
                to="payments-history"
                className="flex items-center gap-2  hover:text-[#d78d45]"
              >
                <MdPayment size={20} />
                {isOpen && <span>Payment History</span>}
              </Link>
            </div>
          )}




        </div>

        {/* user info */}

        <div className="flex  gap-2 mb-[20px] ">
          <div className="avatar flex gap-[5px]">
            <div className="w-[40px] rounded-full  ">
              <img src={user ? `${user?.photoURL}` : "/avatar.jpg"} />
            </div>
          </div>

          {isOpen && (
            <div className="text-[13px]">
              <p>{user?.displayName}</p>
              <p className="text-[11px]">
                {userRole?.role ? userRole?.role : "Student"}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 ${
          isOpen ? "ml-[252px]" : "ml-[60px]"
        } transition-all duration-300  bg-gray-100`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
