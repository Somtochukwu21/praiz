const Portfolio = () => {
	return (
		<div id="main" className="site-main">
			<div id="main-content" className="single-page-content">
				<div id="primary" className="content-area">
					<div className="page-title">
						<h1>Portfolio</h1>
						<div className="page-subtitle">
							<h4> My Works</h4>
						</div>
					</div>
					<div
						id="content"
						className="page-content site-content single-post"
						role="main">
						<div className="row">
							<div className=" col-xs-12 col-sm-12 ">
								{/* Portfolio Content */}
								<div id="portfolio_content_q" className="portfolio-content">
									<ul className="portfolio-filters">
										<li className="active">
											<a
												className="filter btn btn-sm btn-link"
												data-group="category_all">
												All
											</a>
										</li>
										<li>
											<a
												className="filter btn btn-sm btn-link"
												data-group="category_detailed">
												Detailed
											</a>
										</li>
										<li>
											<a
												className="filter btn btn-sm btn-link"
												data-group="category_direct-url">
												Direct URL
											</a>
										</li>
										<li>
											<a
												className="filter btn btn-sm btn-link"
												data-group="category_image">
												Image
											</a>
										</li>
										<li>
											<a
												className="filter btn btn-sm btn-link"
												data-group="category_soundcloud">
												SoundCloud
											</a>
										</li>
										<li>
											<a
												className="filter btn btn-sm btn-link"
												data-group="category_video">
												Video
											</a>
										</li>
										<li>
											<a
												className="filter btn btn-sm btn-link"
												data-group="category_vimeo-video">
												Vimeo Video
											</a>
										</li>
										<li>
											<a
												className="filter btn btn-sm btn-link"
												data-group="category_youtube-video">
												YouTube Video
											</a>
										</li>
									</ul>
									{/* Portfolio Grid */}
									<div className="portfolio-grid two-columns shuffle">
										{/* Portfolio Item 1 */}
										<figure
											className="item standard"
											data-groups='["category_all", "category_detailed"]'>
											<div className="portfolio-item-img">
												<img
													src="img/portfolio/1.jpg"
													alt="Full Project 2"
													title=""
												/>
												<a
													href="portfolio-project-2.html"
													className="ajax-page-load"
												/>
											</div>
											<i className="far fa-file-alt" />
											<h4 className="name">Full Project 2</h4>
											<span className="category">Detailed</span>
										</figure>
										{/* /Portfolio Item 1 */}
										{/* Portfolio Item 2 */}
										<figure
											className="item lbvideo"
											data-groups='["category_all", "category_video", "category_youtube-video"]'>
											<div className="portfolio-item-img">
												<img
													src="img/portfolio/2.jpg"
													alt="YouTube Video 2"
													title=""
												/>
												<a
													href="https://www.youtube.com/embed/F-1weFCiYBA"
													className="lightbox mfp-iframe"
													title="YouTube Video 2"
												/>
											</div>
											<i className="fab fa-youtube" />
											<h4 className="name">YouTube Video 2</h4>
											<span className="category">Video, YouTube Video</span>
										</figure>
										{/* /Portfolio Item 2 */}
										{/* Portfolio Item 3 */}
										<figure
											className="item lbimage"
											data-groups='["category_all", "category_image"]'>
											<div className="portfolio-item-img">
												<img src="img/portfolio/3.jpg" alt="Image 2" title="" />
												<a
													className="lightbox"
													title="Image 2"
													href="img/portfolio/full/3.jpg"
												/>
											</div>
											<i className="fa fa-image" />
											<h4 className="name">Image 2</h4>
											<span className="category">Image</span>
										</figure>
										{/* /Portfolio Item 3 */}
										{/* Portfolio Item 4 */}
										<figure
											className="item lbaudio"
											data-groups='["category_all", "category_soundcloud"]'>
											<div className="portfolio-item-img">
												<img
													src="img/portfolio/4.jpg"
													alt="SoundCloud Audio 1"
													title=""
												/>
												<a
													href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/221650664&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
													className="lightbox mfp-iframe"
													title="SoundCloud Audio 1"
												/>
											</div>
											<i className="fas fa-volume-up" />
											<h4 className="name">SoundCloud Audio 1</h4>
											<span className="category">SoundCloud</span>
										</figure>
										{/* /Portfolio Item 4 */}
										{/* Portfolio Item 5 */}
										<figure
											className="item lbvideo"
											data-groups='["category_all", "category_video", "category_vimeo-video"]'>
											<div className="portfolio-item-img">
												<img
													src="img/portfolio/5.jpg"
													alt="Vimeo Video"
													title=""
												/>
												<a
													href="https://player.vimeo.com/video/158284739"
													className="lightbox mfp-iframe"
													title="Vimeo Video"
												/>
											</div>
											<i className="fab fa-vimeo-v" />
											<h4 className="name">Vimeo Video</h4>
											<span className="category">Video, Vimeo Video</span>
										</figure>
										{/* /Portfolio Item 5 */}
										{/* Portfolio Item 6 */}
										<figure
											className="item lbvideo"
											data-groups='["category_all", "category_video", "category_youtube-video"]'>
											<div className="portfolio-item-img">
												<img
													src="img/portfolio/6.jpg"
													alt="YouTube Video 1"
													title=""
												/>
												<a
													href="https://www.youtube.com/embed/ZK8REu-8pGw"
													className="lightbox mfp-iframe"
													title="YouTube Video 1"
												/>
											</div>
											<i className="fab fa-youtube" />
											<h4 className="name">YouTube Video 1</h4>
											<span className="category">Video, YouTube Video</span>
										</figure>
										{/* /Portfolio Item 6 */}
										{/* Portfolio Item 7 */}
										<figure
											className="item standard"
											data-groups='["category_all", "category_detailed"]'>
											<div className="portfolio-item-img">
												<img
													src="img/portfolio/7.jpg"
													alt="Full Project 1"
													title=""
												/>
												<a
													href="portfolio-project-1.html"
													className="ajax-page-load"
												/>
											</div>
											<i className="far fa-file-alt" />
											<h4 className="name">Full Project 1</h4>
											<span className="category">Detailed</span>
										</figure>
										{/* /Portfolio Item 7 */}
										{/* Portfolio Item 8 */}
										<figure
											className="item direct"
											data-groups='["category_all", "category_direct-url"]'>
											<div className="portfolio-item-img">
												<img
													src="img/portfolio/8.jpg"
													alt="Direct URL"
													title=""
												/>
												<a
													target="_blank"
													href="https://themeforest.net/user/John/portfolio"
												/>
											</div>
											<i className="fa fa-link" />
											<h4 className="name">Direct URL</h4>
											<span className="category">Direct URL</span>
										</figure>
										{/* /Portfolio Item 8 */}
										{/* Portfolio Item 9 */}
										<figure
											className="item lbimage"
											data-groups='["category_all", "category_image"]'>
											<div className="portfolio-item-img">
												<img src="img/portfolio/9.jpg" alt="Image 1" title="" />
												<a
													className="lightbox"
													title="Image 1"
													href="img/portfolio/full/5.jpg"
												/>
											</div>
											<i className="fa fa-image" />
											<h4 className="name">Image 1</h4>
											<span className="category">Image</span>
										</figure>
										{/* /Portfolio Item 9 */}
									</div>
									{/* /Portfolio Content */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
