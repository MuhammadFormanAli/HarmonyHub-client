import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {  useParams } from "react-router-dom";
import { CiLocationOn, CiMail, } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { MdOutlineWorkOutline } from "react-icons/md";

const InstructorDetails = () => {
  const id = useParams().id;
  console.log(id);

  const {data: instructor = [], isLoading:loading,} = useQuery({
      queryKey: ['users'],
      queryFn: async() => {
          const res = await axios(`https://summer-camp-sandy.vercel.app/instructor-details/${id}`)
          return res.data;
      }
  })

 

  if (loading){
    return <div>Loading...</div>
  }

  // const instructor = {
  //   photo: "https://i.ibb.co.com/5kmmK5z/qoj9s86.png",
  //   name: "John Doe",
  //   title: "Guitar Instructor",
  //   bio: "John has over 15 years of experience teaching and performing guitar.",
  //   skills: ["Classical Guitar", "Jazz Improvisation", "Songwriting"],
  //   experience: 15,
  //   qualifications: ["Bachelor in Music", "Certified Guitar Instructor"],
  //   socialLinks: [
  //     { platform: "Instagram", url: "https://instagram.com/johndoe" },
  //     { platform: "LinkedIn", url: "https://linkedin.com/in/johndoe" },
  //   ],
  //   contact: "john.doe@example.com",
  // };

  console.log(instructor);

  return (
    <section className="bg-gray-200 py-12">
      <div className="flex flex-col gap-[50px]   overflow-hidden max-w-4xl mx-auto">

        <section className=" pb-[15px] bg-[#fff] rounded ">

          <div className="w-full relative  h-[160px] mb-[90px] ">
            {/* Instructor Cover Image */}
            <img
              src={instructor?.photo}
              alt={`${instructor?.name}`}
              className="object-cover w-full h-full"
            />
            {/* profile pic */}
            <div className="w-[150px] h-[150px]   border-[7px] border-[#fff] rounded-full overflow-hidden absolute bottom-0 translate-y-[50%] left-[40px]  ">
              <img
                src={instructor?.photo}
                alt={`${instructor?.name}`}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Instructor Name and Title */}
          <div className="px-[40px]">
            <h2 className="text-2xl font-semibold text-gray-800">
              {instructor.name}
            </h2>
            <p className="text-sm text-[#D87D4A]">{instructor.title}</p>
          </div>

          {/*  contacts */}
          <div className="pt-[15px] px-[40px] grid gap-[10px] grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {/* Location  */}
            <div className="flex gap-[10px] text-sm">
              <div className=" bg-[#D87D4A] flex items-center justify-center w-[35px] h-[35px] rounded-full">
                <CiLocationOn size={20} color="fff" className="" />
              </div>
              <div>
                <p>Address:</p>
                <p className="font-semibold">Dhaka, Bangladesh</p>
              </div>
            </div>
            {/* Phone  */}
            <div className="flex gap-[10px] text-sm">
              <div className=" bg-[#D87D4A] flex items-center justify-center w-[35px] h-[35px] rounded-full">
              <FiPhone  size={20} color="fff" className="" />
              </div>
              <div>
                <p>Phone:</p>
                <p className="font-semibold">01234-567890</p>
              </div>
            </div>
            {/* Email  */}
            <div className="flex gap-[10px] text-sm">
              <div className=" bg-[#D87D4A] flex items-center justify-center w-[35px] h-[35px] rounded-full">
                <CiMail size={20} color="fff" className="" />
              </div>
              <div>
                <p>Email:</p>
                <p className="font-semibold">john@doe.com</p>
              </div>
            </div>
            {/* Experience  */}
            <div className="flex gap-[10px] text-sm">
              <div className=" bg-[#D87D4A] flex items-center justify-center w-[35px] h-[35px] rounded-full">
                <MdOutlineWorkOutline size={20} color="fff" className="" />
              </div>
              <div>
                <p>Experience:</p>
                <p className="font-semibold">{instructor?.experience} Years</p>
              </div>
            </div>
          </div>
        </section>



        <section className=" bg-white rounded">
          {/* Instructor Information */}
          <div className="px-[40px] py-[25px] flex flex-col justify-center w-full ">
            {/* Instructor Bio */}
            <h3 className="text-gray-800 font-semibold">About:</h3>
            <p className="text-gray-600">{instructor?.about}</p>

            {/* Skills */}
            <div className="mt-4">
              <h3 className="text-gray-800 font-semibold">Skills:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {instructor?.skills?.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            

            {/* Qualifications */}
            {instructor?.qualifications && (
              <div className="mt-4">
                <h3 className="text-gray-800 font-semibold">Qualifications:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {instructor?.qualifications?.map((qualification, index) => (
                    <li key={index}>{qualification}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Teaching Style or Philosophy */}
            {instructor?.teachingStyle && (
              <div className="mt-4">
                <h3 className="text-gray-800 font-semibold">
                  Teaching Philosophy:
                </h3>
                <p className="text-gray-600">{instructor?.teachingStyle}</p>
              </div>
            )}

            {/* Hobbies or Interests */}
            {instructor?.hobbies && (
              <div className="mt-4">
                <h3 className="text-gray-800 font-semibold">Hobbies:</h3>
                <p className="text-gray-600">{instructor?.hobbies?.join(", ")}</p>
              </div>
            )}

            {/* Social Media Links */}
            <div className="mt-4 flex space-x-4">
              {instructor?.socialLinks?.map((link, index) => (
                <a
                  key={index}
                  href={link?.url}
                  className="text-[#D87D4A] hover:text-[#B95C32]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link?.platform}
                </a>
              ))}
            </div>

            {/* Contact */}
            <a
              href='#'
              className="mt-6 inline-block text-white bg-[#D87D4A] hover:bg-[#B95C32] px-4 py-2 rounded-md font-semibold w-fit"
            >
              Contact Instructor
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default InstructorDetails;
