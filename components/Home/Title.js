

export default function Title() {
    const spans = 1100;
    let spanLst = [];
    for (let i = 0; i < spans; i++) {
        spanLst.push(i);
    }
    let count = 0;
    return(
        <section>
            <div className="backContainer" style={{paddingRight: "0"}}>
                {spanLst.map(() => {
                    count++;
                    return(
                        <span key={count} className="theDot"></span>
                    );
                })}
            </div>
        </section>
    );
}