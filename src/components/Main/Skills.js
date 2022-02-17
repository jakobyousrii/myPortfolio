import React,{useEffect} from "react";
import classes from "./Skills.module.css";
import { SiHtml5, SiCss3, SiNodedotjs, SiJavascript, SiReact, SiMongodb, SiNodemon, SiRedux, SiNpm, SiBootstrap } from "react-icons/si";
import Aos from "aos";
import 'aos/dist/aos.css';


const Skills =React.forwardRef((props, ref) => {


    useEffect(() => {
        Aos.init({ duration: 500});
    }, [])

    return (
        <section ref={ref} className={classes.skillSection}>
            <article className={classes.aboutSkills} data-aos-once="true" data-aos="fade-down">
                <h2>My Skills</h2>
                <p>I've started programming with C and C# programming languages where I've learned a lot about algorithms (Brute Force, Greedy, Recursive and Backtracking algorithms) and generally about Data Structures. 
                    Later, I've started learning HTML, CSS and Javascript, and by creating front-end pages I've learned a lot about web design and how internet works, When I felt confidante about HTML, CSS and Javascript, I've started learning back-end, because I've wanted to integrate front-end with back-end to make a full-stack application, so I've started learning Node.js, express, terminal, git, nodemon, postman and for database, I've been working with non-relational database - MongoDB.</p>
                <p>I've learned a lot about back-end applications which includes, Restful API, Authentication, Autorization, caches, cookies, sessions, deploying, databases and much more...</p>
                <p>To be capable to make much more complex application with a less code, I've learned React.js and Next.js where i've learned about states, props, class-based and function-based components, routers, custom hooks and much more. </p>
            </article>
            <article className={classes.skillTable}>
                <ul data-aos-once="true" data-aos="fade-up">
                   <li><SiHtml5/><span></span></li>
                   <li><SiCss3/><span></span></li>
                   <li><SiJavascript/><span></span></li>
                   <li><SiNodedotjs/><span></span></li>
                   <li><SiReact/><span></span></li>
                   <li><SiMongodb/><span></span></li>
                   <li><SiNodemon/><span></span></li>
                   <li><SiRedux/><span></span></li>
                   <li><SiNpm/><span></span></li>
                   <li><SiBootstrap/><span></span></li>
                </ul>
            </article>
        </section>
    )
})

export default Skills;