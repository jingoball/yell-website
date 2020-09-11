import React from 'react';
import { SubNavItems } from './SubNavItems/SubNavItems';
import styles from './SubNav.module.css';

export function SubNav(){
    return(
        <div className={styles.container}>
            <div className={styles['sub-nav']}>
            <div>
            <SubNavItems label='Restaurant' icon='fas fa-utensils'/>
            <SubNavItems label='Home Services' icon='fas fa-toolbox'/>
            <SubNavItems label='Auto Servicess' icon='fas fa-car-side'/>
            <SubNavItems label='More' icon='fas fa-plus-square' showRightBorder/>
            </div>
            
            <div>
            <button className={`button ${styles['subnav-button']} ${styles['omit-right-border']}`}>
                <span className="icon">
                <i className="fas fa-pen"/>
                </span>
                <span>Write a Review</span>
            </button>
            <button className={`button ${styles['subnav-button']}`}>
                <span className="icon">
                <i className="fas fa-building"/>
                </span>
                <span>For Businesses</span>
            </button>
            </div>
            
        </div>
        </div>
        
    );

}