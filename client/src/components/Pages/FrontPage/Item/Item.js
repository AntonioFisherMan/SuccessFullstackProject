import React from "react";
import styles from "./Item.module.css";

const Item = props => {
  return (
    <div className={styles.item}>
      <img src={props.img} alt="" />
      <h4>{props.headline}</h4>
      <p>{props.text}</p>
    </div>
  );
};

export default Item;
