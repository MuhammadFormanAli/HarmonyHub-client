// import axios from "axios";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const ManageClassesCard = ({ index, course,refetch }) => {
    // document.querySelector('html').setAttribute('data-theme','light')

    let a = document.querySelector('html')
    console.log(a)

    const [axiosSecure]=useAxiosSecure()
    console.log(course)
    const { className, instructorName, instructorEmail, price, status, availableSeats, img, _id } = course

    const handleUpdateStatus = (id,updatedStatus)=>{
        axiosSecure.put(`/classes/${id}`,{updatedStatus})
        .then(data=>{
            // Todo: swal 
            console.log('log from handleUpdateStatus',data)
            refetch()
        }) 
    }

    const handleFeedback = (id)=>{
        console.log({id})
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div className="font-bold">{className}</div>
                </div>
            </td>

            <td>
                <div className="font-bold">{instructorName}</div>
                <div className="text-sm opacity-50">{instructorEmail}</div>
            </td>

            <td>{availableSeats}</td>
            <td>${price}</td>
            <td>{status}</td>
            <td>
                {/* 3 buttons( Approve, Deny and send feedback) */}

                <button onClick={()=>handleUpdateStatus(_id,'approved')} disabled={status === 'approved' || status === 'denied'} className="btn btn-sm block m-1 btn-success">Approve</button>
                <button onClick={()=>handleUpdateStatus(_id,'denied')} disabled={status === 'approved' || status === 'denied'} className="btn btn-sm block m-1 btn-error">Deny</button>
                <button onClick={()=>handleFeedback(_id)} className="btn btn-sm block m-1 btn-info">Send Feedback</button>
            </td>
        </tr>
    );
};

export default ManageClassesCard;