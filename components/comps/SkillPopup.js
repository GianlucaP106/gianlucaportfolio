import { useState, useEffect } from "react";
import Image from "next/image";

export default function SkillPopup(props) {

    const [style, setStyle] = useState(null);

    function exitPopup() {
        let styles = {
            position: "absolute",
            top: `${props.prop.y}px`,
            left: `${props.prop.x}px`
        }
        setStyle(styles);
        document.getElementById("skillPopup").classList.remove("skillPopupActive");
        setTimeout( () => {
            props.setSkillPopup(false);
            document.getElementById('sliderSmallCont').classList.remove("sliderPaused");
        }, 500)


    }
    useEffect(() => {
        let styles = {
            position: "absolute",
            top: `${props.prop.y}px`,
            left: `${props.prop.x}px`
        }
        setStyle(styles);

        
        setTimeout(() => {
            document.getElementById("skillPopup").classList.add("skillPopupActive");
            // document.getElementById("skillSection").classList.add("posRelative")
            let styles2 = {
                position: "absolute",
                top: `${window.scrollY + (0.40*window.innerHeight)}px`,
            }
            setStyle(styles2);
        }, 500)
        // setTimeout(() => {
        //     document.getElementById("skillSection").classList.add("posRelative");
        //     setStyle(null);
        // }, 1600)
        // setTimeout(() => {
            // }, 1000)
    }, []);


    return(
        <div className="skillPopup myGradient centerItem centerItemV" style={style} id="skillPopup">
            <div className="skillPopupIn">
                <button onClick={exitPopup} className="skillPopupExit">X</button>
                <div className="row" style={{paddingTop: "10px"}}>
                    <div className="col-4 centerItem centerItemV">
                        <Image src={props.prop.item.src} width={(0.30 * props.prop.item.w)} height={(0.30 * props.prop.item.h)} alt={props.prop.item.alt}/>
                    </div>
                    <div className="col centerItemV">
                        <p className="myfont400 text-white" style={{margin: "0"}}>{props.prop.item.alt}</p>
                    </div>
                </div>
                <div className="row" style={{paddingTop: "25px"}}>
                    <div className="col">
                        <p className="myfont400 text-white" style={{marginLeft: "20px"}}>{props.prop.item.description}</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}