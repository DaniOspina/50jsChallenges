import React from 'react';
import Card from '../card/Card';
import {data} from '../../data/data';
import styles from './gallery.module.css';

const Gallery = () => {
    return (
        <div className={styles.gallery}>
            {data.map((item,id) =>{
                return(
                    <Card item={item} key={id} />
                )
            })}
        </div>
    )
}

export default Gallery
