import { Fade } from "react-awesome-reveal";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PopularClassesCard = ({course}) => {

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
    <Fade>
            <div style={{ backgroundColor: course?.availableSeats === 0 ? '#ce2f2f86' : '' }}  className=" md:max-h-[255px] border p-1 card card-compact rounded-none flex flex-col items-center sm:flex-row bg-base-100 shadow-xl">
            <div className=" w-ful lg:w-1/2">
            <img className="h-[250px]" src={course?.img} alt="" />
            </div>
            <div className="card-body  ">
                <h2 className="card-title">{course?.className}</h2>
                <div>
                <p className="font-bold text-lg">Instructor:{course?.instructorName}</p>
                <p className="font-bold">Email:{course?.instructorEmail}</p>
                <p className="mt-8 font-extrabold text-base">Students: {course?.enrolledStudents}</p>
                </div>
                <button disabled={course?.availableSeats === 0 || role === 'admin' || role === 'instructor'}
                        onClick={() => handleSelectCourse(course)}
                        className="btn btn-outline text-black mb-1 w-fit"
                    >
                        <span className="text-black">Add To Cart</span>
                    </button>
                <p className="absolute top-2 right-2 p-2 font-bold bg-yellow-900 text-white">${course.price}</p>
            </div>
        </div>
    </Fade>
    );
};

export default PopularClassesCard;