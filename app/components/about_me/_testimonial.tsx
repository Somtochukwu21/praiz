import ashton from "@/public/ashton.jpg";
import Image from "next/image";
import { BlockTitle, Card } from "../Global";

export const Testimonial = () => {
	return (
		<Card>
			<BlockTitle title="Testimonials" />

			<div
				id="testimonials_1"
				className="testimonials owl-carousel"
				data-mobile-items={1}
				data-tablet-items={2}
				data-items={2}>
				{/* Testimonial 1 */}
				<div className="testimonial-item">
					{/* Testimonial Content */}
					<div className="testimonial-content">
						{/* Picture */}
						<div className="testimonial-picture">
							<Image src={ashton} alt="ashton" />
						</div>
						{/* /Picture */}
						{/* Testimonial Text */}
						<div className="testimonial-text">
							<p>
								Donec eu est vel metus consequat volutpat. Nunc aliquet euismod
								mauris, a feugiat urna ullamcorper non.
							</p>
						</div>
						{/* /Testimonial Text */}
						{/* Testimonial author information */}
						<div className="testimonial-author-info">
							<h5 className="testimonial-author">Billy Adams</h5>
							<p className="testimonial-firm">Rolling Thunder</p>
						</div>
						{/* /Testimonial author information */}
						<div className="testimonial-icon">
							<i className="fa fa-quote-left" />
						</div>
						<div className="testimonial-icon-big">
							<i className="fa fa-quote-right" />
						</div>
					</div>
					{/* /Testimonial Content */}
				</div>
				{/* End of Testimonial 1 */}
			</div>
		</Card>
	);
};
