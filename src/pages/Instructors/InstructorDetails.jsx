import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const InstructorDetails = () => {

    const id = useParams().id
    console.log(id)



    const {data: instructor = [], isLoading:loading,} = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await axios(`https://summer-camp-sandy.vercel.app/instructor-details/${id}`)
            return res.data;
        }
    })


    // const instructors = [
    //     {
    //       id: 1,
    //       name: 'John Smith',
    //       instrument: 'Guitar',
    //       experience: '10+ years of teaching experience',
    //       description: 'John is a passionate guitar instructor with over 10 years of teaching experience. He specializes in various guitar styles, including rock, blues, and classical.',
    //       image: 'https://images.unsplash.com/photo-1517230878791-4d28214057c2?q=80&w=750&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2VyfGVufDB8fDB8fHww',
    //     },
    //     {
    //       id: 2,
    //       name: 'Emily Davis',
    //       instrument: 'Piano',
    //       experience: 'Classically trained pianist',
    //       description: 'Emily is a classically trained pianist with a deep love for music. Her teaching focuses on technique, musicality, and helping students express themselves through the piano.',
    //       image: 'https://images.unsplash.com/photo-1517230878791-4d28214057c2?q=80&w=750&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2VyfGVufDB8fDB8fHww',
    //     },
    //     // Add more instructors as needed
    //   ];

  if (loading){
    return <div>Loading...</div>
  }

  console.log(instructor)

    return (
        <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={instructor?.photo} alt={instructor?.name} className="w-full h-auto rounded-md mb-4" />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">{instructor?.name}</h2>
            <p className="text-lg mb-2">
            <strong> Email:{instructor?.email}</strong> 
            </p>

            <p className="text-lg mb-2">
              <strong>Instrument:</strong> Guitar
            </p>
            <p className="text-lg mb-2">
              <strong>Experience:</strong> 10+ years of teaching experience
            </p>
            <p className="text-lg mb-4">Emily is a classically trained pianist with a deep love for music. Her teaching focuses on technique, musicality, and helping students express themselves through the piano.</p>
            <Link to='/instructors' className="text-center bg-blue-500 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
              Contact Instructor
            </Link>
          </div>
        </div>
      </div>
    </section>

    );
};

export default InstructorDetails;