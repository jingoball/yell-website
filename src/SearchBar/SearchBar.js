import React, { useState } from 'react';
import styles from './SearchBar.module.css';

export function SearchBar(props){
    const [term, setTerm] = useState(props.term || '');
    const [location, setLocation] = useState(props.location || '');

    //create a function upon submitting
    function submit(e){
        if(typeof props.search === 'function'){
            props.search(term, location);
        }
        console.log(term, location);
        e.preventDefault();  // prevent the browser to make ajax called to the server
    }

    const sizeClass = props.small ? '' : 'is-medium';
    return(
        <form onSubmit={submit}>
            <div className="field has-addons">
            <p className="control">
                <button className={`button is-static ${sizeClass}`}>
                Search
                </button>
            </p>
            <p className="control">
                <input className={`input ${sizeClass} ${styles['input-control']}`} 
                onChange = {(e) => setTerm(e.target.value)}
                type="text" 
                placeholder="burgers, barbers, spas, plumber...">
                
                </input>
            </p>
            <div className="control">
                <div className={`button is-static ${sizeClass}`}>
                Near
                </div>
            </div>
            <p className="control">
                <input className={`input ${sizeClass} ${styles['input-control']}`} 
                onChange = {(e) => setLocation(e.target.value)}
                type="text" 
                placeholder="where...">
                
                </input>
            </p>
            <div className={`button ${sizeClass} ${styles['search-button']}`} onClick={submit}>
                <span className={`icon is-small ${styles['search-icon']}`}>
                <i className="fas fa-search"></i>
                </span>
            </div>
            </div>
        </form>
    );
}