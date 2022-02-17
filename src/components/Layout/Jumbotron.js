import classes from "./Jumbotron.module.css";
import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";

const Jumbotron = (props) => {

    const [swipeClicked, setSwipeClicked] = useState(false);
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    const swipeHandler = () => {
        setSwipeClicked(!swipeClicked);
        props.onSwipe();
    }

    return (
        <section className={classes.Jumbotron}>
            <div className={classes.JumbotronAbout}>
                <article>
                    <p data-aos-once="true" data-aos="fade-right" className={classes.jumboParagraph}>Hi, I'm</p>
                    <h1 data-aos-once="true" data-aos="fade-right" className={classes.Name}>Jakob Yousri</h1>

                    <div className={classes.divAnimation}>
                    <p>And I'm a</p>
                    <ul className={classes.letterShow}>
                        <li><span>Full-Stack Web Dev</span></li>
                        <li><span>Hard Worker</span></li>
                        <li><span>Dream Chaser</span></li>
                    </ul>
                    </div>
                    <p className={classes.workingWith} data-aos-once="true" data-aos="fade-left">Working With VanillaJS, ReactJS, NodeJS, NextJS, Non-Relation Databases and more!</p>
                </article>
                <div>
                    <img className={classes.visaImg} data-aos-once="true" data-aos="fade-left" src={process.env.PUBLIC_URL + '/imgs/visa.jpg'} alt="yousri" />
                </div>
            </div>
                    <button onClick={swipeHandler} className={classes.swipeDown}>&darr;</button>
        </section>
    )
}

export default Jumbotron;