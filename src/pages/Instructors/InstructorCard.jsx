import { Link } from "react-router-dom";

const InstructorCard = ({ instructor }) => {
  return (
    <div>
<div className="relative group h-full w-full transition-transform duration-500">
  <div className="h-full w-full overflow-hidden">
  <img src={instructor?.photo} alt="instructor image" className="h-full w-full object-cover  group-hover:scale-110 transition-all duration-700 " />
  </div>
  <div className="absolute inset-0 flex flex-col items-center justify-center  bg-black bg-opacity-60 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 ">
    <p className="text-2xl font-semibold">{instructor?.name}</p>
    <p className="text-lg mt-2">Email : {instructor?.email}</p>
    <Link
      to={`/instructors/${instructor?._id}`}
      className="bg-[#D87D4A] w-fit text-[#fff] px-[15px] py-[10px] hover:bg-[#fbaf85] text-[16px] transition-all inline-block mt-[15px]"
    >
      View Details
    </Link>
  </div>
</div>
    </div>
  );
};

export default InstructorCard;
