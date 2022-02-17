import { Fragment } from "react/cjs/react.production.min";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import { useRef } from "react";
import HamburgerMenu from "./HamburgerMenu";
import classes from "./Layout.module.css";
import React from "react";
import linkNav from "../../assets/linkNav";

const Layout = (props) => {
    const swipeNavigate = useRef();
    const swipeClickedHandler = () => {
        linkNav(swipeNavigate);
    }

    return (
        <Fragment>
            <Navbar isClicked={props.onClick} onClick={props.onHamburgerClick} />
            <HamburgerMenu
                isClicked={props.onClick}
                onClick={props.aboutRef}
                portfolioLink={props.portfolioRef}
                skillsLink={props.skillsRef}
                contactLink={props.contactRef}
            />
            <Jumbotron onSwipe={swipeClickedHandler} />

            <main className={classes.Main} ref={swipeNavigate}>
                {props.children}
            </main>
        </Fragment>
    )
}

export default Layout;