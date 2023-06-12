
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
            <h1 className="bg-green-400 p-8 text-4xl font-bold rounded-md">Welcome! {user?.displayName}</h1>
            <div className="flex flex-col md:flex-row item-center justify-between my-5 gap-4 text-center">
                <h1 className="test-3xl font-bold rounded-md bg-orange-200 p-8">Total students : {totalStudents}</h1>
                <h1 className="test-3xl font-bold rounded-md bg-orange-200 p-8">Total Instructor :{totalInstructor.length}</h1>
                <h1 className="test-3xl font-bold rounded-md bg-orange-200 p-8">Total Classes :{allClasses.length}</h1>
            </div>
            <div className="flex flex-col md:flex-row item-center justify-between my-5 gap-4 text-center">
                <h1 className="test-3xl font-bold rounded-md bg-orange-200 p-8">Approved Classes :{allClasses.filter(x => x.status === 'approved').length}</h1>
                <h1 className="test-3xl font-bold rounded-md bg-orange-200 p-8">Pending Classes :{allClasses.filter(x => x.status === 'pending').length}</h1>
                <h1 className="test-3xl font-bold rounded-md bg-orange-200 p-8">Denied Classes :{allClasses.filter(x => x.status === 'denied').length}</h1>
            </div>
        </div>
    );
};

export default AdminDashboard;