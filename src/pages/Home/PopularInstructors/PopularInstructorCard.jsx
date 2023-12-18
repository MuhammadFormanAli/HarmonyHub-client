import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const PopularInstructorCard = ({ instructor }) => {
  return (
    <Slide>
      <div className="border p-4 bg-white bg-opacity-50 hover:bg-opacity-75 saturate-50 hover:saturate-100 rounded-md">
        <img
          src={instructor?.photo}
          alt="Instructor Img"
          className="w-full h-40 object-cover mb-2 rounded-md"
        />
       <div className="flex justify-between">
       <h3 className="text-xl font-bold mb-2">{instructor?.name}</h3>
        <p className=" font-bold">Violin Instructor</p>
       </div>
        <p className="text-gray-600">Talented violin instructor inspires students with precision, passion, and patience, nurturing musical expression and technical excellence harmoniously. </p>
      
      <div className="flex justify-end pt-4">
        <Link to={`/instructors/${instructor?._id}`} className=" btn bg-blue-500 text-white py-1 px-4 rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">Details</Link>

      </div>
      </div>

      {/* <div className=" border p-1 card card-compact rounded-none flex md:flex-col bg-base-100 shadow-xl">
        <img className="h-[300px]" src={instructor?.photo}/>
        <div className="  card-body">
            <h2 className="card-title">{instructor?.name}</h2>
            <div>
            <p>Total class:10</p>
            <p>Total Students: 500</p>
            </div>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
            </div>
        </div>
    </div> */}
    </Slide>
  );
};

export default PopularInstructorCard;
