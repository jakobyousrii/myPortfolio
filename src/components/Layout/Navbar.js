import { Fragment } from "react/cjs/react.production.min";
import classes from "./Navbar.module.css";
import Transition from "react-transition-group/cjs/Transition";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = (props) => {

    const changeNavbarColor = `${classes.Navbar}`
    
    return (
        <Fragment>
            <Transition in={props.isClicked} timeout={300}>
                {(state) => {
                    const hambCSS = `${classes.hamburgerButton} 
                            ${state === "entering" ? classes.hamburgerClicked : null} 
                            ${state === "exiting" ? classes.hamburgerExit : null}
                            ${state === "entered" ? classes.hamburgerClickedFinish : null}
                            `
                    return (<button className={hambCSS} onClick={props.onClick}>{props.isClicked ? <AiOutlineClose/> : <GiHamburgerMenu/>}</button>)
                }}
            </Transition>
            <nav className={changeNavbarColor}>
                <h1>Yousri.</h1>
            </nav>
        </Fragment>
    )
}

export default Navbar;