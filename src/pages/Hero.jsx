import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Pagination, EffectCoverflow } from "swiper/modules";
import w2024 from "../components/images/2024.jpg";
import w2023 from "../components/images/2023.jpg";
import w2022 from "../components/images/2022.webp";
import w2021 from "../components/images/2021.jpeg";
import w2020 from "../components/images/2020.webp";
import w2019 from "../components/images/2019.jpg";
import w2018 from "../components/images/2018.jpeg";
import w2017 from "../components/images/2017.jpg";
import w2016 from "../components/images/2016.jpg";
import w2015 from "../components/images/2015.webp";
import w2014 from "../components/images/2014.jpg";
import w2013 from "../components/images/2013.jpg";
import w2012 from "../components/images/2012.jpg";
import w2011 from "../components/images/2011.webp";
import w2010 from "../components/images/2010.webp";
import w2009 from "../components/images/2009.jpg";
import w2008 from "../components/images/2008.jpg";

const Hero = () => {
  const swiper1 = useRef(null);
  const swiper2 = useRef(null);
  const syncInProgress = useRef(false);

  useEffect(() => {
    // Synchronize the slides of both swipers
    const syncSwipers = (swiper) => {
      if (syncInProgress.current) return;
      syncInProgress.current = true;
      const otherSwiper =
        swiper === swiper1.current ? swiper2.current : swiper1.current;
      otherSwiper.swiper.slideTo(swiper.swiper.realIndex);
      syncInProgress.current = false;
    };

    // Subscribe to swiper events to synchronize slides
    if (swiper1.current && swiper2.current) {
      swiper1.current.swiper.on("slideChange", () =>
        syncSwipers(swiper1.current)
      );
      swiper2.current.swiper.on("slideChange", () =>
        syncSwipers(swiper2.current)
      );
    }

    // Unsubscribe from swiper events when component unmounts
    return () => {
      if (swiper1.current && swiper2.current) {
        swiper1.current.swiper.off("slideChange", () =>
          syncSwipers(swiper1.current)
        );
        swiper2.current.swiper.off("slideChange", () =>
          syncSwipers(swiper2.current)
        );
      }
    };
  }, []);
  // Increment the counter quickly from 1 to 1000
  useEffect(() => {
    let i = 1;
    const interval = setInterval(() => {
      setCount(i);
      i++;
      if (i > 17) {
        clearInterval(interval);
        setCounting(false);
      }
    }, 1);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    let i = 1;
    const interval = setInterval(() => {
      setCount2(i);
      i++;
      if (i > 10) {
        clearInterval(interval);
        setCounting2(false);
      }
    }, 1);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section className="w-full h-auto flex flex-col items-center justify-center mt-24 px-4">
        <h1 className="text-1xl md:text-2xl font-bold text-center mb-6 animate-fadeIn">
          🏆 IPL Winners Gallery
        </h1>
      </section>
      <div className=" flex flex-col items-center justify-center w-full h-auto">
        <Swiper
          ref={swiper1}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          pagination={{
            clickable: true,
          }}
          className="mySwiper overflow-hidden w-[800px] h-[350px] flex md:flex-row flex-col items-center justify-center rounded-sm"
        >
          return (
          <>
            <SwiperSlide className="w-full h-full">
              <img
                src={w2024}
                alt="winner 2024"
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={w2023}
                alt="winner 2023"
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={w2022}
                alt="winner 2022"
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={w2021}
                alt="winner 2021"
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={w2020}
                alt="winner 2020"
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={w2019}
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={w2018}
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={w2017}
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={w2016}
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={w2015}
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={w2014}
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={w2013}
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={w2012}
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={w2011}
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={w2010}
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={w2009}
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={w2008}
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
          </>
          );
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
