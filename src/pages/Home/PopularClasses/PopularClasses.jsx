// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PopularClassesCard from "./PopularClassesCard";
import axios from "axios";

const PopularClasses = () => {
    const { data: popular = [], loading } = useQuery({
        queryKey: ['popular'],
        queryFn: async () => {
            const res = await axios(`http://localhost:5000/top-classes`)
            return res.data;
        }
    })



    
    return (
        <div className="my-5">
            <div className="swiper4 flex items-center justify-center text-2xl md:text-3xl lg:text-4xl font-bold">
                <h1 className="text-white my-8 text-center rounded-xl p-8 mx-8 bg-[#1d1a186b]">Popular Classes</h1>
            </div>
            <div className="grid gap-2 grid-cols-1  lg:grid-cols-2">
                {
                    popular.map(course => <PopularClassesCard
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