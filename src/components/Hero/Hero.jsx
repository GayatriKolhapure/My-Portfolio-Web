import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Gayatri</h1>
        <h3 className={styles.subtitle}>a Full Stack Java Developer</h3>
        <p className={styles.description}>
          Full Stack Java Developer skilled in Java, Spring Boot,
           React.js, MySQL, REST APIs, JWT Authentication, Hibernate, 
           JDBC, HTML, CSS, JavaScript, Git, and Docker. 
           Strong understanding of Core Java, OOPs, Data Structures and 
           Algorithms, Database Management Systems, and Software Engineering 
           principles. Experienced in developing full-stack web 
          applications and eager to contribute to innovative software solutions.
        </p>
        <a href="assets/GayatriKolhapure-Resume.pdf" download className={styles.downloadBtn}>
          Download Resume
        </a>
      </div>
      <img
        src="assets/gayatriProfile.png"
        alt="Profile Image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
