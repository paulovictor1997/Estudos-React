import React from "react";
import styles from './Load.module.css';
import loading from '../../img/Loading.png';

export default function Load(){
    return(
        <div className={styles.loader_container}>
            <img className ={styles.loader}src={loading} alt="Loading" />
        </div>
    )
}