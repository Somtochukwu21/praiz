"use client";
import bg from "@/public/main_photo.jpg";
import Link from "next/link";
import React from "react";
import "swiper/css";
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const Hero: React.FC = () => {
	return (
		<div className="flex flex-wrap">
			<div className="col-sm-12 col-md-6 col-lg-6 p-0">
				<div className="h-full min-h-full">
					<div
						className="relative bg-center bg-no-repeat bg-cover	h-full w-full	min-h-[300px]"
						style={{ backgroundImage: `url(${bg.src})` }}
					/>
				</div>
			</div>

			<div className="col-sm-12 col-md-6 col-lg-6 p-0">
				<div className="text-[#d5d5d5] w-full md:p-[50px_70px_50px_0] md:-ml-[70px] ">
					<div className="relative lg:shadow-custom py-[70px] px-4 md:px-[15%] bg-[#333]	h-full min-h-[100px]">
						<Swiper
							modules={[A11y, Autoplay]}
							spaceBetween={10}
							loop={true}
							autoplay={{ delay: 6000 }}>
							<SwiperSlide>
								<div className="owl-text">Web Designer</div>
							</SwiperSlide>

							<SwiperSlide>
								<div className="owl-text">Frontend Developer</div>
							</SwiperSlide>
						</Swiper>

						<h2 className=" text-3xl md:text-5xl  text-[#f5f5f5] font-semibold mt-[5px] mb-[15px] ">
							Somto Nnaji
						</h2>
						<p>
							Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
							convallis, risus non condimentum gravida, odio mauris ullamcorper
							felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia
							urna, a placerat sapien pretium eu.
						</p>
						<div className="mt-[30px]">
							<Link
								href="#"
								// target="_blank"
								className="inline-block outline-0 border-2 border-solid border-secondary px-[2em] py-[.55rem] mb-[.75em]  transition-all duration-[.3s] ease-in-out text-base bg-[#333] shadow-xl text-[#fff] rounded-full lg:hover:bg-secondary active:scale-95 ">
								Download CV
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

 