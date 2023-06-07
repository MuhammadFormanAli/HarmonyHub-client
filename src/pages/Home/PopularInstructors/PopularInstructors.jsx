import PopularInstructorCard from "./PopularInstructorCard";


const PopularInstructors = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-8">Popular Instructor</h1>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
            <PopularInstructorCard></PopularInstructorCard>
            <PopularInstructorCard></PopularInstructorCard>
            <PopularInstructorCard></PopularInstructorCard>
            <PopularInstructorCard></PopularInstructorCard>
            <PopularInstructorCard></PopularInstructorCard>
            <PopularInstructorCard></PopularInstructorCard>
        </div>
        </div>
    );
};

export default PopularInstructors;