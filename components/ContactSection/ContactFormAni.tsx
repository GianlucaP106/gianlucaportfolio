import styles from "./ContactFormAni.module.css";

export default function ContactAni() {
    return (
        <div className={styles.contactAnimationGrid}>
            <div className={`${styles.tags} myBlue font-bold fontSize20`}>{"</>"}</div>
            <div className={`${styles.code} myBlue font-bold fontSize20`}>code()</div>
            <div className={`${styles.terminalAni}`}> 
                <div className={`${styles.terminal}`}>
                    <p className="font-bold" style={{marginLeft: "5px"}}>{"$_"}</p>
                </div>
            </div>
            <div className={`${styles.gitAni}`}>
                <i style={{color: "#01debe"}} className="gg-git-branch"></i>
            </div>
            <div className={`${styles.brackets} myBlue font-bold text-lg`}>{"{}"}</div>
            <div className={`${styles.ipp} myBlue font-bold text-lg`}>i++;</div>
        </div>
    );
}

