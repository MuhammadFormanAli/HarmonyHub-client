import axios from "axios";
import Swal from "sweetalert2";

const SelectedClassRow = ({ index, course, refetch }) => {

    const handleAvailableSeats =  (courseId)=>{
        axios.put(`http://localhost:5000/class/${courseId}`)
        .then(data=>console.log(data.data))
            
    }


    const handlePay = (id,courseId) => {
        const updatedStatus = 'paid'
        axios.put(`http://localhost:5000/cartItem/${id}`, { updatedStatus })
            .then(data => {
                if (data.data.modifiedCount) {
                    Swal.fire('You have enrolled successfully')
                    handleAvailableSeats(courseId)
                    refetch()
                }

            })
    }


    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/cart/delete/${id}`)
        .then(data=>{
            if(data.data.deletedCount){
                Swal.fire('Deleted successful')
                refetch()
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
                <button disabled={course.availableSeats === 0} onClick={() => handlePay(course?._id, course.courseId)} className="btn btn-ghost btn-xs bg-yellow-900 mr-2">Pay</button>
            </th>
            <th>
                <button onClick={() => handleDelete(course?._id)} className="btn btn-ghost btn-xs bg-red-700">Delete</button>
            </th>

        </tr>

    );
};

export default SelectedClassRow;