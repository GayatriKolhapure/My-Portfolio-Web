import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel Free to Reach Out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="assets/telephone.png" alt="Phone icon" />
          <p>9699756907</p>
        </li>
        <li className={styles.link}>
          <img src="assets/emailIcon.png" alt="Email icon" />
          <a href="mailto:kgayatri1604@gmail.com">
            kgayatri1604@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img src="assets/linkedinIcon.png" alt="Linkedin icon" />
          <a href="https://www.linkedin.com/in/gayatri-kolhapure-02557529a/">
            linkedin.com/gayatriKolhapure
          </a>
        </li>
        <li className={styles.link}>
          <img src="assets/githubIcon.png" alt="Github icon" />
          <a href="https://github.com/GayatriKolhapure/">
            github.com/gayatriKolhapure
          </a>
        </li>
        <li className={styles.link}>
          <img src="assets/3d-map.png" alt="location icon" />
          <p>Miraj,India</p>
        </li>
      </ul>
    </footer>
  );
};
