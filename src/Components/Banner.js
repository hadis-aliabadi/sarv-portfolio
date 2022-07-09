import React from 'react';
import styles from "./Banner.module.css"
import me from "../assets/image/Banner.png"
const Banner = () => {
    return (
        <div className={styles.header  }>
            <div className={styles.imagetext}>
                <div className={styles.text}>
                    <h1 className={styles.bigtext}><span className={styles.coloredtext}>F</span>rontend <span className={styles.coloredtext}>D</span>eveloper</h1>
                </div>
                
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={me} alt="front-end dev"/>
                </div>
                
            </div>
        </div>

    );
};

export default Banner;