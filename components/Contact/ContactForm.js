import { useState } from "react";

export default function ContactForm() {

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
    function handleSubmit() {

    }

    return(
        <div className="contactForm myGradient centerItem centerItemV">
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
                        <div className="col myAlignRight">
                            <button type="button" className="formSubmit" onClick={handleSubmit} >Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}