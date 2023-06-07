
const PopularClassesCard = () => {

    return (
        <div className=" border p-1 card card-compact rounded-none flex md:flex-row bg-base-100 shadow-xl">
            <img className="max-h-[200px]" src="https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shoes" />
            <div className="  card-body justify-between">
                <h2 className="card-title">Learn Play Guitar</h2>
                <div>
                <p>Name of Instructor</p>
                <p>Total Students: 50</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default PopularClassesCard;