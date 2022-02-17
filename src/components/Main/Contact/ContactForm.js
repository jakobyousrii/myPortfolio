import React, { Fragment } from "react";
import classes from "./ContactForm.module.css";
import InputHook from "../../../customHook/InputHook";
import { send } from 'emailjs-com';

const ContactForm = (props) => {
    const { inputValue: emailValue, onChangeHandler: emailOnChangeHandler, checkValidation: emailcheckValidation, onClearHandler: emailOnClear, onBlurHandler: emailOnBlur, isTouched: emailIsTouched } = InputHook((input) => { return input.trim().length > 6 && input.includes("@") });
    const { inputValue: nameValue, onChangeHandler: nameOnChangeHandler, checkValidation: namecheckValidation, onClearHandler: nameOnClear, onBlurHandler:  nameOnBlur, isTouched: nameIsTouched } = InputHook((input) => { return input.trim().length > 1; });
    const { inputValue: messageValue, onChangeHandler: messageOnChangeHandler, checkValidation: messagecheckValidation, onClearHandler: messageOnClear, onBlurHandler: messageOnBlur, isTouched:messageIsTouched  } = InputHook((input) => { return input.trim().length > 0; });
    let formIsValid = false;

    if(emailcheckValidation && namecheckValidation && messagecheckValidation){
        formIsValid = true;
    }
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        let toSend = {
            from_email: emailValue,
            from_name: nameValue,
            message: messageValue
        }
        if (formIsValid) {
            
            send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                toSend,
                process.env.REACT_APP_User_ID
              )

            emailOnClear(); nameOnClear(); messageOnClear();
            formIsValid = false;
            props.onSubmit();
        }
        else {
            console.log("something went wrong");
            return;
        }
    }
    const emailMessage = `${classes.Input} ${emailIsTouched && !emailcheckValidation ? classes.errorInput : ""}`;
    const nameMessage = `${classes.Input} ${nameIsTouched && !namecheckValidation ? classes.errorInput : ""}`;
    const messageMessage = `${classes.TextArea} ${ messageIsTouched && !messagecheckValidation ? classes.errorInput : ""}`;

    return (
        <Fragment>
            <form onSubmit={onSubmitHandler} className={classes.contactForm}>
                <h2>Fell Free To Contact Me!</h2>
                <div>
                    <label>Email:</label>
                    <input className={emailMessage} value={emailValue} onChange={emailOnChangeHandler} onBlur={emailOnBlur} type="email" placeholder="enter your email..." />
                    {!emailcheckValidation && emailIsTouched && <small>email must have "@" and at least 7 characters!</small>}
                </div>
                <div>
                    <label>Name:</label>
                    <input className={nameMessage} value={nameValue} onChange={nameOnChangeHandler} onBlur={nameOnBlur} type="text" placeholder="enter your name..." />
                    {!namecheckValidation && nameIsTouched && <small>name must have at least 2 characters!</small>}
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea className={messageMessage} id="message" value={messageValue} onChange={messageOnChangeHandler} onBlur={messageOnBlur}></textarea>
                    {!messagecheckValidation && messageIsTouched && <small>message cannot be empty!</small>}
                </div>
                <div>
                    <button>Send Message</button>
                </div>
            </form>
        </Fragment>
    )
}

export default ContactForm;