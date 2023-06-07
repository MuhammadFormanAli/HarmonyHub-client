

const InstructorCard = () => {
    return (

        <div className=" border p-1 card card-compact rounded-none flex md:flex-col bg-base-100 shadow-xl">
            <img className="max-h-[300px]" src="https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shoes" />
            <div className="  card-body">
                <h2 className="card-title">Name of Instructor</h2>
                <p>Instructor Email</p>
                <p>Total Students: 500</p>

            </div>
        </div>

    );
};

export default InstructorCard;