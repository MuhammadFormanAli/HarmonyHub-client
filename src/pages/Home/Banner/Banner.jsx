
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";



const Banner = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
            }}

            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper h-[85vh]"
            autoplay={{ delay: 4000 }}
        >

            <SwiperSlide>


                {/* <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-16">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white h-screen flex items-center justify-center">
                        <div className="max-w-2xl text-center">
                            <h1 className="text-4xl font-extrabold mb-4">Unlock the Power of Music</h1>
                            <p className="text-lg mb-8">Discover, learn, and master your favorite instruments with our expert guidance.</p>
                            <button className="bg-white text-blue-500 py-2 px-6 rounded-full font-semibold hover:bg-blue-100 focus:outline-none focus:shadow-outline-blue">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div> */}

<div className="swiper1 flex items-center justify-center text-2xl md:text-3xl lg:text-4xl font-bold">
                    <h1 className="text-white text-center rounded-xl p-8 mx-8 bg-[#1d1a186b]">In the hands of a learner, a musical instrument becomes a magical gateway to self-expression and endless creativity</h1>
</div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="swiper2 flex items-center justify-center text-2xl md:text-3xl lg:text-4xl font-bold">
                    <h1 className="text-white text-center rounded-xl p-8 mx-8 bg-[#1d1a186b]">In the hands of a learner, a musical instrument transforms from a mere instrument to a powerful vessel of self-discovery and personal growth</h1>
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className="swiper3 flex  items-center justify-center text-2xl md:text-3xl lg:text-4xl font-bold">
                    <h1 className="text-white text-center rounded-xl p-8 mx-8 bg-[#1d1a186b]">A musical instrument is not just an object; it is a teacher that guides us to discover the depths of our own musicality</h1>
                </div>
            </SwiperSlide>



        </Swiper>



    );
};

export default Banner;