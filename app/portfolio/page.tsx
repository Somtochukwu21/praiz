import { portfolioItems } from "../../base";
import { Card, PageTitle, PortfolioItem, PortNav } from "../../components";

const Portfolio = () => (
	<Card>
		<div>
			<div>
				<div>
					<PageTitle header="Portfolio" text="My Works" />

					<div>
						<div>
							<div>
								<div>
									<PortNav />
									<div className="grid grid-cols-3 gap-4">
										{portfolioItems.map((item) => (
											<PortfolioItem key={item.name} {...item} />
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Card>
);

export default Portfolio;
