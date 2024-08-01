"use client";
import aiony from "@/public/testimonial/aiony.jpg";
import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
// import "swiper/css";
// import "swiper/css/pagination";
import { A11y, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BlockTitle, Card } from "../Global";
export const Testimonial = () => {
	return (
		<Card>
			<BlockTitle title="Testimonials" />
			<Swiper
				modules={[Pagination, A11y]}
				spaceBetween={10}
				slidesPerView={1}
				breakpoints={{
					768: {
						slidesPerView: 2,
					},
					1536: { slidesPerView: 3 },
				}}
				pagination={{
					clickable: true,
					type: "bullets",
				}}>
				<SwiperSlide>
					<CarouselContent />
				</SwiperSlide>
				<SwiperSlide>
					<CarouselContent />
				</SwiperSlide>
				<SwiperSlide>
					<CarouselContent />
				</SwiperSlide>
			</Swiper>
		</Card>
	);
};

export const CarouselContent = () => (
	<div className="cursor-grab active:cursor-grabbing">
		<div className="p-[30px]">
			<div className="relative p-[30px_20px_20px_60px]	bg-[#282828] rounded-[8px] border-2 border-solid border-[#444]">
				<div className="absolute block top-[-30px]	left-[-20px] md:left-[-30px]">
					<Image
						src={aiony}
						alt="ashton"
						className="inline-block rounded-full border-2 border-[#969696] w-14 h-14 md:w-[70px] md:h-[70px]"
					/>
				</div>
				<div className="  ">
					<p className="italic text-[#d5d5d5]">
						Donec eu est vel metus consequat volutpat. Nunc aliquet euismod
						mauris, a feugiat urna ullamcorper non.
					</p>
				</div>
				<div className="mt-[15px]">
					<h5 className="m-[0_0_2px] text-[0.9em] text-[#e5e5e5]">
						Billy Adams
					</h5>
					<p className="m-0 text-[0.8em] text-[#bbb]">Rolling Thunder</p>
				</div>
				<div className="  block	leading-5 text-xl absolute left-5 bottom-[46px]	text-[#454545]">
					<FaQuoteLeft />
				</div>
				<div className="block leading-[44px] text-[44px] absolute	right-[-24px] bottom-[-24px]	text-[#353535] -z-10">
					<FaQuoteRight className="" />
				</div>
			</div>
		</div>
	</div>
);
