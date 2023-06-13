import { FaHome } from "react-icons/fa";

import { ImMenu } from "react-icons/im";
import useRole from "../hooks/useRole";


import { Link, Outlet } from "react-router-dom";
import Loading from "../components/shared/navbar/Loading";



const Dashboard = () => {


    const [userRole,loading] = useRole()
    if(loading){
        return<Loading></Loading>
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
                <li><Link to="/dashboard">  Dashboard Home</Link></li>

                    {/* Sidebar content here */}
                    {userRole?.role === 'admin' &&
                        <>
                            <li><Link to="manage-classes"> <span className="flex item-center gap-1 justify-center"> Manage Classes</span> </Link></li>
                            <li><Link to="manage-users">Mange Users</Link></li>
                        </>

                    }

                    {userRole?.role === 'instructor' &&
                        <>
                            <li><Link to="add-class">Add A Class</Link></li>
                            <li><Link to="my-class">My Classes</Link></li>
                    
                        </>

                    }

                    {userRole?.role === 'student' &&
                        <>
                            <li><Link to="selected-classes">My Selected Classes</Link></li>
                            <li><Link to="enrolled-classes">My Enrolled Classes</Link></li>
                            <li><Link to="#pay-history">Payments History</Link></li>
                        </>

                    }


                    <div className="divider"></div>
                    <li><Link to="/"><span className="flex item-center gap-1 justify-center"><FaHome></FaHome> Home</span></Link> </li>
                    <li><Link to="/instructors">Instructors</Link></li>
                    <li><Link to="/classes">Classes</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;