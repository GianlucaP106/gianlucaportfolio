import { motion } from "framer-motion";

export default function Skill(props) {

    let col1 = [];
    let col2 = [];

    const skills = props.info.items;

    let cutOff = Math.ceil(skills.length / 2);

    for (let i = 0; i < cutOff; i++) {
        col1.push(skills[i]);
    }
    for (let i = cutOff; i < skills.length; i++) {
        col2.push(skills[i]);
    }
    let key = 0;
    let transDur;
    if (props.info.card > 1) {
        transDur = (props.info.card - 2) * 0.2 + 0.5
    }else {
        transDur = (props.info.card) * 0.2 + 0.5
    }
    return (
        <motion.div initial={{ x: "-10%", opacity: 0 }} whileInView={{ x: 0, y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: transDur, delay: 0.5 }} className="skillContainerBorder myGradient centerItem centerItemV">
            <div className="skillContainerIn">
                <div className="row centerText" style={{paddingTop: "25px"}}>
                    <p className="myBlue myfont400 fontSize24" >{props.info.title}</p>
                </div>
                <div className="row">
                    <div className="col-6 centerItem">
                        <ul>
                            { col1.map( (item) => {
                                key++;
                                return (
                                    <li key={key} className="myfont400 text-white skillItemText">{item}</li>
                                );
                            })}
                        </ul>
                    </div>
                    {(col2.length > 0) && 
                    <div className="col-6 centerItem">
                        <ul>
                            {col2.map( (item) => {
                                key++;
                                return (
                                    <li key={key} className="myfont400 text-white skillItemText">{item}</li>
                                );
                            })}    
                        </ul>
                    </div>}
                </div>
            </div>
        </motion.div>
    );
}