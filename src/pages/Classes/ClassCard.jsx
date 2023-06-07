import {  useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ClassCard = ({ course }) => {
    const { user } = useAuth()
    // const location = useLocation()
    const navigate = useNavigate()

    const handleSelectCourse = (classId) => {
        if (!user) {
            alert('Please log in before selecting the course.');
            return navigate('/login')
        }

        if (isAdminOrInstructor) {
            alert('As an admin or instructor, you cannot select a class.');
            return;
        }

        // Handle class selection logic here
        alert(`Selected class with ID: ${classId}`);
    }

   
    const isAdminOrInstructor = false


    return (
        <div className="card text-slate-950 rounded-sm relative" style={{ backgroundColor: course.availableSeats === 0 ? '#c74040' : 'white' }}  >

            <div className=" flex flex-col md:flex-row">
                <img className=" p-1 max-h-[250px]" src="https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=600" alt={course.name} />

                <div className="ml-4 flex flex-col mt-5 justify-between">

                    <div>
                        <h2 className="text-2xl font-bold">{course.name}</h2>
                        <p>Instructor: {course.instructor}</p>
                        <p>Available Seats: {course.availableSeats}</p>
                    </div>

                    <button disabled={course.availableSeats === 0 || isAdminOrInstructor}
                        onClick={() => handleSelectCourse(course.id)}
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