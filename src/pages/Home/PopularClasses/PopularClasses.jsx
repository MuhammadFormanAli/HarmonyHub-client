import { useEffect, useState } from "react";
import PopularClassesCard from "./PopularClassesCard";

const PopularClasses = () => {
    const [popular, setPopular] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/topclasses')
            .then(res => res.json())
            .then(result => {
                setPopular(result)
            })
    }, [])

    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-8"> Top Classes</h1>
            <div className="grid gap-4 grid-cols-1  lg:grid-cols-2">
                {
                    popular.map(course=><PopularClassesCard 
                    key={course._id}
                    course={course}
                    ></PopularClassesCard>)
                }
                

            </div>
        </div>
    );
};

export default PopularClasses;