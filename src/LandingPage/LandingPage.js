import React from 'react';
import { TopNav } from './TopNav/TopNav';
import logo from '../assets/yell_icon4.png';
import styles from './LandingPage.module.css';
import { SearchBar } from '../SearchBar/SearchBar';

export function LandingPage(){
    return(
        <div>
            <TopNav/>
            <img src={logo} className={styles.logo}  alt='logo'/>
            <SearchBar/>
        </div>
    );
}