import React, { useEffect } from 'react';
import About from './About';
import Banner from './Banner';
import Projects from './Projects';
import Contact from './Contact'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Skills from './Skills';
import styles from "./Home.module.css"

const Home = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className={styles.home}>
            <Banner />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </div>
    );
};

export default Home;