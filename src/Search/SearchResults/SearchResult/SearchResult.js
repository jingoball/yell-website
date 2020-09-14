import React from 'react';
import { BusinessRating } from '../../../BusinessRating/BusinessRating';
import styles from './SearchResult.module.css';

export function SearchResult(){
    return(
        <div className={styles['search-result']}>
            <img className={styles['business-image']} src='https://via.placeholder.com/210' alt='business image'/>
            <div className={styles['business-info']}>
                <h2 className="subtitle">Burger Place</h2>
                <BusinessRating/>
                <p>$$  <span className="tag">Burgers</span>  <span className="tag">Fast Food</span>  </p>
            </div>
            <div className={styles['contact-info']}>
                <p>+60123123457</p>
                <p>Example Street 6</p>
                <p>50480 Kuala Lumpur</p>
            </div>
            
        </div>
    );
}