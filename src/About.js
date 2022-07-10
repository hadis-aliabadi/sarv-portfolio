import React from 'react';
import styles from "./About.module.css";
import profile from "../assets/image/me.png"

const About = () => {
    return (
        <div className={styles.container} id='about'>
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.aboutsection}>
                <div className={styles.left}>
                    <img src={profile} alt="frontene dev" className={styles.image} data-aos="fade-down" data-aos-offset="200" data-aos-duration="1000"  />
                </div>
                
                    <div className={styles.right} data-aos="fade-right" data-aos-offset="200" data-aos-duration="1000"  >
                        <div className={styles.aboutme}>
                            My Name is Hadis Eslami. I love to learn new Techology.My goal is try to become a professional software developer. In that case, I'm learning technology meticulously. Also trying to up-to-date my technological skills.

                        </div>
                        <div className={styles.btn}>
                            <button className={styles.btnResume}><a href='https://drive.google.com/file/d/11PodhWxZY6bM2Md5X5sFOdT96NPUyyPd/view?usp=sharing' target="_blank" rel="noreferrer" className={styles.resume}>Download Resume</a></button>

                        </div>
                    </div>
                
                
                
            </div>
             
        </div>
    );
};

export default About;