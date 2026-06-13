import React from "react";
import styles from "./Certificate.module.css";

export const Certificate = () => {
  return (
    <section className={styles.container} id="certificates">
      <h2 className={styles.title}>Certifications & Achievements</h2>

      <div className={styles.content}>
        <ul className={styles.certificateItems}>
          <li className={styles.certificateItem}>
            <div className={styles.certificateText}>
              <h3>Leetcode Badges</h3>
              <p>
                Leetcode
                <a href="https://leetcode.com/u/Gayatri_Kolhapure/">(View)</a>
              </p>
            </div>
          </li>

          <li className={styles.certificateItem}>
            <div className={styles.certificateText}>
              <h3>NPTEL Certification</h3>
              <p>
                The Joy of Computing using Python{" "}
                <a href="https://drive.google.com/file/d/1v0eFHqlFALEuBCBenPtIYeq5pNXYgs5S/view?usp=drive_link">
                  (View)
                </a>
              </p>
              <p>Issued by: IIT Madras</p>
              <p>
                Cryptography and Network Security{" "}
                <a href="https://drive.google.com/file/d/1N724Lx91CkrUuuvsibYB-qTCxyD0lFyn/view?usp=drive_link">
                  (View)
                </a>
              </p>
              <p>Issued by: IIT Kharagpur</p>
            </div>
          </li>

          <li className={styles.certificateItem}>
            <div className={styles.certificateText}>
              <h3>Java Certification</h3>
              <p>
                Completed a Data Structures and Algorithms course in Java,
                building a strong foundation in problem-solving, algorithmic
                thinking, and efficient coding practices.{" "}
                <a href="https://drive.google.com/file/d/1b48wpmcRQuOEoYt9g71pXJW5fx-wrS8t/view?usp=drive_link">
                  (View)
                </a>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
