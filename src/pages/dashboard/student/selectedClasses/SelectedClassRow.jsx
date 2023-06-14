// import axios from "axios";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const SelectedClassRow = ({ index, course, refetch }) => {

    const [axiosSecure] = useAxiosSecure()

    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`https://summer-camp-sandy.vercel.app/cart/delete/${id}`)
                    .then(data => {
                        if (data.data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            refetch()
                        }
                    })
            }
        })

    }
    return (

        <tr>
            <td>
                {index + 1}
            </td>
            <th>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={course?.img} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{course?.className}</div>
                        <div className="text-sm opacity-50">{course?.instructorName}</div>
                    </div>
                </div>
            </th>
            <td>
                <p>{course?.availableSeats}</p>
            </td>
            <td>${course?.price}</td>

            <th>


                <Link to={`payment/${course?._id}`}><button disabled={course.availableSeats === 0} className="btn btn-ghost btn-xs bg-yellow-900 mr-2">Pay</button></Link>
            </th>
            <th>
                <button onClick={() => handleDelete(course?._id)} className="btn btn-ghost btn-xs bg-red-700">Delete</button>
            </th>

        </tr>

    );
};

export default SelectedClassRow;