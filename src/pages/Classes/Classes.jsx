import { Helmet } from "react-helmet-async";
import useClasses from "../../hooks/useClasses";
import ClassCard from "./ClassCard";
import NotFoundItem from "../../components/shared/NotFoundItem";
import SectionLoading from "../../components/shared/SectionLoading";

const Classes = () => {
  const [classes, loading,refetch] = useClasses();

  //   console.log(classes);

  return (
    <>
      <Helmet>
        {" "}
        <title>Classes - HarmonyHub</title>
      </Helmet>
      <div className=" bg-[#fff]">
        <div className="relative flex items-center h-full    ">
          <img
            src="violin.jpg"
            alt="banner image"
            className="absolute right-0 top-0  object-cover z-0 h-full w-full "
          />
          <div className="absolute right-0 top-0  object-cover  h-full w-full  bg-gradient-to-r  from-[#101010] to-[#10101046] "></div>
          <div className="flex items-center h-full p-[10px] container  mx-auto py-[50px] md:py-[75px] lg:py-[100px] z-50 ">
            <div className="text-[#fff] flex gap-[15px] flex-col   ">
              <p className="text-[12px] md:text-[14px] tracking-[5px] md:tracking-[7px] text-[#D87D4A] uppercase">
                Explore Our Classes
              </p>
              <p className="font-bold text-[36px] md:text-[48px] lg:text-[56px] lg:leading-[58px] leading-[38px] md:leading-[48px] uppercase">
                Classes for All Levels
              </p>
              <p className="text-[14px] md:text-[16px] text-[#ffffffbf] w-full max-w-[550px]">
                Whether you&apos;re a beginner or an advanced musician, we offer
                a range of classes to suit every skill level and musical
                interest. Join us to learn, grow, and master your instrument
                with engaging, hands-on lessons tailored to your goals.
              </p>
            </div>
          </div>
        </div>


        {loading ? (
          <SectionLoading />
        ) : (
          <>
            {classes.length != 0 ? (
              <div className="container mx-auto grid gap-2 grid-cols-1  lg:grid-cols-2 px-[10px] py-[50px] ">
                {classes?.map((course) => (
                  <ClassCard key={course._id} course={course}></ClassCard>
                ))}
              </div>
            ) : (
             <NotFoundItem refetch={refetch} />
            )}
          </>
        )}
        
      </div>
    </>
  );
};

export default Classes;
