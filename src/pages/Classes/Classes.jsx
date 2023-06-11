import useClasses from "../../hooks/useClasses";
import ClassCard from "./ClassCard";


const Classes = () => {
    const [classes] =useClasses()
   

    const courses = classes?.filter(course=> course?.status === "approved")

    console.log(courses)

    return (
        <div className="my-8">
            <h1 className="text-3xl text-center font-bold m-6">Our Classes</h1>
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