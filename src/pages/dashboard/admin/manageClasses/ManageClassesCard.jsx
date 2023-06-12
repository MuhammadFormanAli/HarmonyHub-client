// import axios from "axios";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";







const ManageClassesCard = ({ index, course, refetch }) => {
    const [axiosSecure] = useAxiosSecure()
    // console.log(course)
    const { className, instructorName, instructorEmail, price, status, availableSeats, img, _id ,feedback} = course

    const handleUpdateStatus = (id, updatedStatus) => {
        axiosSecure.put(`/classes/${id}`, { updatedStatus })
            .then(data => {
                if (data.data.modifiedCount) {
                    Swal.fire('Status Updated')
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

                <button onClick={() => handleUpdateStatus(_id, 'approved')} disabled={status === 'approved' || status === 'denied'} className="btn disabled:bg-green-100 btn-sm block m-1 btn-success">Approve</button>
                <button onClick={() => handleUpdateStatus(_id, 'denied')} disabled={status === 'approved' || status === 'denied'} className="btn btn-sm disabled:bg-red-100 block m-1 btn-error">Deny</button>
                <Link  className="btn btn-sm block m-1 btn-info" to={`feedback/${_id}`}>{feedback?"Feedback Sended":"Give Feedback"}</Link>
                {/* <Link disabled={status === 'approved' ||status === 'pending'|| feedback}  className="btn btn-sm block m-1 btn-info" to={`feedback/${_id}`}>{feedback?"Feedback Sended":"Give Feedback"}</Link> */}
            </td>
        </tr>
    );
};

export default ManageClassesCard;