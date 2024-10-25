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
          backgroundColor: course?.availableSeats === 0 ? "#f92828" : "",
        }}
        className="   border border-[#f1f1f1] flex flex-col  sm:flex-row shadow p-[10px] text-[#101010]"
      >
        
          <img
            className="w-full xl:w-[200px] lg:w-[150px] h-40 object-cover"
            src={course?.img}
          />
        
        <div className="px-3 text-left w-full md:pl-3  flex flex-col gap-[10px]">
          <h2 className=" text-[18px] uppercase ">{course?.className}</h2>
          <div>
            <p className="">
              Instructor:{course?.instructorName}
            </p>
            <p className="">Email:{course?.instructorEmail}</p>
          </div>
          <div className="flex items-end mt-2 justify-between relative">
           <div className="flex flex-col gap-[5px]">
           <p className="">
              Students: {course?.enrolledStudents}
            </p>
            <p>Price: ${course?.price} </p>
           </div>
            <button
              disabled={
                course?.availableSeats === 0 ||
                role === "admin" ||
                role === "instructor"
              }
              onClick={() => handleSelectCourse(course)}
              className=" "
            >
              <span className="bg-[#D87D4A] w-fit text-[#fff] px-[15px] py-[10px] hover:bg-[#fbaf85] text-[16px] transition-all">Add To Cart</span>
            </button>
          </div>
          {/* <p className="absolute top-4 left-4 p-2 font-bold rounded-tr-md bg-yellow-900 text-white">
            ${course.price}
          </p> */}
        </div>
      </div>
    </Fade>
  );
};

export default PopularClassesCard;
