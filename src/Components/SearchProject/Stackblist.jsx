import React from 'react';
import styles from './Stackblist.module.css';

const Stackblist = ({ buttons }) => {
    return (
        <div className={styles.buttonContainer}>
            {buttons.map((buttonText, index) => (
                <button key={index} className={styles.button}>
                    {buttonText}
                </button>
            ))}
        </div>
    );
};

export default Stackblist;
