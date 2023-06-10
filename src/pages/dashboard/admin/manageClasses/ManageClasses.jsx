import useClasses from "../../../../hooks/useClasses";
import ManageClassesCard from "./ManageClassesCard";


const ManageClasses = () => {
    const [classes, loading, refetch] = useClasses()
    if(loading){
        return <>Loading from Manage Class Card</>
    }

    // let a = document.querySelector('html').setAttribute('data-theme','light')
   
    return (
        <div> 
            <h1 className="text-center font-bold sm:text-xl md:text-2xl lg:text-3xl p-16 bg-sky-500">Manage Classes</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Classes</th>
                            <th>Instructor</th>
                            <th>Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {classes?.map((classItem,index) => 
                        <ManageClassesCard
                        key={classItem._id}
                        course={classItem}
                        index={index}
                        refetch={refetch}
                        >
                        </ManageClassesCard>)}
                        
                        {/* row 3 */}
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;