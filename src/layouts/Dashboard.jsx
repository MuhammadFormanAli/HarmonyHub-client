import { FaHome } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to="myselectedclasses">My Selected Classes</Link></li>
                    <li><Link to="myenrolledclasses">My Enrolled Classes</Link></li>

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