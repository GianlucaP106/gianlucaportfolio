import { useState } from "react";
import emailjs from "@emailjs/browser";


export default function ContactForm() {

    const [error, setError] = useState(false);

    function validateEmail(email) {
        const emailValidation = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
        return (emailValidation.test(email));
    }
    function handleEmailChange(text) {
        const emailDot = document.getElementById('emailDot');
        if (validateEmail(text)) {
            emailDot.style.backgroundColor = "green";
        }else {
            emailDot.style.backgroundColor = "red";
        }
    }
    function handleMissingFields(el) {
        el.style.border = "1px solid red";
    }
    async function handleSubmit() {
        const name = document.getElementById('formName');
        const email = document.getElementById('formEmail');
        const subject = document.getElementById('formSubject');
        const message = document.getElementById('formMessage');
        
        let err = false;
        if (!(name.value && name.value.length < 50)) {
            handleMissingFields(name)
            setError(true);
            err = true;
        }
        if (!(email.value && validateEmail(email.value) && email.value.length < 50)) {
            handleMissingFields(email);
            setError(true);
            err = true;
        }
        if (!(subject.value && subject.value.length < 50)) {
            handleMissingFields(subject);
            setError(true);
            err = true;
        }
        if (!(message.value && message.value.length < 350)) {
            handleMissingFields(message);
            setError(true);
            err = true;
        }

        if (err) return;

        let ipinfo = null;
        try {
            const response = await fetch("https://ipinfo.io/json");
            ipinfo = await response.json();
        }catch (e) {
            console.log(e);
        }
        
        const jsonData = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value,
            ip: ipinfo.ip,
            hostname: ipinfo.hostname,
            location: `${ipinfo.city}, ${ipinfo.region}, ${ipinfo.country}`,
            loc: ipinfo.loc,
            org: ipinfo.org,
            postal: ipinfo.postal,
            timezone: ipinfo.timezone,
        }
        // process.env.NEXT_PUBLIC_SERVICE_KEY process.env.NEXT_PUBLIC_TEMPLATE_ID process.env.NEXT_PUBLIC_KEY
        emailjs.send(process.env.NEXT_PUBLIC_SERVICE_KEY, process.env.NEXT_PUBLIC_TEMPLATE_ID, jsonData, process.env.NEXT_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        resetForm();
    }
    function erase() {
        document.getElementById('formName').value = "";
        document.getElementById('formEmail').value = "";
        document.getElementById('formSubject').value = "";
        document.getElementById('formMessage').value = "";
    }
    function clearBorders() {
        document.getElementById('formName').style.border = "1px solid gray";
        document.getElementById('formEmail').style.border = "1px solid gray";
        document.getElementById('formSubject').style.border = "1px solid gray";
        document.getElementById('formMessage').style.border = "1px solid gray";
    }
    function resetForm() {
        erase();
        clearBorders();
    }

    function handleContactFormClick() {
        if (error) {
            clearBorders();
            setError(false);
        }
    }

    return(
        <div onClick={handleContactFormClick} className="contactForm myGradient centerItem centerItemV">
            <div className="contactFormIn">
                <form>
                    <div className="row">
                        <div className="col-sm-6 formCol">
                            <div className="inputBox">                            
                                <input type="text" className="formName formInput" id="formName" name="name" required />
                                <span className="inputLabel myfont400">Name</span>
                            </div>
                        </div>
                        <div className="col-sm-6 formCol formCol2">
                            <div className="inputBox">                            
                                <input type="text" onChange={ (e) => handleEmailChange(e.target.value) } className="formEmail formInput" id="formEmail" name="email" required />
                                <span className="inputLabel myfont400">Email</span>
                                <div className="emailDot" id="emailDot"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{paddingTop: "30px"}}>
                        <div className="col">
                            <div className="inputBox">                            
                                <input type="text" className="formSubject formInput" id="formSubject" name="subject" required/>
                                <span className="inputLabel myfont400">Subject</span>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{paddingTop: "30px"}}>
                        <div className="col">
                            <div className="inputBox">
                                <textarea className="formInput" id="formMessage" name="message" required/>
                                <span className="inputLabel myfont400">Message</span>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{paddingTop: "15px"}}>
                        <div className="col myAlignLeft">
                            <p className="myfont400 formReset" onClick={resetForm}>Reset</p>
                        </div>
                        <div className="col myAlignRight">
                            <button type="button" className="formSubmit" onClick={handleSubmit} >Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}