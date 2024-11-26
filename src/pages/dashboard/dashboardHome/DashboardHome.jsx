import { Helmet } from "react-helmet-async";
import useRole from "../../../hooks/useRole";
import AdminDashboard from "../admin/AdminDashboard";
import InstructorDashboardHome from "../instructor/InstructorDashboardHome";
import StudentDashboardHome from "../student/StudentDashboardHome";
import Loading from "../../../components/shared/navbar/Loading";

const DashboardHome = () => {
    const [userRole,loading] = useRole()
    
    if(loading){
        return <Loading />
    }

    return (
<>
        <Helmet><title>Dashboard - HarmonyHub</title></Helmet>

        <div>
           {
            userRole?.role === "admin" && <AdminDashboard></AdminDashboard>
           }
           {
            userRole?.role === "instructor" && <InstructorDashboardHome></InstructorDashboardHome>
           }
           {
            userRole?.role === "student" && <StudentDashboardHome></StudentDashboardHome>
           }
        </div>
</>
    );
};

export default DashboardHome;