import React from 'react';
import styles from './card.module.css';

const Card = ({item}) => {
    return (
        <>
        <div className={styles.card}>
            <iframe className={styles.item} src={item.src} title={item.title} scrolling="no"></iframe>
                    <h3 className={styles.title}>{item.title}</h3>
                    <a class={styles.button}href={item.src}>
                    <div class={styles.button}>Ver más</div>
                    </a>
        </div>
        </>
    )
}

export default Card

