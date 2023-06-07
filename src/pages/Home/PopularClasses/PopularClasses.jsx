import PopularClassesCard from "./PopularClassesCard";

const PopularClasses = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-8"> Top Classes</h1>
            <div className="grid gap-4 grid-cols-1  lg:grid-cols-2">
                <PopularClassesCard></PopularClassesCard>
                <PopularClassesCard></PopularClassesCard>
                <PopularClassesCard></PopularClassesCard>
                <PopularClassesCard></PopularClassesCard>
                <PopularClassesCard></PopularClassesCard>
                <PopularClassesCard></PopularClassesCard>
            </div>
        </div>
    );
};

export default PopularClasses;