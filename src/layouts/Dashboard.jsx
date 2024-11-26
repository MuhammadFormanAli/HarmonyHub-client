import { FaChalkboardTeacher, FaHome, FaSchool } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { BsPlusSquareFill } from "react-icons/bs";
import {
  MdAssignmentTurnedIn,
  MdDashboard,
  MdGroups3,
  MdPayment,
  MdShoppingCart,
} from "react-icons/md";

import { ImMenu } from "react-icons/im";
import useRole from "../hooks/useRole";

import { Link, Outlet } from "react-router-dom";
import Loading from "../components/shared/navbar/Loading";

const Dashboard = () => {
  const [userRole, loading] = useRole();
  if (loading) {
    return <Loading></Loading>;
  }
  // console.log(location)

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  flex flex-col px-4 w-full">
        <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden">
          <ImMenu />
        </label>
        <Outlet></Outlet>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          <li>
            <Link to="/dashboard">
              {" "}
              <MdDashboard></MdDashboard>Dashboard Home
            </Link>
          </li>

          {/* Sidebar content here */}
          {userRole?.role === "admin" && (
            <>
              <li>
                <Link to="manage-classes">
                  <MdGroups3></MdGroups3> Manage Classes
                </Link>
              </li>
              <li>
                <Link to="manage-users">
                  <RiAdminFill></RiAdminFill> Mange Users
                </Link>
              </li>
            </>
          )}

          {userRole?.role === "instructor" && (
            <>
              <li>
                <Link to="add-class">
                  <BsPlusSquareFill></BsPlusSquareFill> Add A Class
                </Link>
              </li>
              <li>
                <Link to="my-class">
                  <FaSchool></FaSchool> My Classes
                </Link>
              </li>
            </>
          )}

          {userRole?.role === "student" && (
            <>
              <li>
                <Link to="selected-classes">
                  {" "}
                  <MdShoppingCart></MdShoppingCart> My Selected Classes
                </Link>
              </li>
              <li>
                <Link to="enrolled-classes">
                  {" "}
                  <MdAssignmentTurnedIn></MdAssignmentTurnedIn>My Enrolled
                  Classes
                </Link>
              </li>
              <li>
                <Link to="payments-history">
                  {" "}
                  <MdPayment></MdPayment>Payments History
                </Link>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <Link to="/">
              <FaHome></FaHome> Home
            </Link>{" "}
          </li>
          <li>
            <Link to="/instructors">
              <FaChalkboardTeacher></FaChalkboardTeacher> Instructors
            </Link>
          </li>
          <li>
            <Link to="/classes">
              <MdGroups3></MdGroups3> Classes
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
