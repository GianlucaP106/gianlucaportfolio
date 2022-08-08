
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
            src: "/assets/logos/githublogo.png",
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
        logo10: {
            src: "/assets/logos/csslogo.png",
            alt: "CSS Logo",
            w: 75,
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