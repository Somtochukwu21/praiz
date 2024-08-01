import { TimeLineProps } from "../../base";

export const Timeline = ({ data }: TimeLineProps) => {
	return (
		<div id="timeline_1" className="timeline clearfix">
			{data.map((item, index) => (
				<div
					key={index}
					className="relative pl-10 pt-[25px] pb-[20px] pr-0 *:relative before:absolute before:block before:h-full before:bg-[#333] before:w-px before:left-[15px] before:bottom-[5px] after:absolute after:block after:h-px after:bg-[#333] after:w-[calc(100%-15px)] after:left-[15px] after:bottom-[3px] first:pt-[3px] last:after:hidden last:mb-[30px]">
					<h5 className="inline-block relative text-xs font-medium text-gray-400 bg-gray-900 px-2.5 leading-[23px] border-2 border-blue-500 rounded-full mb-[5px] -ml-[40px]">
						{item.period}
					</h5>
					<span className="inline-block text-xs text-gray-400 opacity-70 ml-2">
						{item.company}
					</span>
					<h4 className="text-base my-2.5 mt-2.5 mb-1.5">{item.title}</h4>
					<p className="text-[0.92em]">{item.description}</p>
				</div>
			))}
		</div>
	);
};
