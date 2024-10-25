
const LatestUpdate = () => {
  return (
    <div className="  bg-[#101010] pb-[50px]">
     <section className=" p-[10px] container  mx-auto  py-[50px] text-center ">
        <div className="text-[#000000] flex gap-[15px] flex-col ">
          <p className="text-[16px] md:text-[18px] tracking-[5px] md:tracking-[7px] text-[#D87D4A] uppercase">
            Latest Update
          </p>
          <p className="font-bold text-[#f1f1f1] text-[36px] md:text-[48px] lg:text-[56px] lg:leading-[58px] leading-[38px] md:leading-[48px] uppercase">
          News and Updates
          </p>
          
        </div>
      </section>
      <section className="container mx-auto flex flex-col md:flex-row justify-between gap-3 ">
        
          <div className=" p-[40px] w-full  bg-[#fff]">
            <p className="text-[20px] md:text-[24px] text-[#000] font-bold mb-2">
              New Course Launched: Mastering the Guitar
            </p>
            <p className="text-gray-600">Published on: January 15, 2023</p>
            <button className="bg-[#D87D4A] w-fit text-[#fff] px-[15px] py-[10px] hover:bg-[#fbaf85] text-[16px] transition-all mt-[20px]">
                  Learn More
                </button>
          </div>
        


          <div className=" p-[40px] w-full  bg-[#fff]">
            <p className="text-[20px] md:text-[24px] text-[#000] font-bold mb-2">
              Community Spotlight: Meet Our Star Pianist
            </p>
            <p className="text-gray-600">Date: January 10, 2023</p>
            <button className="bg-[#D87D4A] w-fit text-[#fff] px-[15px] py-[10px] hover:bg-[#fbaf85] text-[16px] transition-all mt-[20px]">
                  Register Now
                </button>
          </div>

      </section>


    </div>
  );
};

export default LatestUpdate;
