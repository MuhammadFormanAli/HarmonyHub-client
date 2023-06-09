import useClasses from "../../hooks/useClasses";
import ClassCard from "./ClassCard";


const Classes = () => {
    const [classes, loading] =useClasses()
    if(loading){
        return <div className="text-center"><span className="loading loading-spinner loading-lg"></span></div>
    }

    const courses = classes?.filter(course=> course?.status === "approved")

    console.log(courses)

    return (
        <div>
            <h1 className="text-3xl text-center font-bold m-6">Classes</h1>
            <div className="flex flex-col gap-3">
                {
                    courses.map(course => <ClassCard
                        key={course._id}
                        course={course}
                    ></ClassCard>)
                }
            </div>

        </div>
    );
};

export default Classes;