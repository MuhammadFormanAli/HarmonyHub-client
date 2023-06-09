import useCarts from "../../../../hooks/useCarts";
import EnrolledClassesCard from "./EnrolledClassesCard";


const EnrolledClasses = () => {
    const [carts, loading] = useCarts()
    if (loading) {
        return <>loading..............</>
    }
    const enrolledClasses = carts.filter(item => item.payStatus === "paid")
    console.log(enrolledClasses)

    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-8"> My Enrolled Classes</h1>
            <div className="grid gap-4 grid-cols-1">
                {
                    enrolledClasses.map(course => <EnrolledClassesCard
                        key={course._id}
                        course={course}
                    ></EnrolledClassesCard>)
                }


            </div>
        </div>
    );
};

export default EnrolledClasses;