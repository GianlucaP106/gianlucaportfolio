

export default function ContactAni() {
    return (
        <div className="contactAnimationGrid">
            <div className="tags myBlue myfont400 fontSize20">{"</>"}</div>
            <div className="code myBlue myfont400 fontSize20">code()</div>
            <div className="terminalAni"> 
                <div className="terminal">
                    <p className="myfont400" style={{marginLeft: "5px"}}>{"$_"}</p>
                </div>
            </div>
            <div className="gitAni">
                <i style={{color: "#01debe"}} className="gg-git-branch"></i>
            </div>
            <div className="brackets myBlue myfont400 fontSize20">{"{}"}</div>
            <div className="ipp myBlue myfont400 fontSize20">i++;</div>
        </div>
    );
}