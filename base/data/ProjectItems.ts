import aiony from "@/public/4.jpg";
import { GoProjectRoadmap } from "react-icons/go";
import { projectItemsProps } from "../interface";

export const projectItems: projectItemsProps[] = [
	{
		img: aiony,
		alt: "Full Project 2",
		name: "Full Project 2",
		category: "Detailed",
		groups: ["category_all", "category_detailed"],
		link: "portfolio-project-2.html",
		icon: <GoProjectRoadmap />,
	},
	{
		img: aiony,
		alt: "YouTube Video 2",
		name: "YouTube Video 2",
		category: "Video, YouTube Video",
		groups: ["category_all", "category_video", "category_youtube-video"],
		link: "https://www.youtube.com/embed/F-1weFCiYBA",
		icon: <GoProjectRoadmap />,
	},
	{
		img: aiony,
		alt: "Image 2",
		name: "Image 2",
		category: "Image",
		groups: ["category_all", "category_image"],
		link: "img/portfolio/full/3.jpg",
		icon: <GoProjectRoadmap />,
	},

	{
		img: aiony,
		alt: "YouTube Video 1",
		name: "YouTube Video 1",
		category: "Video, YouTube Video",
		groups: ["category_all", "category_video", "category_youtube-video"],
		link: "https://www.youtube.com/embed/ZK8REu-8pGw",
		icon: <GoProjectRoadmap />,
	},
	{
		img: aiony,
		alt: "Full Project 1",
		name: "Full Project 1",
		category: "Detailed",
		groups: ["category_all", "category_detailed"],
		icon: <GoProjectRoadmap />,
		link: "portfolio-project-1.html",
	},
	{
		img: aiony,
		icon: <GoProjectRoadmap />,
		alt: "Direct URL",
		name: "Direct URL",
		category: "Direct URL",
		groups: ["category_all", "category_direct-url"],
		link: "https://themeforest.net/user/John/portfolio",
	},
];
