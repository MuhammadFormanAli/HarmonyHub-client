import useAuth from "../../../hooks/useAuth";
import useCarts from "../../../hooks/useCarts";



const StudentDashboardHome = () => {
const {user}=useAuth()
const [carts]=useCarts()
console.log(carts)
const selectedCourses = carts?.filter(item => item?.payStatus === 'unpaid')
const enrolledClasses = carts?.filter(item => item?.payStatus === "paid")
const totalSpend = enrolledClasses?.reduce((sum, item) => item?.price + sum, 0)



    return (

<div className="flex-1 bg-gray-200 p-8">
        <h1 className="text-2xl font-bold mb-2">Welcome to the Dashboard!</h1>
        <h1 className="text-1xl font-bold mb-5">{user?.displayName}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Enrolled</h2>
            <p className="text-gray-700"> Enrolled Classes : {enrolledClasses?.length}</p>
          </div>

          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Selected</h2>
            <p className="text-gray-700"> Selected Classes : {selectedCourses?.length}</p>
          </div>

          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Spend</h2>
            <p className="text-gray-700">Total Spend : ${totalSpend}</p>
          </div>

        </div>
    </div>






    );
};

export default StudentDashboardHome;