import React, {useEffect} from "react";
import classes from "./Portfolios.module.css";
import Aos from "aos";
import 'aos/dist/aos.css';

const Portfolios =React.forwardRef((props, ref) => {

    useEffect(() => {
        Aos.init({ duration: 1000});
    }, [])

    return <section ref={ref} className={classes.portfolioSection}>
        <div className={classes.portfoliosDiv}>
            <h1 className={classes.H1}>My Portfolio Pages</h1>
        </div>
        <article className={classes.portfolios}>
            <ul>
                <li data-aos-once="true" data-aos="fade">
                    <img src={process.env.PUBLIC_URL + '/imgs/portfolio/breaking.PNG'} alt="" />
                    <article>
                        <h3>TV-showtime (Full-stack App)</h3>
                        <small>(Node.js, Express.js, ejs, RestAPI, tvmaze.com/api and more!)</small>
                        <p>Find useful informations about specific TV show that can help you find what you would like to watch!</p>
                    </article>
                    <button>
                    <a href="https://tv-showtime.herokuapp.com/">See Live</a>
                    </button>
                </li>
                <li data-aos-once="true" data-aos="fade">
                    <img src={process.env.PUBLIC_URL + '/imgs/portfolio/camping.PNG'} alt="" />
                    <article>
                        <h3>CampingLife (Full-Stack App)</h3>
                        <small>(Node.js, Express.js, ejs, MongoDB, Mongoose, RestAPI, sessions and more!)</small>
                        <p>Create your campground and put your cluster inside our campingLife's map!</p>
                    </article>
                    <button>
                    <a href="https://campinglife.herokuapp.com/">See Live</a>
                    </button>
                </li>
                <li data-aos-once="true" data-aos="fade">
                    <img src={process.env.PUBLIC_URL + '/imgs/portfolio/pdv.PNG'} alt="" />
                    <article>
                        <h3>PDV/VAT calculator</h3>
                        <small>(Node.js, ejs, Express.js, Bootstrap and more!)</small>
                        <p> Simply PDV/VAT calculator Made in Node.js where you can insert percentage of PDV/VAT and Principal. </p>
                    </article>
                    <button>
                    <a href="https://pdv-kalkulator.herokuapp.com/">See Live</a>
                    </button>
                </li>
                <li data-aos-once="true" data-aos="fade">
                    <img src={process.env.PUBLIC_URL + '/imgs/portfolio/poke.PNG'} alt="" />
                    <article>
                        <h3>Pokemon App</h3>
                        <small>(HTML CSS, VanillaJS, pokeApi)</small>
                        <p>Pokemon App serving to help others to learn pokemon weakness and adventages!</p>
                    </article>
                    <button><a href="https://jakobyousrii.github.io/">See Live</a></button>
                </li>
                <li data-aos-once="true" data-aos="fade">
                    <img src={process.env.PUBLIC_URL + '/imgs/portfolio/sea.PNG'} alt="" />
                    <article>
                        <h3>Sea Paradise (React App)</h3>
                        <small>(React.js, react-redux, hooks, firebase and more!)</small>
                        <p>Sea Paradise App has logic where any user can order some food by inserting the wanted amount and by clicking on add to cart button.</p>
                    </article>
                    <button>
                    <a href="https://seaparadiseapp.web.app/">See Live</a>
                    </button>
                </li>
            </ul>
        </article>
        <hr className={classes.hrLine}/>
    </section>
})

export default Portfolios;