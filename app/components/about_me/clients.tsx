// import Image from "next/image";
// import "swiper/css";
// import "swiper/css/pagination";
// import { A11y, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
import { BlockTitle, Card } from "../Global";

export const Clients = () => (
	<div>
		<Card>
			<BlockTitle title="Clients" />
		</Card>
		{/* <Swiper
			modules={[Pagination, A11y]}
			spaceBetween={10}
			slidesPerView={2}
			pagination={{ clickable: true, bulletClass: "bg-amber-400" }}>
			<SwiperSlide>1</SwiperSlide>
			<SwiperSlide>12</SwiperSlide>
			<SwiperSlide>3</SwiperSlide>
		</Swiper> */}
	</div>
);
