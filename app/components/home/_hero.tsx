import bg from "@/public/main_photo.jpg";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
	return (
		<div className="home-content third-style">
			<div className="start-page-full-width">
				<div className="row flex flex-wrap">
					<div className="col-sm-12 col-md-6 col-lg-6">
						<div className="inner-content h-full min-h-full">
							<div
								className="relative bg-center bg-no-repeat bg-cover	h-full w-full	min-h-[300px]"
								style={{ backgroundImage: `url(${bg.src})` }}
							/>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-6">
						<div className="inner-content inner-text-block ">
							<div className="hp-text-block relative py-[70px] px-[15%] bg-[#333]	h-full min-h-[100px]">
								<h2 className="text-[48px] leading-[1.2em] text-[#fff] font-semibold mt-[5px] mb-[15px] ">
									Praiz Dev
								</h2>
								<p>
									Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
									convallis, risus non condimentum gravida, odio mauris
									ullamcorper felis, ut venenatis purus ex eu mi. Quisque
									imperdiet lacinia urna, a placerat sapien pretium eu.
								</p>
								<div className="mt-[30px]">
									<Link
										href="#"
										// target="_blank"
										className="inline-block relative py-[.8em] px-[2.1em] mb-[.75em] mr-[.25em] text-base  outline-0 border-2 border-solid border-secondary text-[#fff] bg-[#333] rounded-[30px] transition-all duration-[.3s] ease-in-out shadow-md   hover:bg-secondary active:scale-95">
										Download CV
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
