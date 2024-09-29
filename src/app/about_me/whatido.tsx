import { ServiceBoxProps } from "../../../base";
import CarbonApplicationWeb from "../../../public/icons/CarbonApplicationWeb";
import IconParkOutlineGraphicStitching from "../../../public/icons/IconParkOutlineGraphicStitching";
import TokenDweb from "../../../public/icons/TokenDweb";
import UitWebGrid from "../../../public/icons/UitWebGrid";
import { BlockTitle } from "../../components/block-title";
import { ScrollReveal } from "../../components/ScrollReveal";

export const WhatIDo = () => {
	return (
		<div className="px-4 md:px-0 max-w-[1760px] m-auto">
			<BlockTitle title="	What I Do" />
			<div className="grid md:grid-cols-2 gap-6   ">
				<ScrollReveal>
					<ServiceBox
						title="Web Development"
						icon={<TokenDweb />}
						text="As an experienced web developer, I craft responsive, user-friendly websites tailored to your business needs. By integrating modern design with optimized performance, I ensure your site engages visitors, drives conversions, and strengthens your online presence."
					/>
				</ScrollReveal>
				<ScrollReveal delay={0.5}>
					<ServiceBox
						text="As a skilled graphic designer, I create visually striking and memorable designs that reflect your brand's identity. By blending creativity with strategy, I ensure each design resonates with your target audience, enhancing brand visibility and engagement across all mediums."
						title="Graphic Design"
						icon={<IconParkOutlineGraphicStitching />}
					/>
				</ScrollReveal>
				<ScrollReveal delay={0.7}>
					<ServiceBox
						icon={<CarbonApplicationWeb />}
						text="Unlock the potential of mobile technology with expertly crafted apps designed for seamless user experiences. I specialize in developing fast, responsive mobile solutions that blend innovation with functionality to elevate your business and engage your audience."
						title="Mobile App Development"
					/>
				</ScrollReveal>
				<ScrollReveal delay={0.9}>
					<ServiceBox
						icon={<UitWebGrid />}
						text="Transform your online presence with captivating, user-centric web designs that leave a lasting impression. I focus on blending aesthetic appeal with intuitive functionality, creating websites that not only look stunning but also drive engagement and conversions."
						title="Web Design"
					/>
				</ScrollReveal>
			</div>
		</div>
	);
};

const ServiceBox = ({ icon, text, title }: ServiceBoxProps) => (
	<div className="flex gap-7 text-[#f5f5f5] bg-card rounded-lg p-6 shadow-lg hover:shadow-xl ">
		<div className="text-3xl md:text-5xl text-[#007ced]">{icon}</div>
		<div>
			<h3 className="mb-2 text-ellipsis font-semibold md:text-lg">{title}</h3>
			<p className="text-[#c3c3c3]">{text}</p>
		</div>
	</div>
);
