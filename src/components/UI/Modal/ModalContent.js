import React from "react";
import classes from "./ModalContent.module.css";

const ModalContent = (props) => {

    return (
        <article className={classes.modalArticle}>
            <div>
                <h2>Your message has been sent!</h2>
                <p>Thank you for contacting me, I will reply as soon as possible!</p>
            </div>
            <button onClick={props.onSubmit}>Close</button>
        </article>
    )
}

export default ModalContent;