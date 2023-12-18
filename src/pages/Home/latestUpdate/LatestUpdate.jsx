import {  Fade } from "react-awesome-reveal";


const LatestUpdate = () => {
  return (
    <div className=" my-4 p-3 bg-black bg-opacity-40 rounded-md">
      <header className=" text-white py-4 text-center">
        <h1 className="text-2xl font-bold">Latest Update</h1>
      </header>
      <section className="mx-auto flex flex-col md:flex-row justify-between gap-3 ">
        <Fade duration={2000} className="w-full">
          <div className="border p-4 w-full rounded-md bg-gray-200">
            <p className="text-xl font-bold mb-2">
              New Course Launched: Mastering the Guitar
            </p>
            <p className="text-gray-600">Published on: January 15, 2023</p>
          </div>
        </Fade>
        <Fade duration={2000} className="w-full">


          <div className="border p-4 w-full rounded-md bg-gray-200">
            <p className="text-xl font-bold mb-2">
              Community Spotlight: Meet Our Star Pianist
            </p>
            <p className="text-gray-600">Published on: January 10, 2023</p>
          </div>

          {/* Add more update cards as needed */}
        </Fade>
      </section>


    </div>
  );
};

export default LatestUpdate;
