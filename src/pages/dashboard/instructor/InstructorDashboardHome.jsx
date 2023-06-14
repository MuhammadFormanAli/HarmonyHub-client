import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../components/shared/navbar/Loading";

const InstructorDashboardHome = () => {
    const { user } = useAuth()

    const [axiosSecure] = useAxiosSecure()

    const { data: instructorClasses = [], isLoading: loading, } = useQuery({
        queryKey: ['instructorClasses', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`instructor-classes?email=${user?.email}`)
            return res.data;
        }
    })

    if (loading) {
        return <Loading></Loading>
    }



    return (
        // <div>
        //     <h1 className="bg-green-400 p-8 text-4xl font-bold rounded-md">Welcome! {user?.displayName}</h1>
        //     <div className="flex flex-col md:flex-row item-center justify-between my-5 gap-4 text-center">
        //         <div className="flex flex-col gap-2 w-full">
        //             <h1 className="test-3xl font-bold rounded-md bg-info p-8">Total Classes :{instructorClasses.length}</h1>
        //             <h1 className="test-3xl font-bold rounded-md bg-green-200 p-8">Approved Classes :{instructorClasses.filter(item => item.status == 'approved').length}</h1>
        //         </div>

        //         <div className="flex flex-col gap-2 w-full">
        //             <h1 className="test-3xl font-bold rounded-md bg-yellow-200 p-8">Pending Classes :{instructorClasses.filter(item => item.status == 'pending').length}</h1>
        //             <h1 className="test-3xl font-bold rounded-md bg-red-400 p-8">Denied Classes :{instructorClasses.filter(item => item.status == 'denied').length}</h1>
        //         </div>
        //     </div>
        // </div>






        <div className="flex-1 bg-gray-200 p-8">
            <h1 className="text-2xl font-bold mb-2">Welcome to the Dashboard!</h1>
            <h1 className="text-1xl font-bold mb-5">{user?.displayName}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                <div className="bg-white p-4 shadow-md rounded-lg">
                    <h2 className="text-lg font-semibold mb-2">Total</h2>
                    <p className="text-gray-700">Total Classes :{instructorClasses.length}</p>
                </div>

                <div className="bg-white p-4 shadow-md rounded-lg">
                    <h2 className="text-lg font-semibold mb-2">Pending</h2>
                    <p className="text-gray-700"> Pending Classes :{instructorClasses.filter(item => item.status == 'pending').length}</p>
                </div>

                <div className="bg-white p-4 shadow-md rounded-lg">
                    <h2 className="text-lg font-semibold mb-2">Approved</h2>
                    <p className="text-gray-700">Approved Classes :{instructorClasses.filter(item => item.status == 'approved').length}</p>
                </div>
                <div className="bg-white p-4 shadow-md rounded-lg">
                    <h2 className="text-lg font-semibold mb-2">Denied</h2>
                    <p className="text-gray-700">Denied Classes :{instructorClasses.filter(item => item.status == 'denied').length}</p>
                </div>
            </div>
        </div>










    );
};

export default InstructorDashboardHome;

