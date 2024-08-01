import { PageTitleProps } from "../../base";

export const PageTitle = ({ header, text }: PageTitleProps) => {
	return (
		<div className="block relative bg-[#252525] border-y-2  border-y-[#333] py-16 px-[70px]	-mx-[70px] text-left">
			<h1 className="text-5xl	font-semibold m-0 text-[#d5d5d5]">Resume</h1>
			<div className="inline-block absolute top-0 right-[70px]">
				<h4 className="text-[#aaa] font-normal text-sm	my-[1.33em] mx-0">
					8 Years of Experience
				</h4>
			</div>
		</div>
	);
};
