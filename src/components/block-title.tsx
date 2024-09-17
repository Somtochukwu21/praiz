export const BlockTitle = ({ title }: { title: string }) => {
	return (
		<div>
			<div className=" pt-[50px]" />
			<h2 className="inline-block relative text-xl pb-[7px] z-[1] text-[#f5f5f5] mb-[30px] font-semibold before:block before:absolute before:w-full before:bg-[#353535]	before:h-[2px] before:bottom-0 after:block after:absolute after:w-[30px] after:bg-secondary after:h-[2px] after:bottom-0">
				{title}
			</h2>
		</div>
	);
};
