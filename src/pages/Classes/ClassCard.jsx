
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useRole from "../../hooks/useRole";



const ClassCard = ({ course }) => {
    const { user } = useAuth()
    const [userRole] = useRole()
    const [axiosSecure] = useAxiosSecure()
    const { role } = userRole
    const navigate = useNavigate()

    const handleSelectCourse = (course) => {

        if (!user) {
            Swal.fire('You Have To Login First')
            navigate('/login')
            return
        }

        const { img, className, instructorName, availableSeats, price, _id } = course
        const cartItem = { img, className, instructorName, availableSeats, price, courseId: _id, studentEmail: user.email, payStatus: 'unpaid' }

        axiosSecure.post('/carts', cartItem)
            .then(data => {
                if (data.data.insertedId) {
                    Swal.fire('Added to card')
                }
                if (data.data.message) {
                    Swal.fire(`${data.data.message.toUpperCase()}`)
                }
                console.log(data.data)
            })
    }


    return (
        <div className="border p-3 bg-white bg-opacity-70 max-h-500px  rounded-md relative" style={{ backgroundColor: course?.availableSeats === 0 ? '#ce2f2f86' : '' }}  >

            <div className=" flex flex-col md:flex-row ">
                <div className="">
                    <img className="rounded-md h-[150px] w-full  md:h-[250px] md:w-[350px]  object-cover " src={course.img} alt={course.name} />
                </div>

                <div className="ml-4 flex flex-col mt-5 justify-between">

                    <div>
                        <h2 className="text-xl font-bold">{course?.className}</h2>
                        <p className="text-base font-bold">Instructor: {course?.instructorName}</p>
                        <p>Available Seats: {course?.availableSeats}</p>
                    </div>

                    <button disabled={course?.availableSeats === 0 || role === 'admin' || role === 'instructor'}
                        onClick={() => handleSelectCourse(course)}
                        className="btn btn-outline text-black mb-1 w-fit"
                    >
                        <span className="text-black">Add To Cart</span>
                    </button>

                </div>
            </div>

            <p className="bg-[#ecea985e] font-bold absolute top-2 right-3 p-2 md:p-4 ">Price: ${course.price}</p>

        </div>
    );
};

export default ClassCard;
