import { BlockTitle } from "../../components";
import IconCloud from "../../components/magicui/icon-cloud";
// import { ScrollReveal } from "../../components/ScrollReveal";
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
 
			<div className="relative flex h-fulls w-fuldl items-centser justify-centerw overflow-hidden px-20 pb-20w pt-8w">
				<IconCloud iconSlugs={slugs}/>
			</div>
 
		</div>
	);
};
