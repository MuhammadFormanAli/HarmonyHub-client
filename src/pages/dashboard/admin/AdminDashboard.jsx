
import useAuth from "../../../hooks/useAuth";
import useClasses from "../../../hooks/useClasses";



const AdminDashboard = () => {
    const { user } = useAuth()
    const [classes] = useClasses()
    const totalStudents = classes.reduce((sum, item) => item.enrolledStudents + sum, 0)
    const totalClasses = classes.length
    console.log(totalStudents)


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

    const totalInstructor = getUniqueArrayByField(classes, 'instructorEmail')
    const result = getUniqueArrayByField(classes, 'instructorEmail')
    console.log(result)

    return (
        <div>
            <h1 className="bg-green-400 p-8 text-4xl font-bold rounded-md">Welcome! {user?.displayName}</h1>
            <div className="flex flex-col md:flex-row item-center justify-between my-5 gap-4 text-center">
                <h1 className="test-3xl font-bold rounded-md bg-orange-200 p-8">Total students : {totalStudents}</h1>
                <h1 className="test-3xl font-bold rounded-md bg-orange-200 p-8">Total Instructor{totalInstructor.length}</h1>
                <h1 className="test-3xl font-bold rounded-md bg-orange-200 p-8">Total Classes :{totalClasses}</h1>
            </div>
            <div className="flex flex-col md:flex-row item-center justify-between my-5 gap-4 text-center">
                <h1 className="test-3xl font-bold rounded-md bg-orange-200 p-8">Approved Classes :{classes.map(x => x.status === 'approved').length}</h1>
                <h1 className="test-3xl font-bold rounded-md bg-orange-200 p-8">Pending Classes :{classes.map(x => x.status === 'pending').length}</h1>
                <h1 className="test-3xl font-bold rounded-md bg-orange-200 p-8">Denied Classes :{classes.map(x => x.status === 'denied').length}</h1>
            </div>
        </div>
    );
};

export default AdminDashboard;