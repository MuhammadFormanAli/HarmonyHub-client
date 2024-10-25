// import {  Fade } from "react-awesome-reveal";
import {FaAddressCard, FaClock, FaPhone,  } from "react-icons/fa";
import { MdEmail } from "react-icons/md"


const ContactUs = () => {
  return (
    <div className="bg-[#f1f1f1]">
      <div className='container mx-auto px-[10px] pb-[50px]'>
      <section className=" p-[10px] container  mx-auto  py-[50px] text-center ">
        <div className="text-[#000000] flex gap-[15px] flex-col ">
          <p className="text-[16px] md:text-[18px] tracking-[5px] md:tracking-[7px] text-[#D87D4A] uppercase">
          Contact Us
          </p>
          <p className="font-bold text-[#101010] text-[36px] md:text-[48px] lg:text-[56px] lg:leading-[58px] leading-[38px] md:leading-[48px] uppercase">
          We always with You
          </p>
          
        </div>
      </section>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
        <div className='w-full  grid grid-cols-1 md:grid-cols-2 gap-3'>
          
            <div className='bg-[#fff] flex gap-[10px] p-[15px]'>
              <div className="p-[15px] bg-[#f1f1f1] w-fit h-fit rounded-full"><FaAddressCard size={30} color="#D87D4A" /></div>
              <div>
                <p className='text-[24px] font-semibold'> Address</p>
              <p className='text-[20px]'>Aladan street, <br /> New Yourk</p>
              </div>
            </div>

            <div className='bg-[#fff] flex gap-[10px] p-[15px]'>
              <div className="p-[15px] bg-[#f1f1f1] w-fit h-fit rounded-full"><FaPhone size={30} color="#D87D4A" /></div>
              <div>
                <p className='text-[24px] font-semibold'> Call Us</p>
              <p className='text-[20px]'>+99-404040, <br /> 91-141241</p>
              </div>
            </div>
          

            <div className='bg-[#fff] flex gap-[10px] p-[15px]'>
              <div className="p-[15px] bg-[#f1f1f1] w-fit h-fit rounded-full"><MdEmail size={30} color="#D87D4A" /></div>
              <div>
                <p className='text-[24px] font-semibold'> Email Us</p>
              <p className='text-[20px]'>info@gmail.com, <br /> info@gmail.com</p>
              </div>
            </div>

            <div className='bg-[#fff] flex gap-[10px] p-[15px]'>
              <div className="p-[15px] bg-[#f1f1f1] w-fit h-fit rounded-full"><FaClock size={30} color="#D87D4A" /></div>
              <div>
                <p className='text-[24px] font-semibold'> Active Time</p>
              <p className='text-[20px]'>24/7</p>
              </div>
            </div>
        </div>

        <section className="bg-[#fff] ">
          <div className="container mx-auto p-3">
            <div className="w-full flex flex-col gap-[20px]">
              <div className=" flex gap-[20px]">
                <input
                  className=" border  w-full p-[20px] text-[#101010] focus:outline-none "
                  id="name"
                  type="text"
                  placeholder="Name"
                />

                <input
                  className=" border  w-full p-[20px] text-[#101010] focus:outline-none "
                  id="phone"
                  type="text"
                  placeholder="Phone"
                />

              </div>
              <div className="">
                <input
                  className=" border  w-full p-[20px] text-[#101010] focus:outline-none "
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <input
                  className=" border  w-full p-[20px] text-[#101010] focus:outline-none "
                  id="subject"
                  type="text"
                  placeholder="Subject"
                />
              <div className="">
                <textarea
                  className=" border  w-full p-[20px] text-[#101010] focus:outline-none resize-none "
                  id="message"
                  rows="2"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-[#D87D4A] w-full text-[#fff] px-[15px] py-[10px] hover:bg-[#fbaf85] text-[16px] transition-all"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>

    </div>
    </div>

  );
};

export default ContactUs;