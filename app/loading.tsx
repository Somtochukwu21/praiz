import { Ripple } from "react-css-spinners";

function Loading() {
	return (
		<div className=" flex justify-center items-center h-full">
			<Ripple color="#007ced " size={112} thickness={7} />
		</div>
	);
}

export default Loading;
