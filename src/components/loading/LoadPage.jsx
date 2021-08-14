import React from 'react';
import styles from './LoadPage.module.css';
import LoadingGif from './../../assets/images/loader.gif'
const LoadPage = () => {
    return (
        <div className={styles.container}>
            <img src={LoadingGif} alt="loading..."/>
        </div>
    );
}

export default LoadPage;
