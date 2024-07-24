import { ImPencil2 } from "react-icons/im";
import { Card } from "../Global";

export default function WhatIDo() {
	return (
		<Card className="bg-red-600">
			<div className="row">
				<div className=" col-xs-12 col-sm-6 ">
					<div className="info-list-w-icon">
						<div className="info-block-w-icon">
							<div className="ci-icon">
								<ImPencil2 />
								<i className="linecons linecons-pen" />
							</div>
							<div className="ci-text">
								<h4>Copywrite</h4>
								<p>
									Mauris neque libero, aliquet vel mollis nec, euismod sed
									tellus. Mauris convallis dictum elit id volutpat. Vivamus
									blandit, dolor vitae lacinia maximus, risus velit vehicula
									odio, a tincidunt turpis turpis tempus ex.
								</p>
							</div>
						</div>
						<div className="info-block-w-icon">
							<div className="ci-icon">
								<i className="linecons linecons-display" />
							</div>
							<div className="ci-text">
								<h4>Web Design</h4>
								<p>
									Mauris neque libero, aliquet vel mollis nec, euismod sed
									tellus. Mauris convallis dictum elit id volutpat. Vivamus
									blandit, dolor vitae lacinia maximus, risus velit vehicula
									odio, a tincidunt turpis turpis tempus ex.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className=" col-xs-12 col-sm-6 ">
					<div className="info-list-w-icon">
						<div className="info-block-w-icon">
							<div className="ci-icon">
								<i className="linecons linecons-shop" />
							</div>
							<div className="ci-text">
								<h4>Ecommerce</h4>
								<p>
									Mauris neque libero, aliquet vel mollis nec, euismod sed
									tellus. Mauris convallis dictum elit id volutpat. Vivamus
									blandit, dolor vitae lacinia maximus, risus velit vehicula
									odio, a tincidunt turpis turpis tempus ex.
								</p>
							</div>
						</div>
						<div className="info-block-w-icon">
							<div className="ci-icon">
								<i className="linecons linecons-megaphone" />
							</div>
							<div className="ci-text">
								<h4>Marketing</h4>
								<p>
									Mauris neque libero, aliquet vel mollis nec, euismod sed
									tellus. Mauris convallis dictum elit id volutpat. Vivamus
									blandit, dolor vitae lacinia maximus, risus velit vehicula
									odio, a tincidunt turpis turpis tempus ex.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Card>
	);
}
