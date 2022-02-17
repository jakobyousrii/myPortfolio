import classes from "./HamburgerMenu.module.css";
import Transition from "react-transition-group/cjs/Transition";
import React from "react";

const HamburgerMenu = (props) => {

    return (
        <Transition
            in={props.isClicked}
            timeout= {300}
            mountOnEnter
            unmountOnExit>
            {state => {
                const cssClasses = 
                `${classes.hamburgerMenu} 
                ${state === "entering" ? classes.hamburgerEntering : null} ${state === "exiting" ? classes.hamburgerExiting : null}`

                return (
                    <header className={cssClasses}>
                        <ul>
                            <li onClick={props.onClick}>ABOUT</li>
                            <li onClick={props.skillsLink}>MY SKILLS</li>
                            <li onClick={props.portfolioLink}>MY PORTFOLIOS</li>
                            <li onClick={props.contactLink}>CONTACT ME</li>
                        </ul>
                    </header>
                )
            }}
        </Transition>
    )
}
export default HamburgerMenu;