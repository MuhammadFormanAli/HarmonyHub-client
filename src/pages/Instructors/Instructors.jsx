import { Helmet } from "react-helmet-async";
import InstructorCard from "./InstructorCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Instructors = () => {
  const { data: instructors = [], isLoading: loading } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await axios(
        "https://summer-camp-sandy.vercel.app/instructors"
      );
      return res.data;
    },
  });

 if (loading) {
    return <>loading....</>
 }
  return (
    <div>
      <Helmet>
        <title>Instructors -HarmonyHub </title>
      </Helmet>
      <div className=" bg-white  rounded-md">
		
        <div className="relative flex items-center h-full    ">
          <img
            src="guitar.jpg"
            alt="banner image"
            className="absolute right-0 top-0  object-cover z-0 h-full w-full "
          />
          <div className="absolute right-0 top-0  object-cover  h-full w-full  bg-gradient-to-r  from-[#101010] to-[#10101046] "></div>
          <div className="flex items-center h-full p-[10px] container  mx-auto py-[50px] md:py-[75px] lg:py-[100px] z-50 ">
            <div className="text-[#fff] flex gap-[15px] flex-col   ">
              <p className="text-[12px] md:text-[14px] tracking-[5px] md:tracking-[7px] text-[#D87D4A] uppercase">
                our team
              </p>
              <p className="font-bold text-[36px] md:text-[48px] lg:text-[56px] lg:leading-[58px] leading-[38px] md:leading-[48px] uppercase">
                Meet Our teachers
              </p>
              <p className="text-[14px] md:text-[16px] text-[#ffffffbf] w-full max-w-[550px]">
                Our talented and experienced instructors are passionate about
                music and dedicated to helping each student reach their full
                potential. With expertise across various instruments and
                teaching styles, they&apos;re here to inspire, guide, and support you
                every step of the way.
              </p>
              {/* <button className="bg-[#D87D4A] w-fit text-[#fff] px-[15px] py-[10px] hover:bg-[#fbaf85] text-[16px] transition-all">
                Join Now
              </button> */}
            </div>
          </div>
        </div>

        <div className="grid gap-4  grid-cols-1 md:grid-cols-2  lg:grid-cols-4 container mx-auto px-[10px] bg-white py-[50px]">
          {instructors?.map((instructor) => (
            <InstructorCard
              key={instructor?._id}
              instructor={instructor}
            ></InstructorCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
