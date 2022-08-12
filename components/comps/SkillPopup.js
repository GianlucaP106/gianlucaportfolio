

export default function SkillPopup(props) {
    return(
        <div className="skillPopup" style={{position: 'absolute', top: `${props.prop.y}px`, left: `${props.prop.x}px`}}>
            <div>
                {props.prop.item.description}
            </div>
        </div>
    );
}