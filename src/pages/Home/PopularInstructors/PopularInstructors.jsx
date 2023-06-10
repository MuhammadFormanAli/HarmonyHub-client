import axios from "axios";
import PopularInstructorCard from "./PopularInstructorCard";


const PopularInstructors = () => {

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
            <PopularInstructorCard></PopularInstructorCard>
            <PopularInstructorCard></PopularInstructorCard>
            <PopularInstructorCard></PopularInstructorCard>
            <PopularInstructorCard></PopularInstructorCard>
            <PopularInstructorCard></PopularInstructorCard>
            <PopularInstructorCard></PopularInstructorCard>
        </div>
        </div>
    );
};

export default PopularInstructors;