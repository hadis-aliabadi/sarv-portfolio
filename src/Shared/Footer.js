import React from 'react';
import styles from "./Footer.module.css"
import { SiLinkedin} from 'react-icons/si';
import { BsGithub} from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.footerText}>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
            <div className={styles.links}>
               
                <div className={styles.linkedIn}><a href="https://www.linkedin.com/in/hadis-slm" ><SiLinkedin className={styles.SiLinkedin} /></a></div>
              <div className={styles.github}> <a href="https://github.com/hadis73" ><BsGithub  className={styles.BsGithub}/></a></div>

            </div>
        </footer>
    );
};

export default Footer;