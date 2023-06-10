
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const ManageUsersRow = ({ index, User, refetch }) => {
    const{user} = useAuth()
    const[axiosSecure] = useAxiosSecure()

    const { name, email, role, photo, _id } = User


    // const handleMakeAdmin = (id,updatedRole)=>{
    //     axios.put(`http://localhost:5000/users/${id}`,{updatedRole})
    //     .then(data=>{
    //         console.log(data.data)
    //         refetch()
    //     }) 
                
    // }

    // const handleMakeInstructor = (id,updatedRole)=>{
    //     axios.put(`http://localhost:5000/users/${id}`,{updatedRole})
    //     .then(data=>{
    //         console.log(data.data)
    //     }) 
    //     refetch()
                
    // }

    const handleRole = (id,updatedRole)=>{
        axiosSecure.put(`/users/${id}`,{updatedRole})
        .then(data=>{
            console.log(data.data)
            if(data.data.modifiedCount){
                Swal.fire('User Role Updated')
                refetch()
            }

        }) 

    }


    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>

            <td>
                <div className="font-bold">{name}</div>
                <div className="text-sm opacity-50">{email}</div>
            </td>

            <td className="capitalize font-bold">{role}</td>
            <td>
                <button onClick={() => handleRole(_id, 'admin')} disabled={role === 'admin'} className="btn btn-sm block m-1 btn-success">Admin</button>
            </td>
            <td>
                <button onClick={() => handleRole(_id, 'instructor')} disabled={role === 'instructor' || email === user?.email} className="btn btn-sm block m-1 btn-error">Instructor</button>
            </td>

        </tr>
    );
};



export default ManageUsersRow;