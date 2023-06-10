

const MyClassesRow = ({ index, instructorClass}) => {
    const { className, price, status, enrolledStudents, img,feedback } = instructorClass
  

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
                </div>
            </td>

            <td>
                <div className="font-bold">{className}</div>
            </td>

            <td>
                <div className="font-bold">{enrolledStudents}</div>

            </td>
            <td>
                <div className="font-bold">{price}</div>
            </td>
            <td>
                <div className="font-bold">{status}</div>
            </td>
            <td>
                <div >{feedback}</div>
            </td>
            <td>
                <button className="btn btn-outline">Update</button>
            </td>


        </tr>
    );
};

export default MyClassesRow;