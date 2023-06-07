import ClassCard from "./ClassCard";


const Classes = () => {
    const courses = [
        {
            id: 1,
            image: 'class1.jpg',
            name: 'Class 1',
            instructor: 'John Doe',
            availableSeats: 10,
            price: 19.99,
        },
        {
            id: 2,
            image: 'class2.jpg',
            name: 'Class 2',
            instructor: 'Jane Smith',
            availableSeats: 0,
            price: 14.99,
        }]

    return (
        <div>
            <h1>Classes</h1>
            <div className="flex flex-col gap-3">
                {
                    courses.map(course => <ClassCard
                        key={course.id}
                        course={course}
                    ></ClassCard>)
                }
            </div>

        </div>
    );
};

export default Classes;