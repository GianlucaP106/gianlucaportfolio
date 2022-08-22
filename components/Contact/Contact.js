import ContactAni from "./ContactAni";
import ContactForm from "./ContactForm";


export default function Contact() {
    return(
        <section className="contactSection">
            <div className="row d-flex centerItem centerItemV" style={{height: "100%"}}>
                <div className="col-lg-6 contactMeCol centerText" id="contactCol1">
                    <p className="myfont700 fontSize32 myTextGradient">Contact Me</p>
                    <ContactForm />
                </div>
                <div className="col-lg-6" id="contactCol2">
                    <ContactAni />
                </div>
            </div>        
        </section>
    );
}