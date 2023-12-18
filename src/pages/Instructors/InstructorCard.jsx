import { Link } from "react-router-dom";


const InstructorCard = ({instructor}) => {
    
    return (

        <div className=" border card  flex sm:flex-row md:flex-col bg-white bg-opacity-30 hover:bg-opacity-95 transition-all duration-500 rounded-md shadow-xl p-3">
            <img className="h-[200px] object-cover rounded-md xs:w-full sm:w-[300px] md:w-full " src={instructor?.photo} />
            <div className="  card-body pl-5 md:p-0">
                <h2 className="card-title">{instructor?.name}</h2>
                <p>Email : {instructor?.email}</p>
                <Link to={`/instructors/${instructor?._id}`} className= " btn text-center bg-blue-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">Details</Link>
            </div>
        </div>

    );
};

export default InstructorCard;