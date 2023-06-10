import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure"
import useAuth from "../../../../hooks/useAuth";
import MyClassesRow from "./MyClassesRow";


const MyClasses = () => {

    const [axiosSecure] = useAxiosSecure()
    const {user} = useAuth()

    const { data: instructorClasses = [], loading, refetch } = useQuery({
        queryKey: ['instructorClasses',user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/classes/${user.email}`)
            return res.data;
        }
    })

    if(loading){
        return <>loading</>
    }

    return (
        <div>
            <h1 className="text-center font-bold sm:text-xl md:text-2xl lg:text-3xl p-16 bg-sky-500">My Classes</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Enrolled students</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {instructorClasses?.map((instructorClass, index) =>
                        
                            <MyClassesRow
                                key={instructorClass._id}
                                index={index}
                                instructorClass={instructorClass}
                                refetch={refetch}
                            >
                            </MyClassesRow>
                            )}

                        {/* row 3 */}

                    </tbody>
                </table>
            </div>
        </div>


    );
};

export default MyClasses;