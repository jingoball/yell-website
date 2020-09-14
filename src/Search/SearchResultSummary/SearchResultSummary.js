import React from 'react';
import { Search } from '../Search';
import styles from './SearchResultSummary.module.css';


export function SearchResultSummary(props){
    return(
        
        <div className={styles.container}>
            <div className={styles['search-summary']}>
            <h1 className="subtitle"><strong>{props.term}</strong> @ {props.location}</h1>
                <p>Showing 1-20 out of 420 results</p>
            </div>
            <div className={styles.filters}>
            <button className="button">
                <span className="icon">
                <i className="fas fa-sliders-h"></i>
                </span>
                <span>All filters</span>
            </button>

            <div className="buttons has-addons">
                <button className="button">$</button>
                <button className="button">$$</button>
                <button className="button">$$$</button>
                <button className="button">$$$$</button>
            </div>

            <button className="button">
                <span className="icon">
                <i className="fas fa-clock"></i>
                </span>
                <span>Open Now</span>
            </button>
            <button className="button">
                <span className="icon">
                <i className="fas fa-dollar-sign"></i>
                </span>
                <span>Cashback</span>
            </button>
            </div>
        </div>
        
    );
}