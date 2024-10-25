// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";

const PerformanceTips = () => {
  const performanceTips = [
    "Practice regularly to build muscle memory.",
    "Focus on proper posture and hand positioning.",
    "Break down challenging sections into smaller parts.",
    "Use a metronome to improve timing and rhythm.",
    "Record and review your performances for self-assessment.",
    "Experiment with different techniques to find your unique style.",
    "Stay relaxed and manage performance anxiety with deep breaths.",
    "Collaborate with other musicians for valuable feedback.",
    "Explore different genres to broaden your musical skills.",
  ];

  return (
    <div className=" bg-[#fff]">
      <p className="font-bold text-[36px] md:text-[48px] lg:text-[56px] lg:leading-[58px] leading-[38px] md:leading-[48px] uppercase text-center py-[40px]">
                  Performance Tips
                </p>
                <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 4000 }}
      >
        {performanceTips.map((item) => (
          <SwiperSlide className="" key={item}>
            <div className="  flex flex-col items-center justify-center p-[20px] bg-black ">
              <p className="text-[24px] bg-[#D87D4A] w-full text-center text-[#fff]">{item}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PerformanceTips;
