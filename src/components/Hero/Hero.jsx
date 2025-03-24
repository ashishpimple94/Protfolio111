import React from "react";

import styles from "./Hero.module.css";
import heroimage from "/assets/hero/heroiamage1.jpeg";
// import { motion } from "framer-motion";
import {ReactTyped}from "react-typed"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ashish</h1>
        {/* <div className="fade-in">Hello, world!</div> */}
  
    {/* <motion.h1 
      initial={{ opacity: 0, y: -40 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      className="text-4xl font-bold text-blue-500"
    >
  
      
    <h1> I'm a FrontEnd Developer</h1> 
    </motion.h1> */}
  
  <ReactTyped
          style={{ fontSize: "40px", fontWeight: 400 }}
          strings={["  i ' m Programmer", "Developer", "Coder"]}
          typeSpeed={29}
          backSpeed={35}
          loop
       ReactTyped/>

        <p className={styles.description}>
          <br/>
          <br/> 
          To work in a firm with a professional work driven
          environment where I can utilize and apply my
          knowledge, skills which would enable me to grow while
          fulfilling organization goals.
          Reach out if you'd like to learn more!
        </p>
        <a href="ashishpimple94@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={heroimage}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
export default Hero;