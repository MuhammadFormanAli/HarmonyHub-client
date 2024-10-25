// import { Slide } from "react-awesome-reveal";

const CommunityHub = () => {
  return (
    <div className="relative flex items-center h-full   "> 
    <img
      src="community.jpg"
      alt="banner image"
      className="absolute right-0 top-0 -z-10 object-cover  h-full w-full "
    />  
      <div className="absolute right-0 top-0 -z-10 object-cover  h-full w-full bg-[#101010c7] "></div>
    <div className="flex items-center h-full p-[10px] container  mx-auto py-[50px] md:py-[75px] lg:py-[100px] ">
      <div className="text-[#fff] flex gap-[15px] flex-col   ">
        <p className="text-[12px] md:text-[14px] tracking-[5px] md:tracking-[7px] text-[#ffffff80] uppercase">
          Community Hub
        </p>
        <p className="font-bold text-[36px] md:text-[48px] lg:text-[56px] lg:leading-[58px] leading-[38px] md:leading-[48px] uppercase">
          Join Our Community
        </p>
        <p className="text-[14px] md:text-[16px] text-[#ffffffbf] w-full max-w-[550px]">
        Join our musical community to connect with fellow learners, share your experiences, and grow together on your musical journey.
        </p>
        <button className="bg-[#D87D4A] w-fit text-[#fff] px-[15px] py-[10px] hover:bg-[#fbaf85] text-[16px] transition-all">
          Join Now
        </button>
      </div>
    </div>
  </div>
  );
};

export default CommunityHub;
