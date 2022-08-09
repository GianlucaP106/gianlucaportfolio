
export default function getLogos() {
    const logos = {
        logo1: {
            src: "/assets/logos/nextLogo.png",
            alt: "Next Logo",
            w: 100,
            h: 100
        },
        logo2: {
            src: "/assets/logos/nodejsLogo.png",
            alt: "NodeJs logo",
            w: 90,
            h: 100
        },
        logo3: {
            src: "/assets/logos/javaLogo.png",
            alt: "Java Logo",
            w: 100,
            h: 100
        },
        logo4: {
            src: "/assets/logos/pythonlogo.png",
            alt: "Python Logo",
            w: 100,
            h: 100
        },
        logo5: {
            src: "/assets/logos/Visual_Studio_Code_1.35_icon.png",
            alt: "VSCode Logo",
            w: 100,
            h: 100
        },
        logo6: {
            src: "/assets/logos/reactLogo.png",
            alt: "React Logo",
            w: 100,
            h: 100
        },
        logo7: {
            src: "/assets/logos/githubLogo.png",
            alt: "Git Logo",
            w: 100,
            h: 100
        },
        logo8: {
            src: "/assets/logos/JavaScript-logo.png",
            alt: "Js Logo",
            w: 100,
            h: 100
        },
        logo9: {
            src: "/assets/logos/vercelLogo.png",
            alt: "Vercel Logo",
            w: 100,
            h: 100
        },
        logo11: {
            src: "/assets/logos/solidityLogo.png",
            alt: "Solidity Logo",
            w: 100,
            h: 100
        },
        logo12: {
            src: "/assets/logos/bootstrapLogo.png",
            alt: "BootStrap Logo",
            w: 120,
            h: 100
        },
        logo13: {
            src: "/assets/logos/Vue.js_Logo_2.png",
            alt: "Vue Logo",
            w: 100,
            h: 100
        },
        logo14: {
            src: "/assets/logos/2560px-Nuxt_logo.png",
            alt: "Nuxt Logo",
            w: 100,
            h: 80
        },
        logo15: {
            src: "/assets/logos/expressjs.png",
            alt: "Express Logo",
            w: 120,
            h: 75
        },
        logo16: {
            src: "/assets/logos/mongodbLogo.png",
            alt: "MongoDB Logo",
            w: 50,
            h: 100
        },
        logo17: {
            src: "/assets/logos/csharplogo.png",
            alt: "CSharp Logo",
            w: 90,
            h: 100
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