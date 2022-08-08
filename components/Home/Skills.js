import LogoSlider from "../comps/LogoSlider";
import Skill from "../comps/Skill";

import getSkills from "../../storage/skills";

export default function Skills() {

    return (
        <section >
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
                    <LogoSlider />
                </div>
            </div>
        </section>
    )
}