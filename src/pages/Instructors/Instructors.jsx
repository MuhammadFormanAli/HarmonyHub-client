import { Helmet } from "react-helmet-async";
import InstructorCard from "./InstructorCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";


const Instructors = () => {

    const {data: instructors = [], isLoading: loading,} = useQuery({
        queryKey: ['instructors'],
        queryFn: async() => {
            const res = await axios('https://summer-camp-sandy.vercel.app/instructors');
            return res.data;
        }
    })

 if (loading) {
    return <>loading....</>
 }
	return (

		<>
		<Helmet><title>Instructors -HarmonyHub </title></Helmet>
		<div className="my-8">
			<h1 className="text-4xl font-bold text-center my-8">All Instructor</h1>
			<div className="grid gap-4 grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
				{
					instructors?.map(instructor =>
						<InstructorCard
							key={instructor?._id}
							instructor={instructor}
						></InstructorCard>)
				}

			</div>
		</div>
		</>
	);
};

export default Instructors;