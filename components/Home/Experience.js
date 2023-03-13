import { useState, useEffect } from "react";

import ExperienceCard from "../comps/ExperienceCard";
import getExperience from "../../storage/experience";
import { motion } from "framer-motion"


export default function Experience() {

    const [experience, setExperience] = useState(getExperience());


    return (
        <section className="experienceSection">
            <div className="row centerText">
                <h3 className="myfont600 fontSize48 text-white">What are my <span className="myTextGradient">Experiences?</span></h3>
            </div>
            <div className="experienceRows">
                <div className="row">
                    { experience.map((item, index) => {
                        let transitionDur;
                        if (index > 3) {
                            transitionDur = (index - 4)*0.1 + 0.6
                        }else {
                            transitionDur = index*0.1 + 0.5;
                        }
                        let init = {
                            x: "-10%",
                            y: "-10%",
                            opacity: 0
                        }
                        let onview = {
                            x: 0,
                            y: 0,
                            opacity: 1
                        }
                        let onhover = {
                            scale: 1.05
                        }
                        return (
                                <motion.div initial={init} whileInView={onview} transition={{ duration: transitionDur, delay: 0.5 }} viewport={{ once: true }} key={index} className="col-lg-3 col-md-6 centerItem centerItemV mobileExperienceCol">
                                    <motion.div whileHover={onhover} transition={{ duration: 0.3 }}>
                                        <ExperienceCard info={item} />
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                </div>
            </div>
        </section>
    );
}