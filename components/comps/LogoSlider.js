
import Image from "next/image";
import getLogos  from "../../storage/logos";

import SkillPopup from "./SkillPopup";

export default function LogoSlider(props) {
    
    

    const logos = getLogos();

    let count = 0;
    return (
        <div className="sliderLContainer" >
            <div className="sliderSContainer">
                {logos.map((item) => {
                    count++;  
                    return (
                        <div key={count} onClick={(e) => props.call(e, item)} className="lsImgContainer centerItem centerItemV skillLogoAnim">
                            <Image src={item.src} width={item.w} height={item.h} alt={item.alt} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}