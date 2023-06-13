import useCarts from "../../../../hooks/useCarts";
import Payment from "../payment/Payment";
import EnrolledClassesCard from "./EnrolledClassesCard";


const EnrolledClasses = () => {
    const [carts] = useCarts()
    
    const enrolledClasses = carts?.filter(item => item.payStatus === "paid")
    // console.log(enrolledClasses)

    return (
        <div>
            <Payment></Payment>
            <h1 className="text-2xl text-black text-center font-bold bg-cyan-100 p-10 mb-4"> My Enrolled Classes</h1>
            <div className="grid gap-4 grid-cols-1">
                {
                    enrolledClasses.map(course => <EnrolledClassesCard
                        key={course?._id}
                        course={course}
                    ></EnrolledClassesCard>)
                }


            </div>
        </div>
    );
};

export default EnrolledClasses;