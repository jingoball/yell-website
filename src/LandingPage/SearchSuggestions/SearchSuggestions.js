import React from 'react';
import styles from './SearchSuggestion.module.css';

export function SearchSuggestions(){
    return(
        <div className={styles.suggestions}>
            <span className="icon is-small"><i className="fas fa-utensils"></i></span>
            <span className={styles.suggestion_text}>Dining</span>
            <span className="icon is-small"><i className="fas fa-coffee"></i></span>
            <span className={styles.suggestion_text}>Cafe</span>
            <span className="icon is-small"><i className="fab fa-servicestack"></i></span>
            <span className={styles.suggestion_text}>Services</span>
            <span className="icon is-small"><i className="fas fa-shipping-fast"></i></span>
            <span className={styles.suggestion_text}>Delivery Service</span>
        </div>
    );
}