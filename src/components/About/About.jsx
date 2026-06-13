import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>

      <div className={styles.content}>
        {/* Existing About Items */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
                Full Stack Java Developer skilled in Java, Spring Boot,
                React.js, MySQL, REST APIs, JWT Authentication, Hibernate, JDBC,
                HTML, CSS, JavaScript, Git, and Docker. Strong understanding of
                Core Java, OOPs, Data Structures and Algorithms, Database
                Management Systems, and Software Engineering principles.
                Experienced in developing full-stack web applications and eager
                to contribute to innovative software solutions.
              </p>
            </div>
          </li>
        </ul>

        <div className={styles.educationBox}>
          <h3 className={styles.educationHeading}>Education</h3>
          <ul className={styles.educationItems}>
            <li className={styles.educationItem}>
              <div className={styles.educationText}>
                <h3>B.E. in Computer Science Engineering</h3>
                <p>2022 – 2026 • Sharad Institute of Technology,Yadrav</p>
              </div>
            </li>

            <li className={styles.educationItem}>
              <div className={styles.educationText}>
                <h3>Higher Secondary Eduation(HSC) – Science</h3>
                <p>2020 – 2022 • Miraj Mahavidyalaya, Miraj</p>
              </div>
            </li>

            <li className={styles.educationItem}>
              <div className={styles.educationText}>
                <h3> Secondary Education(SSC) </h3>
                <p>2019 – 2020 • New English School, Narwad</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
