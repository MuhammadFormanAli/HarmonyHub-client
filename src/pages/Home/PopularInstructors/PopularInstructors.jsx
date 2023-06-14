
import PopularInstructorCard from "./PopularInstructorCard";
import useUsers from "../../../hooks/useUsers";



const PopularInstructors = () => {

	const [users] = useUsers()
	const instructors = users?.filter(instructor => instructor?.role === 'instructor').slice(0,6)



// const handleTest =  ()=>{
//     const updated = { newStudents : 5,newSeats:10}
//     axios.post('https://summer-camp-sandy.vercel.app/test/6484449938a3ac3414539216',{updated})
//     .then(data=>console.log(data.data))
        
// }



    return (
        <div className="">
            {/* <button onClick={handleTest}>test</button> */}
            <div className="swiper4 flex items-center justify-center text-2xl md:text-3xl lg:text-4xl font-bold">
                <h1 className="text-white my-8 text-center rounded-xl p-8 mx-8 bg-[#1d1a186b]">Popular Instructor</h1>
            </div>
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