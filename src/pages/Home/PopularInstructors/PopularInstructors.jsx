
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
        <div className="">
            {/* <div className="swiper3 flex items-center justify-center text-2xl md:text-3xl lg:text-4xl font-bold">
                <h1 className="text-white my-8 text-center rounded-xl p-8 mx-8 bg-[#1d1a186b]">Popular Instructor</h1>
            </div> */}
             <header className="bg-gray-800 text-white py-4 text-center">
        <h1 className="text-2xl font-bold">Popular Instructors</h1>
      </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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