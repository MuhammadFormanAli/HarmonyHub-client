
const PopularClassesCard = ({course}) => {
    return (
        <div className=" border p-1 card card-compact rounded-none flex md:flex-row bg-base-100 shadow-xl">
            <img className="max-h-[200px]" src="https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shoes" />
            <div className="  card-body  relative">
                <h2 className="card-title">{course?.className}</h2>
                <div>
                <p>{course?.instructorName}</p>
                <p>{course?.instructorEmail}</p>
                </div>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to Cart</button>
                </div> */}
                <p className="absolute top-2 right-2 p-2 font-bold bg-yellow-900 text-white">${course.price}</p>
            </div>
        </div>
    );
};

export default PopularClassesCard;