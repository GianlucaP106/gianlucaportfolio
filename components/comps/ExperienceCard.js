import Image from "next/image";

export default function ExperienceCard({ info }) {

    function backSide() {
        document.getElementById(`flipCardInner${info.id}`).classList.add("rotateCard");
        document.getElementById(`flipCard${info.id}`).classList.add("addSizeCard");
    }
    function frontSide() {
        document.getElementById(`flipCard${info.id}`).classList.remove("addSizeCard");
        document.getElementById(`flipCardInner${info.id}`).classList.remove("rotateCard");
    }
    return (
        <div className="flip-card" id={`flipCard${info.id}`}>
            <div className="flip-card-inner" id={`flipCardInner${info.id}`}>
                <div className="flip-card-front myGradient centerItem centerItemV" onClick={backSide}>
                    <div className="flipCardIn">
                        <div className="row" style={{width: '100%', height: '100%'}}>
                            <div className="col-6 centerItem centerItemV">
                                <div>
                                    <p className="text-white myfont400">{info.title}</p>
                                    <p className="myBlue myfont400">{info.type} &#8729; {info.location} </p>
                                    <p className="myBlue myfont400 fontSize10">Click to view more</p>
                                </div>
                            </div>
                            <div className="col-6 centerItem centerItemV">
                                <div>
                                    <Image src={info.image} height={info.height} width={info.width} alt={info.title}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flip-card-back myGradient centerItem centerItemV" onClick={frontSide}>
                    <div className="flipCardIn">
                        <button onClick={frontSide} className="experienceExit myfont400 fontSize12">x</button>
                        <div className="row" style={{height: "40px"}}>
                            <div className="experienceBackTitle">
                                <p className="text-white myfont400 fontSize12">{info.title}</p>
                                <p className="myBlue myfont400 fontSize12">{info.type} &#8729; {info.location} </p>
                                <div>
                                    <Image src={info.image} height={info.height * 0.25} width={info.width * 0.25} alt={info.title}/>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{paddingTop: "20px"}}>
                            <div className="col centerText">
                                <p className="myBlue myfont400 fontSize14">Description & Learning Outcomes</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col leftText">
                                <div style={{padding: "10px", paddingTop: "20px"}}>
                                    <p className="text-white myfont400 fontSize14">{info.description}</p>
                                </div>
                            </div>
                        </div>
                        {(info.link || info.github) && 
                            <div className="row experienceBackTitle">
                                {info.link && <a href={info.link} className="experienceLinks"><p>View More</p></a>}
                                {info.github && <a href={info.github} className="experienceLinks"><p>GitHub</p></a>}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}