

export default function getExperience(card) {

    if (card == 1) {
        return {
            id: 1,
            title: "Cybersecurity Intern",
            type: "Internship",
            location: "CGI",
            description: "Learned about Cyber security basics, security and access control models, IAM concepts and technologies, AWS IAM, Microsoft Azure, IAM automation and docker. Developed a service offer and a proof of concept for automating IAM processes.", 
            image: "/assets/experience/CGILogo.png",
            width: 160,
            height: 80,
        }
    }
    else if (card == 2) {
        return {
            id: 2,
            title: "Web Developer",
            type: "Part-Time",
            location: "Voysis IP Solutions",
            image: "/assets/experience/voysisLogo.png",
            description: "Developped a web site for Voysis's new company GoingVoIP. Learned about web development, NextJs and React.", 
            width: 180,
            height: 80,
        }
    }
    else if (card == 3) {
        return {
            id: 3,
            title: "Full Stack Blockchain Developer",
            type: "Contract",
            location: "DDC NFT",
            image: "/assets/experience/nftlogo.png",
            description: "Developed a web application and smart contract for Dauntless Dolphins Club NFT. Learned about full stack web development, VueJs, NuxtJs, blockchain development and solidity.", 
            width: 125,
            height: 125,
            link: "https://dauntlessdolphins.com"
        }
    }
    else if (card == 4) {
        return {
            id: 4,
            title: "Co-Founder and Developer",
            type: "Part-Owner",
            location: "DevPro Media",
            image: "/assets/experience/devproLogo2.png",
            description: "Co-founded DevPro media, a development and media agency where we design websites, build web applications and market brands for our clients.", 
            link: "https://www.devpromedia.com",
            width: 125,
            height: 125,
        }
    }
    else if (card == 5) {
        return {
            id: 5,
            title: "Developer",
            type: "Project",
            location: "UoT",
            image: "/assets/experience/liaLogo-removebg-preview.png",
            description: "Lia : A Memory Aid Assistant (Project) Application to aid people with memory loss by interpreting questions and relaying answers back to the user using artifical intelligence. Won Best Health Hack at NewHacks 2021, University of Toronto.", 
            github: "https://github.com/mattcab2002/Liassistant",
            width: 200,
            height: 200,
        }
    }
    else if (card == 6) {
        return {
            id: 6,
            title: "Developer",
            type: "Project",
            location: "McGill",
            image: "/assets/experience/pictodocreader.png",
            description: "PictoDocReader : A PDF Image Locator (Project). Full stack development of a software to locate images within PDFs. Won Best Education Hack at McHacks 9, McGill University.", 
            github: "https://github.com/mattcab2002/PictoDocReader",
            width: 250,
            height: 175,
        }
    }
    else if (card == 7) {
        return {
            id: 7,
            title: "Developer",
            type: "Project",
            location: "Phizer",
            image: "/assets/experience/ai.png",
            description: "PharmaHacks 2022 (Project) Machine learning models to predict the diagnosis of disease based on presence of bacteria in the gut microbiome.", 
            width: 150,
            height: 150,
        }
    }
    else if (card == 8) {
        return {
            id: 8,
            title: "Co-Founder and Project Director",
            type: "Organization",
            location: "McGill CHAP",
            image: "/assets/experience/mcgillLogo.png",
            description: "Project Director at McGill CHAP where we build projects, participate in contests and innovate with new technologies in hopes to help students gain experience in computer science.", 
            width: 180,
            height: 75,
        }
    }
    else {
        return false;
    }
}