
import useCarts from "../../../../hooks/useCarts";
import SelectedClassRow from "./SelectedClassRow";



const SelectedClasses = () => {

    const [carts, refetch] = useCarts()
    
    const selectedCourses = carts?.filter(item => item.payStatus === 'unpaid')
    return (
        <div>
            <h1 className="text-2xl text-black text-center font-bold bg-cyan-100 p-10 mb-4">My Selected Classes</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class</th>
                                <th>Available Seats</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th>Action</th>

                            </tr>
                        </thead>

                        <tbody>
                           
                            {
                                selectedCourses?.map((item, index) => <SelectedClassRow key={item._id}
                                    course={item}
                                    index={index}
                                    refetch={refetch}
                                ></SelectedClassRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SelectedClasses;