import { ReactNode } from "react";
interface CardProps {
	children: ReactNode;
	className?: string;
}
export const Card = ({ children, className }: CardProps) => {
	return (
		<div
			className={`max-w-[1800px] m-auto ${className}`}>
			{children}
		</div>
	);
};
