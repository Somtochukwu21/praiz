import { ButtonProps } from "../../base";

export const Button = ({
	children,
	className,
	disabled,
	onClick,
	type,
}: ButtonProps) => {
	return (
		<div>
			<button
				type={type}
				onClick={onClick}
				disabled={disabled}
				className={`bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded ${className}`}>
				{" "}
				{children}
			</button>
		</div>
	);
};
