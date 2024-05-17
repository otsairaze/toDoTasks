import React from "react";
import "../../assets/styles/global.css";
import styles from "./Header.module.css";
import { useAppDispatch } from "../../store/hooks";
import { setValue, setOpen } from "../../store/reducers/popup";

import Images from "./date.json";

export const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <div className={styles.logo}>
            <p className={styles.text}>ToDoTasks</p>
          </div>

          <div className={styles.icon}>
            {Images.map((obj, id) => (
              <a
                href="#!"
                onClick={() => {
                  dispatch(setValue(id));
                  dispatch(setOpen(true));
                }}
              >
                <img className={styles.imageUrl} src={obj.imageUrl} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
