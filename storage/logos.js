
export default function getLogos() {
    const logos = {
        logo1: {
            src: "/assets/logos/nextLogo.png",
            alt: "Next",
            w: 100,
            h: 100,
            description: "NextJs, my favourite full stack framework for web applications"
        },
        logo2: {
            src: "/assets/logos/nodejsLogo.png",
            alt: "NodeJs",
            w: 90,
            h: 100,
            description: "I use Nodejs for every javascript based web application"
        },
        logo3: {
            src: "/assets/logos/javaLogo.png",
            alt: "Java",
            w: 100,
            h: 100,
            description: "I used Java at McGill where we learn core software engineering concepts"
        },
        logo4: {
            src: "/assets/logos/pythonlogo.png",
            alt: "Python",
            w: 100,
            h: 100,
            description: "Python was the first language I learned, and used it in multiple hackathons!"
        },
        logo5: {
            src: "/assets/logos/Visual_Studio_Code_1.35_icon.png",
            alt: "VSCode",
            w: 100,
            h: 100,
            description: "VSCode my favourite text editor as it is lightweight and powerful"
        },
        logo6: {
            src: "/assets/logos/reactLogo.png",
            alt: "React",
            w: 100,
            h: 100,
            description: "ReactJs is my favourite front-end library for building applications"
        },
        logo7: {
            src: "/assets/logos/githubLogo.png",
            alt: "Git",
            w: 100,
            h: 100,
            description: "Git and GitHub are super important to keep version control organized"
        },
        logo8: {
            src: "/assets/logos/JavaScript-logo.png",
            alt: "JavaScript",
            w: 100,
            h: 100,
            description: "I learned JavasScript when I started web development and I use it almost everyday"
        },
        logo9: {
            src: "/assets/logos/solidityLogo.png",
            alt: "Solidity",
            w: 100,
            h: 100,
            description: "I learned Solidity when I was responsible for devlivering a Web3 application to mint NFTs"
        },
        logo10: {
            src: "/assets/logos/dockerLogo.png",
            alt: "Docker",
            w: 100,
            h: 80,
            description: "I learnt docker during my internship at CGI and I now use it for almost all my applications."
        },
        logo11: {
            src: "/assets/logos/Sql_data_base_with_logo.png",
            alt: "SQL",
            w: 150,
            h: 80,
            description: "I learned SQL during my internship at CGI where I developed a POC for automating IAM processes."
        },
        logo12: {
            src: "/assets/logos/linuxIcon.png",
            alt: "SQL",
            w: 80,
            h: 90,
            description: "I used linux machines when interacting with azure cloud services and on personal projects."
        },
        logo13: {
            src: "/assets/logos/hacking.png",
            alt: "SQL",
            w: 120,
            h: 120,
            description: "I learned about ethical hacking during my internship at CGI where I took a series of courses on the subject."
        },
        logo14: {
            src: "/assets/logos/expresslogo-removebg-preview.png",
            alt: "Express",
            w: 120,
            h: 120,
            description: "I learned express when I first started web development, I have used it in almost all my web applications using Node"
        },
        logo15: {
            src: "/assets/logos/mongodbLogo.png",
            alt: "MongoDB",
            w: 40,
            h: 80,
            description: "MongoDB, the NoSQL that has served me well when bulding web applications"
        },
        logo16: {
            src: "/assets/logos/bootstrapLogo.png",
            alt: "BootStrap",
            w: 120,
            h: 100,
            description: "Bootstrap is my favourite CSS framework for bulding UIs"
        },
        logo17: {
            src: "/assets/logos/Vue.js_Logo_2.png",
            alt: "Vue",
            w: 100,
            h: 100,
            description: "I learned Vue in the process of bulding a web3 application"
        },
        logo18: {
            src: "/assets/logos/2560px-Nuxt_logo.png",
            alt: "Nuxt",
            w: 100,
            h: 80,
            description: "I learned Nuxt the full stack framework in the process of bulding a web3 application"
        },
        logo19: {
            src: "/assets/logos/vercelLogo.png",
            alt: "Vercel",
            w: 100,
            h: 100,
            description: "Vercel is host provider that lets you host web applications and serverless functions"
        },
        logo20: {
            src: "/assets/logos/csharplogo.png",
            alt: "C#",
            w: 90,
            h: 100,
            description: "C# is a lanaguage similar to Java where I have aquired working knowledge"
        },
    }
    let out = [];

    Object.keys(logos).forEach(key => {
        out.push(logos[key]);
    });
    Object.keys(logos).forEach(key => {
        out.push(logos[key]);
    });

    return out;
}