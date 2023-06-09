import { FaHome } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { ImMenu } from "react-icons/im";


const Dashboard = () => {
    const role = 'admin'
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
                    {role === 'admin' &&
                        <>
                            <li><Link to="manageClasses">Manage Classes</Link></li>
                            <li><Link to="manageusers">Mange Users</Link></li>
                        </>

                    }
                    {role === 'student' &&
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