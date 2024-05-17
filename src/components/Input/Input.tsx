import React from "react";
import styles from "./Input.module.css";
import Object from "./date.json";

export const Input = ({ set, holder, email }) => {
  return (
    <>
      <div className={styles.inner}>
        <input
          className={styles.input}
          text={email}
          type={set}
          placeholder={holder}
        />
      </div>
    </>
  );
};
