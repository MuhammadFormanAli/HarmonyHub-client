import { Fade } from "react-awesome-reveal";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PopularClassesCard = ({ course }) => {
  const { user } = useAuth();
  const [userRole] = useRole();
  const [axiosSecure] = useAxiosSecure();
  const { role } = userRole;
  const navigate = useNavigate();

  const handleSelectCourse = (course) => {
    if (!user) {
      Swal.fire("You Have To Login First");
      navigate("/login");
      return;
    }

    const { img, className, instructorName, availableSeats, price, _id } =
      course;
    const cartItem = {
      img,
      className,
      instructorName,
      availableSeats,
      price,
      courseId: _id,
      studentEmail: user.email,
      payStatus: "unpaid",
    };

    axiosSecure.post("/carts", cartItem).then((data) => {
      if (data.data.insertedId) {
        Swal.fire("Added to card");
      }
      if (data.data.message) {
        Swal.fire(`${data.data.message.toUpperCase()}`);
      }
      console.log(data.data);
    });
  };

  return (
    <Fade>
      <div
        style={{
          backgroundColor: course?.availableSeats === 0 ? "#ce2f2f86" : "",
        }}
        className=" bg-base-100 p-3 bg-opacity-50 hover:bg-opacity-75 saturate-50 hover:saturate-100 rounded-md md:max-h-[255px] border sm:pl-4 card card-compact flex flex-col items-center sm:flex-row shadow-xl"
      >
        
          <img
            className="w-full xl:w-[200px] lg:w-[150px] h-40 object-cover rounded-md"
            src={course?.img}
          />
        
        <div className="p-3 text-left w-full md:pl-3 ">
          <h2 className=" mt-0 lg:mt-4 text-base md:text-lg">{course?.className}</h2>
          <div>
            <p className="font-semibold text-sm md:text-base">
              Instructor:{course?.instructorName}
            </p>
            <p className="font-semibold text-xs md:text-sm">Email:{course?.instructorEmail}</p>
          </div>
          <div className="flex mt-2 justify-between relative">
            <p className=" font-semibold text-sm py-1">
              Students: {course?.enrolledStudents}
            </p>
            <button
              disabled={
                course?.availableSeats === 0 ||
                role === "admin" ||
                role === "instructor"
              }
              onClick={() => handleSelectCourse(course)}
              className="border p-2  text-black rounded text-sm "
            >
              <span className="text-black">Add To Cart</span>
            </button>
          </div>
          <p className="absolute top-4 right-4 p-2 font-bold rounded-tr-md bg-yellow-900 text-white">
            ${course.price}
          </p>
        </div>
      </div>
    </Fade>
  );
};

export default PopularClassesCard;
