import React from 'react';
import logo from '../assets/logo3.png';
import styles from './Navbar.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';


export function Navbar(){
    return(
        <div className={styles['nav-bar']}>
            <Link to='/'><img src={logo} className={styles.logo} alt='yelp logo'></img></Link>
            <SearchBar small/>
            <button className={`button ${styles['nav-button']}` }>Sign In</button>
            <button className={`button ${styles['nav-button']}` }>Register</button>
        </div>
        
    );
}