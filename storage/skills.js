

export default function getSkills(card) {
    if (card == 1) {
        return {
            card: 1,
            title: "Programming/Scripting Languages",
            items: ["Java", "Python", "JavaScript & TypeScript", "C", "ARM Assembly", "HTML", "CSS", "SQL", "Bash & ZSH (Unix command lines)"],
        }
    }else if (card == 2) {
        return {
            card: 2,
            title: "Libraries and Frameworks",
            items: ["Spring Framework", "Spring Security", "Spring Data, Web, GraphQL", "Spring OAuth2 Authorization, Resource, Client", "Spring for Apache Kafka", "OAuth", "NodeJs", "NextJs", "ExpressJs", "ReactJs", "Material UI"]
        }
    }else if (card == 3) {
        return {
            card: 3,
            title: "Systems, Platforms And Tools",
            items: ["Github", "Git", "Microsoft Azure", "Docker", "VSCode", "IntelliJ", "MacOS", "Linux", "PostgrSQL", "MySQL", "MongoDB", "Github Actions", "Kubernetes fundamentals"]
        }
    }else if (card == 4) {
        return {
            card: 4,
            title: "Concepts and Other Technologies",
            items: ["Software architecture", "Application security", "REST", "GraphQL", "Ethical Hacking & Cybersecurity fundamentals", "Web service penetration testing fundamentals"]
        }
    }
}
