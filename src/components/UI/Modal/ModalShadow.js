import React from "react";
import classes from "./ModalShadow.module.css";


const ModalShadow= (props)=>{

    return <div onClick={props.onSubmit} className={classes.ModalShadow}></div>
}

export default ModalShadow;