
import useAuth from "../../hooks/useAuth";

const ClassCard = ({ course }) => {
    const { user } = useAuth()
    

    const handleSelectCourse = (course) => {

        const {img,className,instructorName,availableSeats,price,_id }= course
        const cartItem = {img,className,instructorName,availableSeats,price, courseId:_id,studentEmail:user.email}
        console.log(cartItem)
        


    }

   
    const isAdminOrInstructor = false


    return (
        <div className="border card text-slate-950 rounded-sm relative" style={{ backgroundColor: course?.availableSeats === 0 ? '#c74040' : 'white' }}  >

            <div className=" flex flex-col md:flex-row">
                <img className=" p-1 max-h-[250px]" src={course.img} alt={course.name} />

                <div className="ml-4 flex flex-col mt-5 justify-between">

                    <div>
                        <h2 className="text-2xl font-bold">{course?.className}</h2>
                        <p className="text-lg font-bold">Instructor: {course?.instructorName}</p>
                        <p>Available Seats: {course?.availableSeats}</p>
                    </div>

                    <button disabled={course?.availableSeats === 0 || isAdminOrInstructor}
                        onClick={() => handleSelectCourse(course)}
                        className="btn btn-outline text-black mb-1 w-fit"
                    >
                        <span className="text-black">Add To Cart</span>
                    </button>

                </div>
            </div>

            <p className="bg-[#eceb98] font-bold absolute top-2 right-3 p-4 ">Price: ${course.price}</p>

        </div>
    );
};

export default ClassCard;

/**
 * Image
Name
Instructor name
Available seats
Price
Select Button.*/