import React from 'react';
import styles from "./Project.module.css"



const Project = ({ project }) => {
    const {  name, url, img, codeLink,des } = project;

   
    return (
        <div className={styles.container} data-aos="fade-up" data-aos-offset="200" data-aos-duration="2000">
            
            <figure><img src={img} alt="project" className={styles.image} /></figure> 
            <h2 className={styles.cardtitle}>{name}</h2>
            <p>{des}</p>
                <div className="card-body">
                    <div className={styles.projectsitemlinks}>
                    <button className={styles.btn}> <a href={url} target="_blank" rel="noreferrer" >Demo</a></button>
                    <button className={styles.btn}> <a href={codeLink} target="_blank" rel="noreferrer">Code</a></button>
                       
                    </div>
                    
                    
                </div>
        </div>
    );
   
};

export default Project;