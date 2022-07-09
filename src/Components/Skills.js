import React from 'react';
import styles from "./Skills.module.css";
import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {
    return (
        <div className={styles.container} di='skills'>
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.progressbar}>
                
                <ProgressBar completed={90} className={styles.bars} customLabel="JavaScript" />
                <ProgressBar completed={70} customLabel="React"className={styles.bars} />
                <ProgressBar completed={70} customLabel="Python"className={styles.bars} />
                <ProgressBar completed={90} customLabel="HTML"className={styles.bars} />
                <ProgressBar completed={85} className={styles.bars} customLabel="CSS" />
                
            </div>
        </div>
    );
};

export default Skills;