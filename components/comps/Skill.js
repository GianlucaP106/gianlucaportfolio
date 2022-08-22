

export default function Skill(props) {

    let col1 = [];
    let col2 = [];

    const skills = props.info.items;

    let cutOff = 0;
    if (props.info.card == 1) {
        cutOff = 5;
    }else if (props.info.card == 2) {
        cutOff = 6;
    }else if (props.info.card == 3) {
        cutOff = 1;
    }else if (props.info.card == 4) {
        cutOff = 4;
    }

    for (let i = 0; i < cutOff; i++) {
        col1.push(skills[i]);
    }
    for (let i = cutOff; i < skills.length; i++) {
        col2.push(skills[i]);
    }
    let key = 0;
    return (
        <div className="skillContainerBorder myGradient centerItem centerItemV">
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
        </div>
    );
}