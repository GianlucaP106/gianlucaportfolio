import { useEffect, useState } from "react";
import styles from "@/components/Hero/TypeWriter/TypeWriter.module.css";


export default function useTypeWriterFunction() {
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

        let message = "string intro() {";
        let timeCount = 200;
        for (let i = 0; i <= message.length; i++) {
            setTimeout(() => {
                setTag1(message.slice(0, i))
            }, timeCount);
            timeCount += 200;
        }

        setTimeout(() => {
            document.getElementById('hero-tag1')?.classList.remove(styles.typingEf);
        }, timeCount)

    }

    function typeTag2() {
        document.getElementById('hero-tag2')?.classList.add(styles.typingEf);
        setTimeout(() => {
            document.getElementById('hero-tag2')?.classList.remove(styles.op0);
        }, 300)

        let message = "}";
        let timeCount = 200;
        for (let i = 0; i <= message.length; i++) {
            setTimeout(() => {
                setTag2(message.slice(0, i))
            }, timeCount);
            timeCount += 200;
        }

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

        let message = "I am a Software Developer, Architect and a Software Engineering Student at McGill University";
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
            let count = 0
            typeTag1();
            count = count + 3500
            setTimeout(() => {
                typeHi();
            }, count);
            count = count + 1200
            setTimeout(() => {
                typeMyName();
            }, count);
            count = count + 2000
            setTimeout(() => {
                typeDes();
            }, count);
            count = count + 4000
            setTimeout(() => {
                typeTag2();
            }, count);
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
