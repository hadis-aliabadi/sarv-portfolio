import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { HiLocationMarker, HiPhoneMissedCall } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import styles from './Contact.module.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_lpbksue", "template_221pg6k", form.current, "y0PokTnfCZ3bxxHHH")
            .then((result) => {
                console.log(result.text);
                console.log('Message sent')
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className={styles.container} id='contact'>
            <h2 className={styles.title}>Contact Me</h2>
            <div className={styles.contact}>
                
                <div className={styles.cardBody}>
                  
                        <form ref={form} onSubmit={sendEmail} className={styles.form} data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1000">
                            <div className={styles.formControl}>
                                <label >
                                    <span >Name</span>
                                </label>
                                <input type="text" name="user_name" placeholder='Your Name' className={styles.formInput} required />
                            
                                <label >
                                    <span >Email</span>
                                </label>
                                <input type="email" name="user_email" placeholder='Your Name' className={styles.formInput} required />
                                <label >
                                    <span >Message</span>
                                </label>
                                <textarea name="message" placeholder='Your Message' required />
                                <button >Send Message</button>
                            </div>    
                        </form>
                    
                </div>
                
                    <div className={styles.contactInfo}>
                        <h1 className={styles.infoTitel}>Contact Info</h1>
                        <p className={styles.infoText}>
                            <HiLocationMarker  />
                            Iran, Kerman
                        </p>
                        <p className={styles.infoText}>
                            <HiPhoneMissedCall  />
                            Phone:+989150351181
                        </p>
                        <p className={styles.infoText}>
                            <MdEmail  />
                            hadis.eslami73@gmail.com</p>
                    </div>
                    
                
            </div>
        </div>
    );
};

export default Contact;