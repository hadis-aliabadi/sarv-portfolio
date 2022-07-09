import React from 'react';
import Project from './Project';
import styles from "./Projects.module.css"
import shopping from "../assets/PIC/shopping-cart.png";
import calculator from "../assets/PIC/calculator.png";
import todo from "../assets/PIC/todo-list.png";
import weather from "../assets/PIC/weather-app.png";
import crypto from "../assets/PIC/crypto.png";
import form from "../assets/PIC/react-form.png";
import hangman from "../assets/PIC/hangman.png";
import clock from"../assets/PIC/clock.png"




const Projects = () => {
  
    const projects = [
        {
          "id": 1,
          "name": "Shopping Cart",
          "des": "Lorem ipsum dolor sit amet consectetur.",
          "img": shopping,
          "url": "https://shopping-cart-hadis73.vercel.app/products",
          "codeLink": "https://github.com/hadis73/shopping_cart"
        },
        {
          "id": 2,
          "name": "Crypto",
          "des": "Lorem ipsum dolor sit amet consectetur.",
          "img": crypto,
          "url": "https://crypto-hadis73.vercel.app",
          "codeLink": "https://github.com/hadis73/crypto"
        },
        {
          "id": 3,
          "name": "Todo App",
          "des": "Lorem ipsum dolor sit amet consectetur.",
          "img": todo,
          "url": "https://todo-list-hadis73.vercel.app",
          "codeLink": "https://github.com/hadis73/todo-list"
        },
        {
          "id": 4,
          "name": "Weather App",
          "des": "Lorem ipsum dolor sit amet consectetur.",
          "img": weather,
          "url": "https://weather-app-rose-nu.vercel.app",
          "codeLink": "https://github.com/hadis73/weather-app"
        },
        {
          "id": 5,
          "name": "Calculator",
          "des": "Lorem ipsum dolor sit amet consectetur.",
          "img": calculator,
          "url": "https://calculator-hadis73.vercel.app",
          "codeLink": "https://github.com/hadis73/calculator"
        },
        {
          "id": 6,
          "name": "Form Validation",
          "des": "Lorem ipsum dolor sit amet consectetur.",
          "img": form,
          "url": "https://react-form-gamma.vercel.app/signup",
          "codeLink": "https://github.com/hadis73/react_form"
        },
        {
          "id": 7,
          "name": "Clock",
          "des": "Lorem ipsum dolor sit amet consectetur.",
          "img": clock,
          "url": "https://clock-hadis73.vercel.app",
          "codeLink": "https://github.com/hadis73/clock"
        },
        {
          "id": 8,
          "name": "Hangman Game",
          "des": "Lorem ipsum dolor sit amet consectetur.",
          "img": hangman,
          "url": "https://hangman-hadis73.vercel.app",
          "codeLink": "https://github.com/hadis73/hangman"
        }
      ]
    return (
        
        <div className={styles.container} id='project'>
        
            <h2 className={styles.title}> Projects</h2>
            <div className={styles.cartcontainer}>
              <div className={styles.cart}>
                  {projects.map(project => <Project key={project.id} project={project}></Project>)}
              </div>
            </div>
        </div>
    );
};

export default Projects;