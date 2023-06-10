import useUsers from "../../hooks/useUsers";
import InstructorCard from "./InstructorCard";


const Instructors = () => {
	const [users] = useUsers()
	const instructors = users?.filter(instructor => instructor?.role === 'instructor')
	console.log(instructors)

	return (
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
	);
};

export default Instructors;