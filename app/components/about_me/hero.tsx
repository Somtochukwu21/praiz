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
			<div className="col-sm-12 col-md-6 col-lg-6">
				<div className="h-full min-h-full">
					<div
						className="relative bg-center bg-no-repeat bg-cover	h-full w-full	min-h-[300px]"
						style={{ backgroundImage: `url(${bg.src})` }}
					/>
				</div>
			</div>
			<div className="col-sm-12 col-md-6 col-lg-6">
				<div className="text-[#d5d5d5] lg:p-[50px_70px_50px_0] -ml-[70px] ">
					<div className="relative lg:shadow-custom py-[70px] px-[15%] bg-[#333]	h-full min-h-[100px]">
						<Swiper
							modules={[A11y, Autoplay]}
							spaceBetween={10}
							loop={true}
							autoplay={({ delay: 6000 })}>
							<SwiperSlide>
								<div className="owl-text">Web Designer</div>
							</SwiperSlide>

							<SwiperSlide>
								<div className="owl-text">Frontend Developer</div>
							</SwiperSlide>
						</Swiper>

						<h2 className="text-[48px] leading-[1.2em]  text-[#f5f5f5] font-semibold mt-[5px] mb-[15px] ">
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
								target="_blank"
								className="inline-block relative py-[.8em] px-[2.1em] mb-[.75em] mr-[.25em] text-base  outline-0 border-2 border-solid border-secondary text-[#fff] bg-[#333] rounded-[30px] transition-all duration-[.3s] ease-in-out shadow-md   hover:bg-secondary active:scale-95">
								Download CV
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

// work on adding yarn add swiper
