import SkillCard, {SkillCardProps} from "@/components/SkillCard/SkillCard";
import LogoSlider from "@/components/LogoSlider/LogoSlider";


const skills: SkillCardProps[] = [
    {
        title: "Programming/Scripting Languages",
        skills: ["Java", "Python", "TypeScript & JavaScript", "C", "C++", "ARM Assembly", "HTML/CSS", "SQL", "Bash & ZSH (Unix command lines)", "OCaml"],
    },
    {
        title: "Libraries and Frameworks",
        skills: ["Spring Framework", "Spring Security", "Spring Data, Web, GraphQL", "Spring OAuth2 Authorization, Resource, Client", "Spring for Apache Kafka", "OAuth", "NodeJs", "NextJs", "ExpressJs", "ReactJs", "Material UI"]
    },
    {
        title: "Systems, Platforms And Tools",
        skills: ["Github", "Git", "Microsoft Azure", "Docker", "VSCode", "IntelliJ", "MacOS", "Linux", "PostgrSQL", "MySQL", "MongoDB", "Github Actions", "Kubernetes fundamentals"]
    },
    {
        title: "Concepts and Other Technologies",
        skills: ["Software architecture", "Application security", "REST", "GraphQL", "Ethical Hacking & Cybersecurity fundamentals", "Web service penetration testing fundamentals"]
    }
]

export default function SkillSection() {
    return (
        <div className={"w-full text-center flex-col justify-center items-center"}>
            <h2 className={"text-4xl text-white my-3"}>What are my <span className={"myTextGradient"}>Skills</span>?</h2>
            <div className={"grid gap-8 md:grid-cols-2 p-5 lg:px-14"}>
                {skills.map((skill: SkillCardProps, index: number) => {
                    return <SkillCard key={index} title={skill.title} skills={skill.skills} />;
                })}
            </div>
            <LogoSlider />
        </div>
    )
}