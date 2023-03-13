
import Image from "next/image";
import getLogos  from "../../storage/logos";

import SkillPopup from "./SkillPopup";
import { motion } from "framer-motion"

export default function LogoSlider(props) {
    
    const logos = getLogos();

    let count = 0;
    return (
        <div className="sliderLContainer" >
            <div className="sliderSContainer" id="sliderSmallCont">
                {logos.map((item) => {
                    count++;  
                    return (
                        <motion.div whileHover={{ rotate: [0, 10, 0, 10, 0], scale: [1, 1.2, 1] }} transition={{ duration: 0.5 }} key={count} onClick={(e) => props.call(e, item)} className="lsImgContainer centerItem centerItemV">
                            <Image src={item.src} width={item.w} height={item.h} alt={item.alt} />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}