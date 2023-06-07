

const SelectedClassRow = ({index}) => {
    const id = 12452
    const url = "https://images.unsplash.com/photo-1605020420620-20c943cc4669?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"

    const handlePay = (id)=>{
        console.log(id)
    }
    const handleDelete = (id)=>{
        console.log(id)
    }
    return (
        
            <tr>
                <th>
                    {index+1}
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={url} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">Class Name</div>
                            <div className="text-sm opacity-50">Instructor Name</div>
                        </div>
                    </div>
                </td>
                <td>
                    <p>available seat:20</p>
                </td>
                <td>$70</td>
                <th>
                    <button onClick={()=>handlePay(id)} className="btn btn-ghost btn-xs bg-yellow-900 mr-2">Pay</button>
                    <button onClick={()=>handleDelete(id)} className="btn btn-ghost btn-xs bg-red-700">Delete</button>
                </th>
            </tr>
       
    );
};

export default SelectedClassRow;