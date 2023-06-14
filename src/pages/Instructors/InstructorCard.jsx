

const InstructorCard = ({instructor}) => {
    
    return (

        <div className=" border p-1 card  rounded-none flex sm:flex-row md:flex-col bg-base-100 shadow-xl">
            <img className="max-h-[300px] xs:w-full sm:w-[300px] md:w-full " src={instructor?.photo} />
            <div className="  card-body">
                <h2 className="card-title">{instructor?.name}</h2>
                <p>Email : {instructor?.email}</p>
            </div>
        </div>

    );
};

export default InstructorCard;