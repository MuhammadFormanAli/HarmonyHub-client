
import { useQuery } from "@tanstack/react-query";
import PopularInstructorCard from "./PopularInstructorCard";
import axios from "axios";




const PopularInstructors = () => {

    const {data: instructors = [], isLoading: loading,} = useQuery({
        queryKey: ['popular-instructors'],
        queryFn: async() => {
            const res = await axios('https://summer-camp-sandy.vercel.app/popular-instructors');
            return res.data;
        }
    })
 if (loading) {
    return <>loading....</>
 }
    return (
        <div className="bg-[#fff] pb-[10px]">

            <section className=" p-[10px] container  mx-auto  py-[50px] text-center ">
        <div className="text-[#000000] flex gap-[15px] flex-col ">
          <p className="text-[16px] md:text-[18px] tracking-[5px] md:tracking-[7px] text-[#D87D4A] uppercase">
            our Team
          </p>
          <p className="font-bold text-[36px] md:text-[48px] lg:text-[56px] lg:leading-[58px] leading-[38px] md:leading-[48px] uppercase">
            Meet our Teachers
          </p>
          <p className="text-[16px] md:text-[18px] text-[#000000bf] w-full max-w-[550px] mx-auto">
            Explore our most popular classes designed to boost your skills,
            build confidence, and make learning enjoyable. Find the perfect
            class to start your journey today!
          </p>
        </div>
      </section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] container mx-auto px-[10px]">
            {
					instructors?.map(instructor =>
						<PopularInstructorCard
							key={instructor?._id}
							instructor={instructor}
						></PopularInstructorCard>)
				}
           
        </div>
        </div>
    );
};

export default PopularInstructors;