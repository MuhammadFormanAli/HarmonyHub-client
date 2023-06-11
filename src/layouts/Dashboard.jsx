import { FaHome } from "react-icons/fa";

import { ImMenu } from "react-icons/im";
import useRole from "../hooks/useRole";

import ActiveLink from "../components/shared/activeLink/ActiveLink";
import { Outlet } from "react-router-dom";



const Dashboard = () => {


    const [userRole,loading] = useRole()
    if(loading){
        return<>loading</>
    }
    // console.log(location)

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  flex flex-col px-4 w-full">
                <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden"><ImMenu /></label>
                <Outlet></Outlet>

                
              
            </div>
             
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                <li><ActiveLink to="/dashboard">  Dashboard Home</ActiveLink></li>

                    {/* Sidebar content here */}
                    {userRole?.role === 'admin' &&
                        <>
                            <li><ActiveLink to="manage-classes"> <span className="flex item-center gap-1 justify-center"> Manage Classes</span> </ActiveLink></li>
                            <li><ActiveLink to="manage-users">Mange Users</ActiveLink></li>
                        </>

                    }

                    {userRole?.role === 'instructor' &&
                        <>
                            <li><ActiveLink to="add-class">Add A Class</ActiveLink></li>
                            <li><ActiveLink to="my-class">My Classes</ActiveLink></li>
                    
                        </>

                    }

                    {userRole?.role === 'student' &&
                        <>
                            <li><ActiveLink to="selected-classes">My Selected Classes</ActiveLink></li>
                            <li><ActiveLink to="enrolled-classes">My Enrolled Classes</ActiveLink></li>
                            <li><ActiveLink to="#payhistory">Payments History</ActiveLink></li>
                        </>

                    }


                    <div className="divider"></div>
                    <li><ActiveLink to="/"><span className="flex item-center gap-1 justify-center"><FaHome></FaHome> Home</span></ActiveLink> </li>
                    <li><ActiveLink to="/instructors">Instructors</ActiveLink></li>
                    <li><ActiveLink to="/classes">Classes</ActiveLink></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;