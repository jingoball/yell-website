import React from 'react';
import { TopNav } from './TopNav/TopNav';
import logo from '../assets/yell_icon4.png';
import styles from './LandingPage.module.css';

export function LandingPage(){
    return(
        <div>
            <TopNav/>
            <img src={logo} className={styles.logo}  alt='logo'/>
        </div>
    );
}