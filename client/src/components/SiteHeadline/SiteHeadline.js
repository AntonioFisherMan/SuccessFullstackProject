import React from "react";
import styles from "./SiteHeadline.module.css";

const SiteHeadline = props => {
  return (
    <div className={styles.headlineBlock}>
      <p>{props.text}</p>
    </div>
  );
};

export default SiteHeadline;
