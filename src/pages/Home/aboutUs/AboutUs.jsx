// import { useState } from "react";


const AboutUs = () => {
  // const [isLogin, setIsLogin] = useState(true);

    return (
      <div>
        <section className="bg-[#fff] relative ">


          <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] py-[50px] container mx-auto px-[10px] items-center ">
          <div className=" w-full  flex flex-col z-20 ">
          <p className="text-[12px] md:text-[14px] tracking-[5px] md:tracking-[7px] text-[#D87D4A] uppercase">
                  About Us
                </p>
            <p className="font-bold text-[24px] md:text-[30px] lg:text-[36px] lg:leading-[38px] leading-[26px] md:leading-[32px] uppercase md:text-[#101010] text-[#fff] ">
            Passion for Music, Dedication to Teaching
            </p>
            <p className="text-[14px] md:text-[16px]  mt-[15px] md:text-[#101010] text-[#fff]" >We believe music has the power to transform lives. Our mission is to make learning music accessible, enjoyable, and inspiring for all ages. With experienced instructors and a supportive community, we&apos;re here to help you reach your full musical potential.</p>
            <button className="bg-[#101010] w-fit text-[#fff] px-[15px] py-[10px] hover:bg-[#101010bf] text-[16px] transition-all mt-[20px]">
                  Discover More
                </button>
          </div>
          <div className="h-full w-full bg-[#101010bb] absolute top-0 left-0 md:hidden z-10 "></div>
          <img className="h-full w-full object-cover object-center absolute top-0 left-0 md:static " src="https://plus.unsplash.com/premium_photo-1664302427357-40eb7c8fd3c0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWN8ZW58MHx8MHx8fDA%3D" alt="About Us"  />

          </div>

          



        {/* <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4">
                Welcome to the Music Learning Hub, your go-to destination for mastering musical instruments and connecting with a vibrant community of learners.
              </p>
              <p className="text-lg mb-4">
                At Music Learning Hub, we believe in the transformative power of music education. Whether you are a beginner picking up your first instrument or an experienced musician looking to refine your skills, we are here to support your musical journey.
              </p>
              <p className="text-lg mb-4">
                Our mission is to provide high-quality tutorials, resources, and a platform for music enthusiasts to share their passion. From instrument showcases to performance tips, our website is designed to inspire and guide you every step of the way.
              </p>
            </div>
  
            <div>
              
            </div>
          </div>
        </div> */}
      </section>
      </div>
      
    );
};

export default AboutUs;



 {/* Login and registration form design  */}
//  <div className="min-h-screen flex items-center justify-center bg-gray-100">
//  <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
   
//    {/* Left Side - Image Section */}
//    <div 
//      className="md:w-1/2 w-full h-48 md:h-auto bg-cover bg-center" 
//      style={{
//        backgroundImage: "url('guitar.jpg')" // Replace with your image URL
//      }}
//    ></div>
   
//    {/* Right Side - Form Section */}
//    <div className="md:w-1/2 w-full p-8 flex flex-col justify-center relative">
//      <div className={`absolute inset-0 transition-transform duration-500 ${isLogin ? 'translate-y-0' : 'translate-y-full'} bg-[#D87D4A] opacity-30 rounded-lg z-0`}></div>
//      <div className={`absolute inset-0 transition-transform duration-500 ${isLogin ? 'translate-y-full' : 'translate-y-0'} bg-[#241912] opacity-30 rounded-lg z-0`}></div>
//      <div className={`relative z-10 transition-transform duration-500 ${isLogin ? 'translate-y-0' : '-translate-y-0px]'}`}>
//        {isLogin ? (
//          <>
//            <h2 className="text-2xl font-semibold text-black text-center mb-6">Log In</h2>
//            <form>
//              {/* Email Field */}
//              <div className="mb-4">
//                <label htmlFor="email" className="block text-black text-sm font-medium mb-2">Email Address</label>
//                <input
//                  type="email"
//                  id="email"
//                  placeholder="Enter your email"
//                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#D87D4A]"
//                />
//              </div>

//              {/* Password Field */}
//              <div className="mb-6">
//                <label htmlFor="password" className="block text-black text-sm font-medium mb-2">Password</label>
//                <input
//                  type="password"
//                  id="password"
//                  placeholder="Enter your password"
//                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#D87D4A]"
//                />
//              </div>

//              {/* Submit Button */}
//              <button
//                type="submit"
//                className="w-full bg-[#D87D4A] hover:bg-[#B95C32] text-white font-semibold py-2 rounded-md transition duration-300"
//              >
//                Log In
//              </button>

//              {/* Links */}
//              <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
//                <a href="#" className="hover:underline">Forgot Password?</a>
//                <button onClick={() => setIsLogin(false)} className="text-[#D87D4A] hover:underline">Register</button>
//              </div>
//            </form>
//          </>
//        ) : (
//          <div>
//            <h2 className="text-2xl font-semibold text-black text-center mb-6">Register</h2>
           
//            <form>
//              {/* Name Field */}
//              <div className="mb-4">
//                <label htmlFor="name" className="block text-black text-sm font-medium mb-2">Name</label>
//                <input
//                  type="text"
//                  id="name"
//                  placeholder="Enter your name"
//                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#D87D4A]"
//                />
//              </div>

//              {/* Email Field */}
//              <div className="mb-4">
//                <label htmlFor="email" className="block text-black text-sm font-medium mb-2">Email Address</label>
//                <input
//                  type="email"
//                  id="email"
//                  placeholder="Enter your email"
//                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#D87D4A]"
//                />
//              </div>

//              {/* Password Field */}
//              <div className="mb-6">
//                <label htmlFor="password" className="block text-black text-sm font-medium mb-2">Password</label>
//                <input
//                  type="password"
//                  id="password"
//                  placeholder="Create a password"
//                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#D87D4A]"
//                />
//              </div>

//              {/* Submit Button */}
//              <button
//                type="submit"
//                className="w-full bg-[#D87D4A] hover:bg-[#B95C32] text-white font-semibold py-2 rounded-md transition duration-300"
//              >
//                Register
//              </button>

//              {/* Links */}
//              <div className="mt-4 flex justify-between items-center text-sm text-gray-600">

//                <button onClick={() => setIsLogin(true)} className="text-[#D87D4A] hover:underline">Already have an account? Log In</button>
//              </div>
//            </form>
//          </div>
//        )}
//      </div>
//    </div>
//  </div>
// </div>