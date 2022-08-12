import { useState } from "react";

import LogoSlider from "../comps/LogoSlider";
import Skill from "../comps/Skill";

import getSkills from "../../storage/skills";
import SkillPopup from "../comps/SkillPopup";

export default function Skills() {

    const [skillPopup, setSkillPopup] = useState(false);
    const [skillPopupProps, setSkillPopupProps] = useState(null);

    function handleLogoClick(e, item) {
        const props = {
            item: item,
            x: e.clientX + window.scrollX - 100,
            y: e.clientY + window.scrollY - 100,

        }
        document.getElementById('sliderSmallCont').classList.add("sliderPaused");
        setSkillPopupProps(props);
        setSkillPopup(true);

    }
    return (
        <section id="skillSection">
            <div className="row" style={{paddingTop: "20px"}}>
                <div className="col centerText">
                    <h3 className="myfont600 fontSize48 text-white">What are my <span className="myTextGradient">skills?</span></h3>
                </div>
            </div>
            <div className="row" style={{paddingTop: "60px"}}>
                <div className="col-lg-6 centerItem">
                    <Skill info={getSkills(1)} />
                </div>
                <div className="col-lg-6 centerItem mobileSkillCol">
                    <Skill info={getSkills(2)} />
                </div>
            </div>
            <div className="row" style={{paddingTop: "60px"}}>
                <div className="col-lg-6 centerItem">
                    <Skill info={getSkills(3)} />
                </div>
                <div className="col-lg-6 centerItem mobileSkillCol">
                    <Skill info={getSkills(4)} />
                </div>
            </div>
            <div className="row" style={{paddingTop: "100px", paddingBottom: "60px"}}>
                <div className="col">
                    <LogoSlider call={handleLogoClick} />
                    {skillPopup && 
                    <SkillPopup prop={skillPopupProps} setSkillPopup={setSkillPopup} />
                    }
                </div>
            </div>
            <div className="row" style={{paddingTop: "60px"}}>
                <div className="col">
                    {/* <SkillPopup /> */}
                </div>
                <div className="col">
            
                </div>
            </div>
        </section>
    )
}