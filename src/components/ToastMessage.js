// Toast.js

import React, { useState, useEffect } from 'react';
import styles from './ToastMessage.module.scss'; 


const Toast = ({ title = '', message = '', type = 'info', duration = 3000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const autoRemoveId = setTimeout(() => {
      setVisible(false);
    }, duration + 1000);

    return () => {
      clearTimeout(autoRemoveId);
    };
  }, [duration]);

  const handleClose = () => {
    setVisible(false);
  };

  const icons = {
    success: 'check_circle',
    error: 'error',
    warning: 'error',
    info: 'info',
  };
  const icon = icons[type];
  const delay = (duration / 1000).toFixed(2);

  return (
    <>
      {visible && (
        <div className={`${styles.toast} ${styles[`toast--${type}`]}`} style={{animation: `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`}}>
          <div className={styles.toast__icon}>
            <i className="material-icons">{icon}</i>
          </div>
          <div className={styles.toast__body}>
            <h3 className={styles.toast__title}>{title}</h3>
            <p className={styles.toast__msg}>{message}</p>
          </div>
          <div className={styles.toast__close} onClick={handleClose}>
            <i className="material-icons">close</i>
          </div>
        </div>
      )}
    </>
  );
};

export default Toast;
