import { useQuery } from "@tanstack/react-query";
import ManageUsersRow from "./ManageUsersRow";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure()

    const {data: users = [], loading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await axiosSecure(`/users`)
            return res.data;
        }
    })
     
    if(loading){
        return <>loading...</>
    }
    
    return (
        <div> 
            <h1 className="text-center font-bold uppercase sm:text-xl md:text-2xl lg:text-3xl p-16 bg-sky-500">Manage Users</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User Image</th>
                            <th>Name and Email</th>
                            <th>Role</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {users?.map((User,index) => 
                        <ManageUsersRow
                        key = {User._id}
                        index = {index}
                        User = {User}
                        refetch = {refetch}
                        >
                        </ManageUsersRow>)}
                        
                        {/* row 3 */}
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;