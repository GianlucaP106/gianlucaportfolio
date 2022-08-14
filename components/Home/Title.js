import { useEffect, useState } from "react";

export default function Title() {

    const [tag1, setTag1] = useState("poster");
    const [hi, setHi] = useState('poster');
    const [myName, setMyName] = useState('poster');
    const [description, setDescription] = useState('poster');
    const [tag2, setTag2] = useState("poster");

    function typeTag1() {
        document.getElementById('tag1').classList.add('typingEf');
        setTimeout( () => {
            document.getElementById('tag1').classList.remove('op0');
        }, 300)
        
        let message = "&lt;&gt;";
        setTimeout( () => {
            setTag1("<");
        },250);
        setTimeout( () => {
            setTag1("<>");
        }, 500);

        setTimeout(() => {
            document.getElementById('tag1').classList.remove('typingEf');
        }, 600) 

    }

    function typeTag2() {
        document.getElementById('tag2').classList.add('typingEf');
        setTimeout( () => {
            document.getElementById('tag2').classList.remove('op0');
        }, 300)
        
        let message = "&lt;&gt;";
        setTimeout( () => {
            setTag2("<");
        },250);
        setTimeout( () => {
            setTag2("</");
        },500);
        setTimeout( () => {
            setTag2("</>");
        }, 750);

        // setTimeout(() => {
        //     document.getElementById('tag2').classList.remove('typingEf');
        // }, 850); 

    }
    function typeMyName() {
        document.getElementById('homeText2').classList.add('typingEf');
        setTimeout( () => {
            document.getElementById('homeText2').classList.remove('op0');
        }, 300)
        
        let message = "Gianluca";
        let timeCount = 200;
        for (let i = 0; i <= message.length; i++) {
            setTimeout( () => {
                setMyName(message.slice(0, i))
            }, timeCount);
            timeCount += 200;
        }

        setTimeout(() => {
            document.getElementById('homeText2').classList.remove('typingEf');
        }, 2500) 

    }
    function typeDes() {
        document.getElementById('homeText3').classList.add('typingEf');
        setTimeout( () => {
            document.getElementById('homeText3').classList.remove('op0');
        }, 300);

        let message = "I am a Full stack Developer and a Software Engineering Student at McGill University";
        let timeCount = 50;
        for (let i = 0; i <= message.length; i++) {
            setTimeout( () => {
                setDescription(message.slice(0, i))
            }, timeCount);
            timeCount += 50;
        }

        setTimeout(() => {
            document.getElementById('homeText3').classList.remove('typingEf');
        }, 4200) 

    }
    function typeHi() {
        document.getElementById('homeText1').classList.add('typingEf');
        setTimeout( () => {
            document.getElementById('homeText1').classList.remove('op0');
        }, 300);

        let message = "Hi, I'm";
        let timeCount = 150;
        for (let i = 0; i <= message.length; i++) {
            setTimeout( () => {
                setHi(message.slice(0, i))
            }, timeCount);
            timeCount += 150;
        }

        setTimeout(() => {
            document.getElementById('homeText1').classList.remove('typingEf');
        }, 1500) 

    }
    function startTyping() {
        typeTag1();
        setTimeout( () => {
            typeHi();
        }, 700);
        setTimeout( () => {
            typeMyName();
        }, 2000);
        setTimeout( () => {
            typeDes();
        }, 4000);
        setTimeout( () => {
            typeTag2();
        }, 8000);
    }

    const spans = 5000;
    let spanLst = [];
    for (let i = 0; i < spans; i++) {
        spanLst.push(i);
    }
    let count = 0;

    useEffect(() => {
        setTimeout( () => {
            startTyping();
        }, 1000);
    },[])
    const tag = "<>";
    return(
        <section>
            <div className="backContainer">
                {spanLst.map(() => {
                    count++;
                    return(
                        <span key={count} className="theDot"></span>
                    );
                })}
                <div className="emptyTag1 noOverlay">
                    <p className="op0" id="tag1">{tag1}</p>
                </div>
                <div className="titleText noOverlay">
                    <p className="myfont600 typingEf op0" id="homeText1">{hi}</p>
                    <p className="myName myfont700 op0" id="homeText2">{myName}</p>
                    <p className="myfont400 op0" id="homeText3">{description}</p>
                </div>
                <div className="emptyTag2 noOverlay">
                    <p className="op0" id="tag2">{tag2}</p>
                </div>
            </div>
        </section>
    );
}