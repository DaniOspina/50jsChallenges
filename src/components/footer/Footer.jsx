import React from 'react';
import styles from './footer.module.css';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
    return (
    <div className={styles.footer}>
        @Desarrollado por Daniela Ospina Sarmiento
        <a href={'https://github.com/DaniOspina'}>
        <div className={styles.icon}>
        <GitHubIcon />
        </div>
        </a>
      
    </div>
    )
}

export default Footer
