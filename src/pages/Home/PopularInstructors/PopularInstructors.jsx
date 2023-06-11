import axios from "axios";
import PopularInstructorCard from "./PopularInstructorCard";
import useUsers from "../../../hooks/useUsers";



const PopularInstructors = () => {

	const [users] = useUsers()
	const instructors = users?.filter(instructor => instructor?.role === 'instructor').slice(0,6)



const handleTest =  ()=>{
    const updated = { newStudents : 5,newSeats:10}
    axios.post('http://localhost:5000/test/6484449938a3ac3414539216',{updated})
    .then(data=>console.log(data.data))
        
}



    return (
        <div>
            <button onClick={handleTest}>test</button>
            <h1 className="text-4xl font-bold text-center my-8">Popular Instructor</h1>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2  lg:grid-cols-3">

        
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