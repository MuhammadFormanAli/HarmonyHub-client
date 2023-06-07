import InstructorCard from "./InstructorCard";


const Instructors = () => {
    return (
      <div>
        <h1 className="text-4xl font-bold text-center my-8">All Instructor</h1>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
            <InstructorCard></InstructorCard>
            <InstructorCard></InstructorCard>
            <InstructorCard></InstructorCard>
            <InstructorCard></InstructorCard>
            <InstructorCard></InstructorCard>
            <InstructorCard></InstructorCard>
        </div>
      </div>
    );
};

export default Instructors;