// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";

const Banner = () => {
  const banners = [
    {
      id: 1,
      title: "learn to <br /> play guitar",
      subTitle: "Exclusive Lesson Guitar",
      description:
        "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
      image: "banner-guitar.jpg",
    },
    {
      id: 2,
      title: "learn to <br /> play violin",
      subTitle: "Exclusive Lesson violin",
      description:
        "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
      image: "banner-violin.jpg",
    },
    {
      id: 3,
      title: "learn to <br /> play Piano",
      subTitle: "Exclusive Lesson piano",
      description:
        "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
      image: "banner-piano.jpg",
    },
  ];
  return (
    <div className=" bg-[#101010]">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className=" h-full lg:h-[550px]  2xl:h-[700px]"
        autoplay={{ delay: 4000 }}
      >
        {banners.map((item) => (
          <SwiperSlide key={item?.id}>
            <div className="relative flex items-center h-full  ">
              <img
                src={item?.image}
                alt="banner image"
                className="absolute right-0 top-0 -z-10 object-cover  h-full w-full "
              />
              <div className="flex items-center h-full p-[10px] container  mx-auto py-[50px] lg:py-0 ">
                <div className="text-[#fff] flex gap-[15px] flex-col w-full max-w-[350px] md:max-w-[450px] ">
                  <p className="text-[12px] md:text-[14px] tracking-[5px] md:tracking-[7px] text-[#ffffff80] uppercase">
                    {item?.subTitle}
                  </p>
                  <p
                    dangerouslySetInnerHTML={{ __html: item?.title }}
                    className="font-bold text-[36px] md:text-[48px] lg:text-[56px] lg:leading-[58px] leading-[38px] md:leading-[48px] uppercase"
                  ></p>

                  <p className="text-[14px] md:text-[16px] text-[#ffffffbf]">
                    {item?.description}
                  </p>
                  <button className="bg-[#D87D4A] w-fit text-[#fff] px-[15px] py-[10px] hover:bg-[#fbaf85] text-[16px] transition-all">
                    Discover More
                  </button>
                  
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;

{
  /* <SwiperSlide>
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-16">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white h-screen flex items-center justify-center">
                        <div className="max-w-2xl text-center">
                            <h1 className="text-4xl font-extrabold mb-4">Unlock the Power of Music</h1>
                            <p className="text-lg mb-8">Discover, learn, and master your favorite instruments with our expert guidance.</p>
                            <button className="bg-white text-blue-500 py-2 px-6 rounded-full font-semibold hover:bg-blue-100 focus:outline-none focus:shadow-outline-blue">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>

        <div className="swiper1 flex items-center justify-center text-2xl md:text-3xl lg:text-4xl font-bold">
          <h1 className="text-white text-center rounded-xl p-8 mx-8 bg-[#1d1a186b]">
            In the hands of a learner, a musical instrument becomes a magical
            gateway to self-expression and endless creativity
          </h1>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="swiper2 flex items-center justify-center text-2xl md:text-3xl lg:text-4xl font-bold">
          <h1 className="text-white text-center rounded-xl p-8 mx-8 bg-[#1d1a186b]">
            In the hands of a learner, a musical instrument transforms from a
            mere instrument to a powerful vessel of self-discovery and personal
            growth
          </h1>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="swiper3 flex  items-center justify-center text-2xl md:text-3xl lg:text-4xl font-bold">
          <h1 className="text-white text-center rounded-xl p-8 mx-8 bg-[#1d1a186b]">
            A musical instrument is not just an object; it is a teacher that
            guides us to discover the depths of our own musicality
          </h1>
        </div>
      </SwiperSlide> */
}
