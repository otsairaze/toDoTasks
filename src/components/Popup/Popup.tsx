import React from "react";
import styles from "./Popup.module.css";
import { Input } from "../Input/Input";
import Button from "../Button/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setOpen } from "../../store/reducers/popup";
import close from "../../../public/Popup/close.png";
import Object from "../Input/date.json";

export const Popup: React.FC = () => {
  const dispatch = useAppDispatch();
  const { open, value } = useAppSelector((state) => state.popup);

  return (
    <>
      {!!open && (
        <>
          {value === 0 && (
            <div className={styles.overlay}>
              <div className={styles.popup}>
                <div className={styles.text}>
                  <p>Регистрация</p>
                </div>
                <div className={styles.input}>
                  {Object.map((obj) => (
                    <Input holder={obj.holder} set={obj.set} />
                  ))}
                </div>
                <div className={styles.btn}>
                  <Button />
                </div>
                <img
                  className={styles.img}
                  onClick={() => dispatch(setOpen(false))}
                  src={close}
                  alt="Закрыть"
                />
              </div>
            </div>
          )}

          {value === 1 && (
            <div className={styles.overlay}>
              <div className={styles.popup}>
                <div className={styles.text}>
                  <p>Авторизация</p>
                </div>
                <div className={styles.input}>
                  {Object.map((obj) => (
                    <Input holder={obj.holder} set={obj.set} />
                  ))}
                </div>
                <div className={styles.btn}>
                  <Button />
                </div>
                <img
                  className={styles.img}
                  onClick={() => dispatch(setOpen(false))}
                  src={close}
                  alt="Закрыть"
                />
              </div>
            </div>
          )}

          {value === 2 && <div></div>}
        </>
      )}
    </>
  );
};
