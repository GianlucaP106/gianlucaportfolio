

export default function getSkills(card) {
    if (card == 1) {
        return {
            card: 1,
            title: "Programming/Scripting Languages",
            items: ["Python", "Java", "JavaScript", "Solidity", "C", "ARM Assembly", "HTML", "CSS", "SQL", "Bash"],
        }
    }else if (card == 2) {
        return {
            card: 2,
            title: "Libraries and Frameworks",
            items: ["Spring MVC & ORM", "Spring Security", "OAuth", "Node", "Next", "Express", "React", "Vue", "EtherJs/Web3Js","OpenZepplin", "BootStrap & Bulma" ]
        }
    }else if (card == 3) {
        return {
            card: 3,
            title: "Systems",
            items: ["MacOS", "Linux"]
        }
    }else if (card == 4) {
        return {
            card: 4,
            title: "Other Technologies",
            items: ["Git", "GitHub", "VS/VSCode", "REST Architecture", "MongoDB", "MySQL", "API Implementation", "UML", "Docker", "Ethical Hacking Basics"]
        }
    }
}