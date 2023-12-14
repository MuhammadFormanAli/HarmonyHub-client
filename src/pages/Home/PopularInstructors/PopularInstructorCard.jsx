import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const PopularInstructorCard = ({ instructor }) => {
  return (
    <Slide>
      <div className="border p-4 bg-gray-200 rounded-md">
        <img
          src={instructor?.photo}
          alt="Instructor Img"
          className="w-full h-40 object-cover mb-2 rounded-md"
        />
        <h3 className="text-xl font-bold mb-2">{instructor?.name}</h3>
        <p className="text-gray-600">Violin Instructor</p>
        <p className="text-gray-600">Soloist with renowned orchestras</p>
        <Link to={`/instructors/${instructor?._id}`} className=" btn bg-blue-500 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">Details</Link>
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
