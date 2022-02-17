import classes from "./About.module.css";
import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import { FcIdea, FcPhoneAndroid, FcApprove } from "react-icons/fc";



const About = React.forwardRef((props, ref) => {

    useEffect(() => {
        Aos.init({ duration: 1000});
    }, [])

    return (
        <section ref={ref} className={classes.about}>
            <div  className={classes.imageDiv}>
                <img data-aos-once="true" data-aos="slide-right" src={process.env.PUBLIC_URL + '/imgs/degree.png'} alt="degree" />
            </div>
            <article className={classes.aboutArticle}>
                <h2>About Me</h2>
                <p>Hello! I'm Jakob from Croatia,
                    have a master's degree in Business Informatics.
                    I'm really passionate about programming, information tehnologies and generally enjoy creating things that live on the internet. I've been creating front-end and full-stack applications for a years.
                </p>
                <article className={classes.articleThreeGrid}>
                <p>When building a project, I have three main goals for myself:</p>
                <ul className={classes.threeGrid}>

                    <li data-aos-once="true" data-aos="fade-up-right">
                        <span><FcIdea/></span>
                        <p>Innovation</p>
                    </li>
                    <li>
                        <span><FcApprove/></span>
                        <p>User Friendly</p>
                    </li>
                    <li data-aos-once="true" data-aos="fade-up-left">
                        <span><FcPhoneAndroid/></span>
                        <p>Responsive</p>
                    </li>
                </ul>
                </article>
            </article>
        </section>
    )
});

export default About;