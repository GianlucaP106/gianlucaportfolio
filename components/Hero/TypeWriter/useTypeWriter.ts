import {useEffect, useState} from "react";
import styles from "@/components/Hero/TypeWriter/TypeWriter.module.css";


export default function useTypeWriter() {
    const [tag1, setTag1] = useState("poster");
    const [hi, setHi] = useState('poster');
    const [myName, setMyName] = useState('poster');
    const [description, setDescription] = useState('poster');
    const [tag2, setTag2] = useState("poster");

    function typeTag1() {
        document.getElementById('hero-tag1')?.classList.add(styles.typingEf);
        setTimeout(() => {
            document.getElementById('hero-tag1')?.classList.remove(styles.op0);
        }, 300)

        let message = "&lt;&gt;";
        setTimeout(() => {
            setTag1("<");
        }, 250);
        setTimeout(() => {
            setTag1("<>");
        }, 500);

        setTimeout(() => {
            document.getElementById('hero-tag1')?.classList.remove(styles.typingEf);
        }, 600)

    }

    function typeTag2() {
        document.getElementById('hero-tag2')?.classList.add(styles.typingEf);
        setTimeout(() => {
            document.getElementById('hero-tag2')?.classList.remove(styles.op0);
        }, 300)

        let message = "&lt;&gt;";
        setTimeout(() => {
            setTag2("<");
        }, 250);
        setTimeout(() => {
            setTag2("</");
        }, 500);
        setTimeout(() => {
            setTag2("</>");
        }, 750);

    }

    function typeMyName() {
        document.getElementById('hero-myName')?.classList.add(styles.typingEf);
        setTimeout(() => {
            document.getElementById('hero-myName')?.classList.remove(styles.op0);
        }, 300)

        let message = "Gianluca";
        let timeCount = 200;
        for (let i = 0; i <= message.length; i++) {
            setTimeout(() => {
                setMyName(message.slice(0, i))
            }, timeCount);
            timeCount += 200;
        }

        setTimeout(() => {
            document.getElementById('hero-myName')?.classList.remove(styles.typingEf);
        }, 2500)

    }

    function typeDes() {
        document.getElementById('hero-description')?.classList.add(styles.typingEf);
        setTimeout(() => {
            document.getElementById('hero-description')?.classList.remove(styles.op0);
        }, 300);

        let message = "I am a Full stack Developer and a Software Engineering Student at McGill University";
        let timeCount = 50;
        for (let i = 0; i <= message.length; i++) {
            setTimeout(() => {
                setDescription(message.slice(0, i))
            }, timeCount);
            timeCount += 50;
        }

        setTimeout(() => {
            document.getElementById('hero-description')?.classList.remove(styles.typingEf);
        }, 4200)

    }

    function typeHi() {
        document.getElementById('hero-hi')?.classList.add(styles.typingEf);
        setTimeout(() => {
            document.getElementById('hero-hi')?.classList.remove(styles.op0);
        }, 300);

        let message = "Hi, I'm";
        let timeCount = 150;
        for (let i = 0; i <= message.length; i++) {
            setTimeout(() => {
                setHi(message.slice(0, i))
            }, timeCount);
            timeCount += 150;
        }

        setTimeout(() => {
            document.getElementById('hero-hi')?.classList.remove(styles.typingEf);
        }, 1500)

    }

    useEffect(() => {
        function startTyping() {
            typeTag1();
            setTimeout(() => {
                typeHi();
            }, 700);
            setTimeout(() => {
                typeMyName();
            }, 2000);
            setTimeout(() => {
                typeDes();
            }, 4000);
            setTimeout(() => {
                typeTag2();
            }, 8000);
        }

        setTimeout(() => {
            startTyping();
        }, 1000);
    }, []);

    return {
        tag1,
        hi,
        myName,
        description,
        tag2,
    }
}