
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../components/shared/navbar/Loading";



const AdminDashboard = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()


    const { data: allClasses = [], isLoading: loading,  } = useQuery({
        queryKey: ['allClasses', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`all-classes?email=${user?.email}`)
            return res.data;
        }
    })

    if (loading) {
        return <Loading></Loading>
    }

    const totalStudents = allClasses.reduce((sum, item) => item.enrolledStudents + sum, 0)


    const getUniqueArrayByField = (arrayName, fieldName) => {
        let uniqueArray = [];
        arrayName.forEach((item) => {
            let fieldValue = item[fieldName];
            let index = uniqueArray.findIndex((item) => item[fieldName] === fieldValue);
            if (index === -1) {
                uniqueArray.push(item);
            }
        });

        return uniqueArray;
    };

    const totalInstructor = getUniqueArrayByField(allClasses, 'instructorEmail')
    // console.log(allClasses)

    return (
        <div>
            

<div className="flex-1 bg-gray-200 p-8">
        <h1 className="text-2xl font-bold mb-2">Welcome to the Dashboard!</h1>
        <h1 className="text-1xl font-bold mb-5">{user?.displayName}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Students</h2>
            <p className="text-gray-700">Total Students: {totalStudents}</p>
          </div>

          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Instructors</h2>
            <p className="text-gray-700">Total Instructors: {totalInstructor.length}</p>
          </div>

          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Classes</h2>
            <p className="text-gray-700">Total Classes:{allClasses.length}</p>
          </div>

          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Approved</h2>
            <p className="text-gray-700">Total Approved: {allClasses.filter(x => x.status === 'approved').length}</p>
          </div>

          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Pending</h2>
            <p className="text-gray-700">Total Pending: {allClasses.filter(x => x.status === 'pending').length}</p>
          </div>

          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Denied</h2>
            <p className="text-gray-700">Total Denied: {allClasses.filter(x => x.status === 'denied').length}</p>
          </div>

        </div>
      </div>
</div>

    );
};

export default AdminDashboard;