// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PopularClassesCard from "./PopularClassesCard";
import axios from "axios";
import SectionLoading from "../../../components/shared/SectionLoading";
import NotFoundItem from "../../../components/shared/NotFoundItem";

const PopularClasses = () => {
  const {
    data: popular = [],
    isLoading:loading,
    refetch,
  } = useQuery({
    queryKey: ["popular"],
    queryFn: async () => {
      const res = await axios(
        `https://summer-camp-sandy.vercel.app/top-classes`
      );
      return res.data;
    },
  });
  // console.log(popular)
  return (
    <div className="pb-[10px]">
      <section className=" p-[10px] container  mx-auto  py-[50px] text-center ">
        <div className="text-[#000000] flex gap-[15px] flex-col ">
          <p className="text-[16px] md:text-[18px] tracking-[5px] md:tracking-[7px] text-[#D87D4A] uppercase">
            our classes
          </p>
          <p className="font-bold text-[36px] md:text-[48px] lg:text-[56px] lg:leading-[58px] leading-[38px] md:leading-[48px] uppercase">
            most popular classes
          </p>
          <p className="text-[16px] md:text-[18px] text-[#000000bf] w-full max-w-[550px] mx-auto">
            Explore our most popular classes designed to boost your skills,
            build confidence, and make learning enjoyable. Find the perfect
            class to start your journey today!
          </p>
        </div>
      </section>

      {/* popular classes card section */}

      {loading ? (
        <SectionLoading />
      ) : (
        <>
          {popular.length != 0 ? (
            <div className="container mx-auto grid gap-2 grid-cols-1  lg:grid-cols-2 px-[10px] ">
              {popular.map((course) => (
                <PopularClassesCard
                  key={course._id}
                  course={course}
                  loading={loading}
                ></PopularClassesCard>
              ))}
            </div>
          ) : (
            <NotFoundItem refetch={refetch} />
          )}
        </>
      )}

      {/* popular classes card section */}
      {/* <div className="container mx-auto grid gap-2 grid-cols-1  lg:grid-cols-2 px-[10px] ">
        {popular.map((course) => (
          <PopularClassesCard
            key={course._id}
            course={course}
            loading={loading}
          ></PopularClassesCard>
        ))}
      </div> */}

    </div>
  );
};

export default PopularClasses;
