
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
                className="mySwiper h-[700px] md:h-96"
                autoplay={{ delay: 4000 }}
            >

                <SwiperSlide>
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