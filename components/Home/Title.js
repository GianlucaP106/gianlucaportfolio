

export default function Title() {
    const spans = 1100;
    let spanLst = [];
    for (let i = 0; i < spans; i++) {
        spanLst.push(i);
    }
    let count = 0;
    return(
        <section>
            <div className="backContainer">
                {spanLst.map(() => {
                    count++;
                    return(
                        <span key={count} className="theDot"></span>
                    );
                })}
                <div className="titleText noOverlay">
                    <p className="fontSize75 myfont600">Hi, I am</p>
                    <p className="fontSize75 myName myfont700">Gianluca</p>
                    <p className="fontSize24 myfont400">I am a Software Engineering Student at McGill and a Full Stack Developer</p>
                </div>
            </div>
        </section>
    );
}