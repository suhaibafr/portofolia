import React from "react";
import styles from "./footer.module.css";

const Clients = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.foot}>
          <div className={styles.v1}></div>
          <h1>Portofolia</h1>
          <p>
            About | Portfolio | Contact <br/> NY / +1 123456 7890 /
            hello@graphics.studio.com
          </p>
        </div>
        

    <div className={styles.social}>
    <div className={styles.social_wrap}>
    <div className={styles.social_icon}>
        <img src={"/images/behance.png"} alt="icon"/>
    </div>
    <div className={styles.social_icon}>
        <img src={"/images/dribbble.png"} alt="icon"/>
    </div>
    <div className={styles.social_icon}>
        <img src={"/images/insta.png"} alt="icon"/>
    </div>
    <div className={styles.social_icon}>
        <img src={"/images/linked in.png"} alt="icon"/>
    </div>
    <div className={styles.social_icon}>
        <img src={"/images/pinterest.png"} alt="icon"/>
    </div>
    </div>
    </div>











      </div>
    </div>
  );
};

export default Clients;
