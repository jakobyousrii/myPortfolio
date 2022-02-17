import React, { useState } from "react";
import classes from "./Contact.module.css";
import ContactForm from "./ContactForm";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Modal from "../../UI/Modal/Modal";

const Contact = React.forwardRef((props, ref) => {

    const [isSubmited, setIsSubmited] = useState(false);

    const onSubmitMessage = () => {
        setIsSubmited(previous => !previous);
    }

    return (
        <section ref={ref} className={classes.contactSection}>
            <ContactForm onSubmit={onSubmitMessage} />
            <hr />
            <article className={classes.articleSocial}>
                <h2>Catch Me On My Social Media!</h2>
                <ul>
                    <li><a href="https://www.facebook.com/jakob.yousri/"><FaFacebook /></a></li>
                    <li><a href="https://github.com/jakobyousrii"><FaGithub /></a></li>
                    <li><a href="https://www.linkedin.com/in/jakobyousri/"><FaLinkedin /></a></li>
                    <li><a href="https://www.instagram.com/jakobyousri/"><FaInstagram /></a></li>
                </ul>
            </article>
            {isSubmited && <Modal onSubmit={onSubmitMessage}/>}
        </section>
    )
})

export default Contact;