import useRole from "../../../hooks/useRole";
import AdminDashboard from "../admin/AdminDashboard";
import InstructorDashboardHome from "../instructor/InstructorDashboardHome";
import StudentDashboardHome from "../student/StudentDashboardHome";

const DashboardHome = () => {
    const [userRole] = useRole()

    return (
        <div>
           {
            userRole.role === "admin" && <AdminDashboard></AdminDashboard>
           }
           {
            userRole.role === "instructor" && <InstructorDashboardHome></InstructorDashboardHome>
           }
           {
            userRole.role === "student" && <StudentDashboardHome></StudentDashboardHome>
           }
        </div>
    );
};

export default DashboardHome;