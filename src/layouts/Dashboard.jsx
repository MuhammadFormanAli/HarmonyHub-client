import { FaHome } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { ImMenu } from "react-icons/im";
import useRole from "../hooks/useRole";


const Dashboard = () => {
    const [userRole] = useRole()
    console.log(userRole)

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col px-4 w-full">
                <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden"><ImMenu /></label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    {userRole?.role === 'admin' &&
                        <>
                            <li><Link to="manageClasses">Manage Classes</Link></li>
                            <li><Link to="manageUsers">Mange Users</Link></li>
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
                            <li><Link to="selectedclasses">My Selected Classes</Link></li>
                            <li><Link to="enrolledclasses">My Enrolled Classes</Link></li>
                            <li><Link to="#payhistory">Payments History</Link></li>
                        </>

                    }


                    <div className="divider"></div>
                    <li><Link to="/"><FaHome></FaHome> Home</Link> </li>
                    <li><Link to="/instructors">Instructors</Link></li>
                    <li><Link to="/classes">Classes</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;