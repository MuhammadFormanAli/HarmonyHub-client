
const SelectedClassRow = ({index, course}) => {
    const handlePay = (id)=>{
        console.log(id)
    }
    const handleDelete = (id)=>{
        console.log(id)
    }
    return (
        
            <tr>
                <td>
                    {index+1}
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
                    <button onClick={()=>handlePay(course?._id)} className="btn btn-ghost btn-xs bg-yellow-900 mr-2">Pay</button>
                </th>
                <th>
                    <button onClick={()=>handleDelete(course?._id)} className="btn btn-ghost btn-xs bg-red-700">Delete</button>
                </th>

            </tr>
       
    );
};

export default SelectedClassRow;