import { Fade } from "react-awesome-reveal";

const PopularClassesCard = ({course}) => {
  
    return (
    <Fade>
            <div className=" md:max-h-[250px] border p-1 card card-compact rounded-none flex flex-col items-center sm:flex-row bg-base-100 shadow-xl">
            <div className="w-1/2">
            <img className="h-[250px]" src={course?.img} alt="" />
            </div>
            <div className="card-body ">
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