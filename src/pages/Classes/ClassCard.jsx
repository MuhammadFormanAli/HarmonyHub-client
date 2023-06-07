import useAuth from "../../hooks/useAuth";

const ClassCard = ({ course }) => {
    const{user} = useAuth()

    const handleSelectCourse = (classId) => {
        if (!loggedIn) {
            alert('Please log in before selecting the course.');
            return;
        }

        if (isAdminOrInstructor) {
            alert('As an admin or instructor, you cannot select a class.');
            return;
        }

        // Handle class selection logic here
        alert(`Selected class with ID: ${classId}`);
    }

    const loggedIn = true
    const isAdminOrInstructor = false


    return (
        <div className="card rounded-sm relative" style={{ backgroundColor: course.availableSeats === 0 ? 'red' : 'white' }}  >

            <div className="flex">
                <img className=" p-1 max-h-[250px]" src="https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=600" alt={course.name} />

                <div className="ml-4 flex flex-col mt-5">
                    <h2>{course.name}</h2>
                    <p>Instructor: {course.instructor}</p>
                    <p>Available Seats: {course.availableSeats}</p>
                    <button disabled={course.availableSeats === 0 || isAdminOrInstructor || !user}
                        onClick={() => handleSelectCourse(course.id)}
                        className="btn btn-outline"
                    >
                        Add To Cart
                    </button>
                </div>
            </div>

            <p className="absolute top-2 right-3 p-4">Price: ${course.price}</p>

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