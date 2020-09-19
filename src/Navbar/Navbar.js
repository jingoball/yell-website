import React from 'react';
import logo from '../assets/yell.png';
import styles from './Navbar.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';


export function Navbar(props){
    

    return(
        <div className={styles['nav-bar']}>
            <Link to='/'><img src={logo} className={styles.logo} alt='yelp logo'></img></Link>
            <SearchBar small term={props.term} location={props.location} search={props.search}/>
            <button className={`button ${styles['nav-button']}` }>Sign In</button>
            <button className={`button ${styles['nav-button']}` }>Register</button>
        </div>
        
    );
}