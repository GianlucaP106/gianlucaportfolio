import SkillCard, { SkillCardProps } from "@/components/SkillCard/SkillCard";
import LogoSlider from "@/components/LogoSlider/LogoSlider";


const skills: SkillCardProps[] = [
    {
        title: "Programming/Scripting Languages",
        skills: ["Java", "Go", "TypeScript", "JavaScript", "Python", "C", "Rust", "ARM Assembly", "Lua", "HTML/CSS", "Bash & Zsh", "OCaml"],
    },
    {
        title: "Libraries & Frameworks",
        skills: ["Spring Framework", "Prisma", "Apollo", "NextJs", "ReactJs", "React Native", "OAuth2", "SeaORM", "Hibernate", "HTTP", "REST", "GraphQL", "Pytest", "JUnit", "TailwindCSS", "Material UI", "NextAuth/AuthJs"]
    },
    {
        title: "Systems, Platforms And Tools",
        skills: ["Github", "Git", "Linux", "MacOS", "PostgreSQL", "MySQL", "Github Actions", "VSCode", "JetBrain IDEs", "Neovim", "Docker", "Microsoft Azure", "Firebase", "Google Cloud", "SQL", "NoSQL", "Raspberry Pi"]
    },
    {
        title: "Concepts and Other Technologies",
        skills: [
            "Software architecture",
            "Service-oriented architectures",
            "Application security",
            "Application layer networking",
            "Dev efficiency (CI/CD)",
            "Cloud deployment",
            "Application lifecycle management",
            "Software project management",
            "Agile development",
            "Web service penetration testing fundamentals",
        ]
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
