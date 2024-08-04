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
							<div className="col-xs-12 col-sm-12">
								<div>
									<PortNav />
									<div className="portfolio-grid two-columns shuffle">
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
