

const EnrolledClassesCard = ({course}) => {

    return (
        <div className=" border p-1 card card-compact rounded-none flex md:flex-row bg-base-100 shadow-xl">
            <img className="max-h-[200px]" src={course?.img} alt="Shoes" />
            <div className="  card-body  relative">
                <h2 className="card-title">{course?.className}</h2>
                <div>
                <p>{course?.instructorName}</p>
                <p>{course?.instructorEmail}</p>
                <progress className="progress progress-info " value="70" max="100"></progress>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Continue</button>
                </div>
            </div>
        </div>
    );
};

export default EnrolledClassesCard;