"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { clientImages } from "../../base";
import { BlockTitle, Card } from "../Global";

export const Clients = () => (
	<div>
		<Card>
			<BlockTitle title="Clients" />
			<Swiper
				modules={[Pagination, A11y, Autoplay]}
				spaceBetween={10}
				slidesPerView={2}
				breakpoints={{
					768: {
						slidesPerView: 4,
					},
					1024: {
						slidesPerView: 6,
					},
				}}
				loop={true}
				autoplay={true}
				pagination={{ clickable: true, bulletClass: "bg-amber-400" }}>
				{clientImages.map((client) => (
					<SwiperSlide lazy={false} key={client.id}>
						<ClientImages src={client.url} title={client.title as string} />
					</SwiperSlide>
				))}
			</Swiper>
		</Card>
	</div>
);

const ClientImages = ({
	src,
	title,
}: {
	src: StaticImageData;
	title: string;
}) => (
	<div>
		<div className="opacity-[0.7] hover:opacity-[1] transition-opacity duration-300 ease-in-out pt-[10px] pb-[15px] px-[15px]">
			<Link href="#" target="_blank" title={title}>
				<Image src={src} alt={title} className="max-w-[80px] m-auto" />
			</Link>
		</div>
	</div>
);
