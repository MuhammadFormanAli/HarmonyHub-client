import { Link } from "react-router-dom";


const InstructorCard = ({instructor}) => {
    
    return (

        <div className=" border p-1 card  rounded-none flex sm:flex-row md:flex-col bg-base-100 shadow-xl">
            <img className="max-h-[300px] xs:w-full sm:w-[300px] md:w-full " src={instructor?.photo} />
            <div className="  card-body">
                <h2 className="card-title">{instructor?.name}</h2>
                <p>Email : {instructor?.email}</p>
                <Link to={`/instructors/${instructor?._id}`} className= " btn text-center bg-blue-500 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">Details</Link>
            </div>
        </div>

    );
};

export default InstructorCard;