"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Star } from "lucide-react";

export default function Testimonial() {
  return (
    <>
      <div className="text-center bg-[#f1f5ff] py-20 md:p-16 px-2 my-10 md:my-20">
        <div className="grid md:grid-cols-4">
          <div className=""></div>
          <div className="col-span-2">
            <h2 className="text-xl font-medium pb-3">- Testimonials</h2>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight md:px-10">
              What <span>Our Paitents</span> Say About Our Services
            </h1>
          </div>
          <div className=""></div>
        </div>
        <div className="py-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <section className="text-gray-600 body-font">
                <div className="container px-5 pt-10 pb-28 mx-auto">
                  <div className="flex flex-wrap -m-4 cursor-pointer">
                         <div className="p-4 md:w-1/2 w-full hover:transition-all hover:scale-105 duration-500">
                      <div className="h-full bg-white p-8 rounded">
                        <div className="flex items-center justify-between">
                          <img
                            src="./comma.png"
                            alt="testimonial"
                            className="w-8 pb-5 opacity-60"
                          />
                          <p className="flex gap-2 items-center text-xl font-semibold">
                            <Star size={28} className="text-yellow-500" /> 4.8
                          </p>
                        </div>
                        <p className="leading-relaxed mb-6">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. In scelerisque semper elit non pellentesque.
                          Curabitur neque arcu, efficitur facilisis porta at,
                          feugiat ut est. Vivamus sed dui in dui vehicula
                          congue. Phasellus sed pellentesque nisi. Phasellus
                          tempus bibendum massa ut tincidunt. Nam hendrerit ut
                          tortor eget rutrum. Suspendisse facilisis ante eget
                          fringilla auctor. Nam a odio orci. Pellentesque
                          imperdiet quis sem
                        </p>
                        <a className="inline-flex items-center">
                          <img
                            alt="testimonial"
                            src="./main female doctor1.png"
                            className="w-14 h-14 rounded-full flex-shrink-0 object-cover object-center"
                          />
                          <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-gray-900">
                              Ali Ahmed
                            </span>
                            <span className="text-gray-500 text-sm">
                              DESIGNER
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>{" "}
                         <div className="p-4 md:w-1/2 w-full hover:transition-all hover:scale-105 duration-500">
                      <div className="h-full bg-white p-8 rounded">
                        <div className="flex items-center justify-between">
                          <img
                            src="./comma.png"
                            alt="testimonial"
                            className="w-8 pb-5 opacity-60"
                          />
                          <p className="flex gap-2 items-center text-xl font-semibold">
                            <Star size={28} className="text-yellow-500" /> 4.8
                          </p>
                        </div>
                        <p className="leading-relaxed mb-6">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. In scelerisque semper elit non pellentesque.
                          Curabitur neque arcu, efficitur facilisis porta at,
                          feugiat ut est. Vivamus sed dui in dui vehicula
                          congue. Phasellus sed pellentesque nisi. Phasellus
                          tempus bibendum massa ut tincidunt. Nam hendrerit ut
                          tortor eget rutrum. Suspendisse facilisis ante eget
                          fringilla auctor. Nam a odio orci. Pellentesque
                          imperdiet quis sem
                        </p>
                        <a className="inline-flex items-center">
                          <img
                            alt="testimonial"
                            src="./main female doctor1.png"
                            className="w-14 h-14 rounded-full flex-shrink-0 object-cover object-center"
                          />
                          <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-gray-900">
                              Ali Ahmed
                            </span>
                            <span className="text-gray-500 text-sm">
                              DESIGNER
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
            {/* ************************** */}
            <SwiperSlide>
              <section className="text-gray-600 body-font">
                <div className="container px-5 pt-10 pb-28 mx-auto">
                  <div className="flex flex-wrap -m-4 cursor-pointer"> 
                         <div className="p-4 md:w-1/2 w-full hover:transition-all hover:scale-105 duration-500">
                      <div className="h-full bg-white p-8 rounded">
                        <div className="flex items-center justify-between">
                          <img
                            src="./comma.png"
                            alt="testimonial"
                            className="w-8 pb-5 opacity-60"
                          />
                          <p className="flex gap-2 items-center text-xl font-semibold">
                            <Star size={28} className="text-yellow-500" /> 4.8
                          </p>
                        </div>
                        <p className="leading-relaxed mb-6">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. In scelerisque semper elit non pellentesque.
                          Curabitur neque arcu, efficitur facilisis porta at,
                          feugiat ut est. Vivamus sed dui in dui vehicula
                          congue. Phasellus sed pellentesque nisi. Phasellus
                          tempus bibendum massa ut tincidunt. Nam hendrerit ut
                          tortor eget rutrum. Suspendisse facilisis ante eget
                          fringilla auctor. Nam a odio orci. Pellentesque
                          imperdiet quis sem
                        </p>
                        <a className="inline-flex items-center">
                          <img
                            alt="testimonial"
                            src="./main female doctor1.png"
                            className="w-14 h-14 rounded-full flex-shrink-0 object-cover object-center"
                          />
                          <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-gray-900">
                              Ali Ahmed
                            </span>
                            <span className="text-gray-500 text-sm">
                              DESIGNER
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>{" "}
                         <div className="p-4 md:w-1/2 w-full hover:transition-all hover:scale-105 duration-500">
                      <div className="h-full bg-white p-8 rounded">
                        <div className="flex items-center justify-between">
                          <img
                            src="./comma.png"
                            alt="testimonial"
                            className="w-8 pb-5 opacity-60"
                          />
                          <p className="flex gap-2 items-center text-xl font-semibold">
                            <Star size={28} className="text-yellow-500" /> 4.8
                          </p>
                        </div>
                        <p className="leading-relaxed mb-6">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. In scelerisque semper elit non pellentesque.
                          Curabitur neque arcu, efficitur facilisis porta at,
                          feugiat ut est. Vivamus sed dui in dui vehicula
                          congue. Phasellus sed pellentesque nisi. Phasellus
                          tempus bibendum massa ut tincidunt. Nam hendrerit ut
                          tortor eget rutrum. Suspendisse facilisis ante eget
                          fringilla auctor. Nam a odio orci. Pellentesque
                          imperdiet quis sem
                        </p>
                        <a className="inline-flex items-center">
                          <img
                            alt="testimonial"
                            src="./main female doctor1.png"
                            className="w-14 h-14 rounded-full flex-shrink-0 object-cover object-center"
                          />
                          <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-gray-900">
                              Ali Ahmed
                            </span>
                            <span className="text-gray-500 text-sm">
                              DESIGNER
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
            {/* ************************** */}{" "}
            <SwiperSlide>
              <section className="text-gray-600 body-font">
                <div className="container px-5 pt-10 pb-28 mx-auto">
                  <div className="flex flex-wrap -m-4 cursor-pointer">
                         <div className="p-4 md:w-1/2 w-full hover:transition-all hover:scale-105 duration-500">
                      <div className="h-full bg-white p-8 rounded">
                        <div className="flex items-center justify-between">
                          <img
                            src="./comma.png"
                            alt="testimonial"
                            className="w-8 pb-5 opacity-60"
                          />
                          <p className="flex gap-2 items-center text-xl font-semibold">
                            <Star size={28} className="text-yellow-500" /> 4.8
                          </p>
                        </div>
                        <p className="leading-relaxed mb-6">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. In scelerisque semper elit non pellentesque.
                          Curabitur neque arcu, efficitur facilisis porta at,
                          feugiat ut est. Vivamus sed dui in dui vehicula
                          congue. Phasellus sed pellentesque nisi. Phasellus
                          tempus bibendum massa ut tincidunt. Nam hendrerit ut
                          tortor eget rutrum. Suspendisse facilisis ante eget
                          fringilla auctor. Nam a odio orci. Pellentesque
                          imperdiet quis sem
                        </p>
                        <a className="inline-flex items-center">
                          <img
                            alt="testimonial"
                            src="./main female doctor1.png"
                            className="w-14 h-14 rounded-full flex-shrink-0 object-cover object-center"
                          />
                          <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-gray-900">
                              Ali Ahmed
                            </span>
                            <span className="text-gray-500 text-sm">
                              DESIGNER
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>{" "}
                         <div className="p-4 md:w-1/2 w-full hover:transition-all hover:scale-105 duration-500">
                      <div className="h-full bg-white p-8 rounded">
                        <div className="flex items-center justify-between">
                          <img
                            src="./comma.png"
                            alt="testimonial"
                            className="w-8 pb-5 opacity-60"
                          />
                          <p className="flex gap-2 items-center text-xl font-semibold">
                            <Star size={28} className="text-yellow-500" /> 4.8
                          </p>
                        </div>
                        <p className="leading-relaxed mb-6">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. In scelerisque semper elit non pellentesque.
                          Curabitur neque arcu, efficitur facilisis porta at,
                          feugiat ut est. Vivamus sed dui in dui vehicula
                          congue. Phasellus sed pellentesque nisi. Phasellus
                          tempus bibendum massa ut tincidunt. Nam hendrerit ut
                          tortor eget rutrum. Suspendisse facilisis ante eget
                          fringilla auctor. Nam a odio orci. Pellentesque
                          imperdiet quis sem
                        </p>
                        <a className="inline-flex items-center">
                          <img
                            alt="testimonial"
                            src="./main female doctor1.png"
                            className="w-14 h-14 rounded-full flex-shrink-0 object-cover object-center"
                          />
                          <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-gray-900">
                              Ali Ahmed
                            </span>
                            <span className="text-gray-500 text-sm">
                              DESIGNER
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
            {/* ************************** */}{" "}
            <SwiperSlide>
              <section className="text-gray-600 body-font">
                <div className="container px-5 pt-10 pb-28 mx-auto">
                  <div className="flex flex-wrap -m-4 cursor-pointer">
                         <div className="p-4 md:w-1/2 w-full hover:transition-all hover:scale-105 duration-500">
                      <div className="h-full bg-white p-8 rounded">
                        <div className="flex items-center justify-between">
                          <img
                            src="./comma.png"
                            alt="testimonial"
                            className="w-8 pb-5 opacity-60"
                          />
                          <p className="flex gap-2 items-center text-xl font-semibold">
                            <Star size={28} className="text-yellow-500" /> 4.8
                          </p>
                        </div>
                        <p className="leading-relaxed mb-6">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. In scelerisque semper elit non pellentesque.
                          Curabitur neque arcu, efficitur facilisis porta at,
                          feugiat ut est. Vivamus sed dui in dui vehicula
                          congue. Phasellus sed pellentesque nisi. Phasellus
                          tempus bibendum massa ut tincidunt. Nam hendrerit ut
                          tortor eget rutrum. Suspendisse facilisis ante eget
                          fringilla auctor. Nam a odio orci. Pellentesque
                          imperdiet quis sem
                        </p>
                        <a className="inline-flex items-center">
                          <img
                            alt="testimonial"
                            src="./main female doctor1.png"
                            className="w-14 h-14 rounded-full flex-shrink-0 object-cover object-center"
                          />
                          <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-gray-900">
                              Ali Ahmed
                            </span>
                            <span className="text-gray-500 text-sm">
                              DESIGNER
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>{" "}
                         <div className="p-4 md:w-1/2 w-full hover:transition-all hover:scale-105 duration-500">
                      <div className="h-full bg-white p-8 rounded">
                        <div className="flex items-center justify-between">
                          <img
                            src="./comma.png"
                            alt="testimonial"
                            className="w-8 pb-5 opacity-60"
                          />
                          <p className="flex gap-2 items-center text-xl font-semibold">
                            <Star size={28} className="text-yellow-500" /> 4.8
                          </p>
                        </div>
                        <p className="leading-relaxed mb-6">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. In scelerisque semper elit non pellentesque.
                          Curabitur neque arcu, efficitur facilisis porta at,
                          feugiat ut est. Vivamus sed dui in dui vehicula
                          congue. Phasellus sed pellentesque nisi. Phasellus
                          tempus bibendum massa ut tincidunt. Nam hendrerit ut
                          tortor eget rutrum. Suspendisse facilisis ante eget
                          fringilla auctor. Nam a odio orci. Pellentesque
                          imperdiet quis sem
                        </p>
                        <a className="inline-flex items-center">
                          <img
                            alt="testimonial"
                            src="./main female doctor1.png"
                            className="w-14 h-14 rounded-full flex-shrink-0 object-cover object-center"
                          />
                          <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-gray-900">
                              Ali Ahmed
                            </span>
                            <span className="text-gray-500 text-sm">
                              DESIGNER
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
            {/* ************************** */}
          </Swiper>
        </div>
      </div>
    </>
  );
}
