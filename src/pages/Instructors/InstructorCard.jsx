

const InstructorCard = ({instructor}) => {
    return (

        <div className=" border p-1 card  rounded-none flex sm:flex-row md:flex-col bg-base-100 shadow-xl">
            <img className="max-h-[300px] xs:w-full sm:w-[300px] md:w-full " src="https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shoes" />
            <div className="  card-body">
                <h2 className="card-title">{instructor?.name}</h2>
                <p>Email : {instructor?.email}</p>
            </div>
        </div>

    );
};

export default InstructorCard;