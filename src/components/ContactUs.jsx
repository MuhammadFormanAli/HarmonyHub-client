import {  JackInTheBox } from "react-awesome-reveal";
import {FaAddressCard, FaClock, FaPhone,  } from "react-icons/fa";
import { MdEmail } from "react-icons/md"


const ContactUs = () => {
  return (
    <div className='my-5 bg-base-200 p-5'>
      <h2 className="text-3xl font-bold text-center">Contact Us</h2>
      <p className='text-center mb-5 font-bold'>We always with You</p>

      <div className='flex flex-col md:flex-row gap-2'>
        <div className='w-full md:w-1/2 grid grid-cols-2 gap-1'>
          <JackInTheBox>
            <div className='bg-slate-200 text-center p-4 card' data-aos="fade-down-right">
              <span className="block w-fit mx-auto p-1"><FaAddressCard></FaAddressCard></span>
              <h1 className='font-bold text-xl'>Address</h1>
              <p className='font-bold text-lg'>Aladan street</p>
              <p className='font-bold text-lg'>New Yourk</p>
            </div>
          </JackInTheBox>
          <JackInTheBox>
            <div className='bg-slate-200 text-center p-4 card  ' data-aos="fade-down-left">
              
              <span className="block w-fit mx-auto p-1"><FaPhone></FaPhone> </span>
              <h1 className='font-bold text-xl'>Call us</h1>
              <p className='font-bold text-lg'>+99-404040</p>
              <p className='font-bold text-lg'>+91-141241</p>
            </div>
          </JackInTheBox>
          <JackInTheBox>
            <div className='bg-slate-200 text-center p-4 card' data-aos="fade-up-right">
            <span className="block w-fit mx-auto p-1"><MdEmail></MdEmail></span>
              <img src="/images/email.png" alt="" className='w-[45px] text block mx-auto' />
              <h1 className='font-bold text-xl'>Email Us</h1>
              <p className='font-bold text-lg'>info@gmail.com</p>
              <p className='font-bold text-lg'>info@gmail.com</p>
            </div>
          </JackInTheBox>
          <JackInTheBox>
            <div className='bg-slate-200 text-center p-4 card ' data-aos="fade-up-left">
            <span className="block w-fit mx-auto p-1"><FaClock></FaClock></span>
              <img src="/images/time.png" alt="" className='w-[45px] text block mx-auto' />
              <h1 className='font-bold text-xl'>Working Hours</h1>
              <p className='font-bold text-lg'>Mon-fri : 9am - 5pm</p>
              <p className='font-bold text-lg'>Sunday: 9am - 1pm </p>
            </div>
          </JackInTheBox>
        </div>

        <section className="bg-slate-200 py-2 w-full md:w-1/2 rounded-md">
          <div className="container mx-auto py-8" data-aos="zoom-in-left">
            <div className="max-w-lg mx-auto">
              <div className="mb-2">
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-2">
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-2">
                <textarea
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="1"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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

  );
};

export default ContactUs;