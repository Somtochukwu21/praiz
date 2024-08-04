import { PageTitleProps } from "../../base";

export const PageTitle = ({ header, text }: PageTitleProps) => {
	return (
		<div className="pt-16 md:pt-0">

		<div
			className="block relative bg-[#252525] border-y-2  border-y-[#333]  md:-mx-[70px] text-left md:py-[65px] md:px-[70px]	md:mb-[65px] px-[40px] py-[30px] -mx-[40px] mb-[40px]">
			<h1 className="text-5xl	font-semibold m-0 text-[#d5d5d5]">{header}</h1>
			<div className="inline-block md:absolute top-0 right-[70px]">
				<h4 className="text-[#aaa] font-normal text-sm	my-[1.33em] mx-0">
					{text}
				</h4>
			</div>
		</div>
		</div>
	);
};
