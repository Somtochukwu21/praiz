import { GiSpiderWeb } from "react-icons/gi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoLaptopOutline } from "react-icons/io5";
import { SiTaichigraphics } from "react-icons/si";
import { ServiceBoxProps } from "../../base";
import { BlockTitle, Card } from "../Global";

export const WhatIDo = () => {
	return (
		<Card >
			<BlockTitle title="	What I Do" />
			<div className="sm:grid grid-cols-2 gap-6 ">
				<ServiceBox
					title="Web Development"
					icon={<GiSpiderWeb />}
					text="Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex."
				/>
				<ServiceBox
					text="Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex."
					title="Graphic Design"
					icon={<SiTaichigraphics />}
				/>
				<ServiceBox
					icon={<HiOutlineDevicePhoneMobile />}
					text="Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex."
					title="Mobile App Development"
				/>
				<ServiceBox
					icon={<IoLaptopOutline />}
					text="Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex."
					title="Web Design"
				/>
			</div>
		</Card>
	);
};

const ServiceBox = ({ icon, text, title }: ServiceBoxProps) => (
	<div className="flex gap-7 text-[#f5f5f5]">
		<div className="text-5xl text-[#007ced]">{icon}</div>
		<div>
			<h3 className="mb-2 text-ellipsis font-semibold text-lg">{title}</h3>
			<div>{text}</div>
		</div>
	</div>
);
