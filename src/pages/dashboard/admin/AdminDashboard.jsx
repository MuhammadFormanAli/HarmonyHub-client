
import useAuth from "../../../hooks/useAuth";



const AdminDashboard = () => {
const {user}= useAuth()

    return (
        <div>
            <h1 className="bg-green-400 p-8 text-4xl font-bold rounded-md">Welcome{user?.displayName}</h1>
            <div className="flex item-center justify-between my-5">
                <h1 className="test-3xl font-bold rounded-md bg-orange-200 p-8">Total User{}</h1>
                <h1 className="test-3xl font-bold rounded-md bg-orange-200 p-8">Total Instructor{}</h1>
                <h1 className="test-3xl font-bold rounded-md bg-orange-200 p-8">Total Classes{}</h1>
            </div>



            
 
 





        </div>
    );
};

export default AdminDashboard;