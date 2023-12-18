
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
        <div className="bg-gray-800 my-5 pb-1 rounded-md bg-opacity-40">
             <header className=" text-white py-4 text-center">
        <h1 className="text-2xl font-bold">Popular Instructors</h1>
      </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-3 py-2">
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