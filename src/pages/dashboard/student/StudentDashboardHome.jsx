import useAuth from "../../../hooks/useAuth";
import useCarts from "../../../hooks/useCarts";



const StudentDashboardHome = () => {
const {user}=useAuth()
const [carts]=useCarts()
console.log(carts)
const selectedCourses = carts?.filter(item => item.payStatus === 'unpaid')
const enrolledClasses = carts?.filter(item => item.payStatus === "paid")
const totalSpend = enrolledClasses.reduce((sum, item) => item.price + sum, 0)



    return (
        <div className="flex items-center justify-center h-full border-4">
            <div>
            <h1 className="bg-green-400 p-8 text-4xl font-bold rounded-md">Welcome! {user?.displayName}</h1>
            <div className="flex flex-col md:flex-row item-center justify-between my-5 gap-4 text-center">
                <div className="flex flex-col md:flex-row justify-between gap-2 w-full">
                    <h1 className="test-3xl font-bold rounded-md bg-green-200 p-8">Enrolled Classes :{enrolledClasses.length}</h1>
                    <h1 className="test-3xl font-bold rounded-md bg-info p-8">Selected Classes :{selectedCourses.length}</h1>
                    <h1 className="test-3xl font-bold rounded-md bg-red-200 p-8">Total Spend :${totalSpend}</h1>
                </div>

                
            </div>
        </div>
        </div>
    );
};

export default StudentDashboardHome;