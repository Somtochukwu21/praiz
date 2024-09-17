import { ServiceBoxProps } from "../../../base";
import CarbonApplicationWeb from "../../../public/icons/CarbonApplicationWeb";
import IconParkOutlineGraphicStitching from "../../../public/icons/IconParkOutlineGraphicStitching";
import TokenDweb from "../../../public/icons/TokenDweb";
import UitWebGrid from "../../../public/icons/UitWebGrid";
import { BlockTitle } from "../block-title";

export const WhatIDo = () => {
	return (
		<div className="px-4 md:px-0 max-w-[1760px] m-auto">
			<BlockTitle title="	What I Do" />
			<div className="grid md:grid-cols-2 gap-6   ">
				<ServiceBox
					title="Web Development"
					icon={<TokenDweb />}
					text="Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex."
				/>
				<ServiceBox
					text="Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex."
					title="Graphic Design"
					icon={<IconParkOutlineGraphicStitching />}
				/>
				<ServiceBox
					icon={<CarbonApplicationWeb />}
					text="Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex."
					title="Mobile App Development"
				/>
				<ServiceBox
					icon={<UitWebGrid />}
					text="Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex."
					title="Web Design"
				/>
			</div>
		</div>
	);
};

const ServiceBox = ({ icon, text, title }: ServiceBoxProps) => (
	<div className="flex gap-7 text-[#f5f5f5]">
		<div className="text-3xl md:text-5xl text-[#007ced]">{icon}</div>
		<div>
			<h3 className="mb-2 text-ellipsis font-semibold md:text-lg">{title}</h3>
			<p className="text-[#c3c3c3]">{text}</p>
		</div>
	</div>
);
