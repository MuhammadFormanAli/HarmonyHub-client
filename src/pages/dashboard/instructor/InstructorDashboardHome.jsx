import useAuth from "../../../hooks/useAuth";
import useClasses from "../../../hooks/useClasses";

const InstructorDashboardHome = () => {
    const { user } = useAuth()
    const [classes] = useClasses()
    const totalNumberOfClass = classes.filter(item => item.instructorEmail == user.email)








    return (
        <div>
            <h1 className="bg-green-400 p-8 text-4xl font-bold rounded-md">Welcome! {user?.displayName}</h1>
            <div className="flex flex-col md:flex-row item-center justify-between my-5 gap-4 text-center">
                <div className="flex flex-col gap-2 w-full">
                    <h1 className="test-3xl font-bold rounded-md bg-info p-8">Total Classes :{totalNumberOfClass.length}</h1>
                    <h1 className="test-3xl font-bold rounded-md bg-green-200 p-8">Approved Classes :{totalNumberOfClass.filter(item => item.status == 'approved').length}</h1>
                </div>

                <div className="flex flex-col gap-2 w-full">
                    <h1 className="test-3xl font-bold rounded-md bg-yellow-200 p-8">Pending Classes :{totalNumberOfClass.filter(item => item.status == 'pending').length}</h1>
                    <h1 className="test-3xl font-bold rounded-md bg-red-400 p-8">Denied Classes :{totalNumberOfClass.filter(item => item.status == 'denied').length}</h1>
                </div>
            </div>
        </div>
    );
};

export default InstructorDashboardHome;

