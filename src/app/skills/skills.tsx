import { BlockTitle, IconCloud } from "../../components";

 
const slugs = [
	"typescript",
	"javascript",
	"dart",
	"java",
	"react",
	"flutter",
	"android",
	"html5",
	"css3",
	"nodedotjs",
	"express",
	"nextdotjs",
	"prisma",
	"amazonaws",
	"postgresql",
	"firebase",
	"nginx",
	"vercel",
	"testinglibrary",
	"jest",
	"cypress",
	"docker",
	"git",
	"jira",
	"github",
	"gitlab",
	"visualstudiocode",
	"androidstudio",
	"sonarqube",
	"figma",
];

export const Skills = () => {
	return (
		<div>
			<BlockTitle title="skills" />
			<div className="relative flex h-full w-full items-center justify-center overflow-hidden px-20 pb-20 pt-8 ">
				<IconCloud iconSlugs={slugs} />
			</div>
		</div>
	);
};

