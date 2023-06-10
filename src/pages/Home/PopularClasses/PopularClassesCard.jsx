import { Fade } from "react-awesome-reveal";

const PopularClassesCard = ({course,loading}) => {
    if(loading){
        return <>loading</>
    }
    return (
    <Fade>
            <div className=" border p-1 card card-compact rounded-none flex md:flex-row bg-base-100 shadow-xl">
            <img className="max-h-[200px]" src={course?.img} alt="Shoes" />
            <div className="  card-body  relative">
                <h2 className="card-title">{course?.className}</h2>
                <div>
                <p className="font-bold text-lg">Instructor:{course?.instructorName}</p>
                <p className="font-bold">Email:{course?.instructorEmail}</p>
                <p className="mt-8 font-extrabold text-base">Students: {course?.enrolledStudents}</p>
                </div>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to Cart</button>
                </div> */}
                <p className="absolute top-2 right-2 p-2 font-bold bg-yellow-900 text-white">${course.price}</p>
            </div>
        </div>
    </Fade>
    );
};

export default PopularClassesCard;