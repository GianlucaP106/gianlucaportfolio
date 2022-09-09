import { useState, useEffect } from "react";

import ExperienceCard from "../comps/ExperienceCard";
import getExperience from "../../storage/experience";


export default function Experience() {

    const [experience, setExperience] = useState(prepRows());

    function prepRows() {
        // const rows = 3;
        // const cols = 3;
    
        // let experiences = [];
        // for (let i = 0; i < rows; i++) {
        //     experiences.push([]);
        // }
    
        // let count = 1;
        // for (let i = 0; i < rows; i++) {
        //     for (let j = 0; j < cols; j++) {
        //         const item = getExperience(count);
        //         if (item) {
        //             experiences[i].push(item);
        //         }
        //         count++;        
        //     }
        // }
        // return experiences;

        let experiences = [];

        for (let exp = 1; exp < 10; exp++) {
            experiences.push(getExperience(exp));
        }
        return experiences;
    }

    let count = 0;
    return (
        <section className="experienceSection">
            <div className="row centerText">
                <h3 className="myfont600 fontSize48 text-white">What are my <span className="myTextGradient">Experiences?</span></h3>
            </div>
            <div className="experienceRows">
                {/* { experience.map((col) => {
                    rowCount++;
                    return (
                        <div key={rowCount} className="row">
                            { col.map((item) => {
                                colCount++;
                                return (
                                    <div key={colCount} className={"col-lg-4 centerItem centerItemV mobileExperienceCol"}>
                                        <ExperienceCard info={item} />
                                    </div>
                                );
                            })}
                        </div>
                    );
                })} */}
                <div className="row">
                    { experience.map(item => {
                        return (
                            <div key={count} className="col-lg-4 col-md-6 centerItem centerItemV mobileExperienceCol">
                                <ExperienceCard info={item} />
                            </div>
                            );
                        })}
                </div>
            </div>
        </section>
    );
}