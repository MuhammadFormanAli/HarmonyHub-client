// import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import {  FaFacebookF, FaLinkedinIn, FaPinterestP, FaTwitter } from "react-icons/fa";


const PopularInstructorCard = ({ instructor }) => {
  return (
    <div>
  
      <div className="border flex flex-col items-center p-[10px]  h-full ">
       <Link to={`/instructors/${instructor?._id}`}>
       <div className="w-[250px] h-[250px] rounded-full p-[15px] hover:bg-[#D87D4A] border-[#D87D4A] border transition-all duration-500 ">
        <img
          src={instructor?.photo}
          alt="Instructor Img"
          className="w-full h-full object-cover rounded-full  border-[#fff] border-[8px]"
        />
        </div>
       </Link>

        <div className="flex flex-col items-center justify-center">
          <p className="text-[#101010] text-[28px] md:text-[36px] font-semibold  leading-[40px] mt-[15px]">{instructor?.name}</p>
          <p className="text-[#10101080] text-[20px] md:text-[24px] font-semibold tracking-[3px] ">Teaching Instrument</p>
          <div className="flex gap-[15px] items-center justify-center pt-[15px]  ">
            <Link to='#'> <FaLinkedinIn size={20} className="hover:text-[#D87D4A] transition-all duration-300" /></Link>
            <Link to='#'> <FaTwitter size={20} className="hover:text-[#D87D4A] transition-all duration-300"  /></Link>
            <Link to='#'> <FaFacebookF  size={20} className="hover:text-[#D87D4A] transition-all duration-300" /></Link>
            <Link to='#'> <FaPinterestP size={20} className="hover:text-[#D87D4A] transition-all duration-300"  /></Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PopularInstructorCard;
