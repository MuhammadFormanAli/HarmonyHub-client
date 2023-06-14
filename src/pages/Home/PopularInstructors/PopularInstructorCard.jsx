import { Slide } from "react-awesome-reveal";


const PopularInstructorCard = ({instructor}) => {
    
    return (
        <Slide>
                    <div className=" border p-1 card card-compact rounded-none flex md:flex-col bg-base-100 shadow-xl">
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
    </div>
        </Slide>
    );
};

export default PopularInstructorCard;