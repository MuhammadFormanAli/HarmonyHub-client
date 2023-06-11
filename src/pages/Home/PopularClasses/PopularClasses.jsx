// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PopularClassesCard from "./PopularClassesCard";
import axios from "axios";

const PopularClasses = () => {
    // const [popular, setPopular] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:5000/topclasses')
    //         .then(res => res.json())
    //         .then(result => {
    //             setPopular(result)
    //         })
    // }, [])
    const {data: popular = [], loading} = useQuery({
        queryKey: ['popular'],
        queryFn: async() => {
            const res = await axios(`http://localhost:5000/topclasses`)

            return res.data;
        }
    })





    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-8"> Top Classes</h1>
            <div className="grid gap-2 grid-cols-1  lg:grid-cols-2">
                {
                    popular.map(course=><PopularClassesCard 
                    key={course._id}
                    course={course}
                    loading={loading}
                    ></PopularClassesCard>)
                }
                

            </div>
           
        </div>
    );
};

export default PopularClasses;