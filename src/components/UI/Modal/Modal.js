import React, { Fragment } from "react";
import reactDom from "react-dom";
import ModalContent from "./ModalContent";
import ModalShadow from "./ModalShadow";

const Modal = (props) => {
    return (
        <Fragment>
            {reactDom.createPortal(<ModalShadow onSubmit={props.onSubmit}/>, document.getElementById("modal"))}
            {reactDom.createPortal(<ModalContent onSubmit={props.onSubmit}/>, document.getElementById("modal"))}
        </Fragment>
    )   
}

export default Modal;