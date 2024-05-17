import React from "react";
import styles from "../assets/styles/style.module.css";

import { Header } from "../components/Header/Header";
import { Popup } from "../components/Popup/Popup";

export const Home = () => {
  return (
    <>
      <Popup />
      <Header />
      <div className="container">
        <p className={styles.text}>
          <span className={styles.span}>Зарегистрируйтесь</span> для
          взаимодействия <span className={styles.emoji}>😒</span> с ToDoTasks
        </p>
      </div>
    </>
  );
};
