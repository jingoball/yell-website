import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { SubNav } from '../Navbar/SubNav/SubNav';
import { SearchResults } from './SearchResults/SearchResults';
import { SearchResultSummary } from './SearchResultSummary/SearchResultSummary';

export function Search(){
    return(
        <div>
            <Navbar/> 
            <SubNav/>
            <SearchResultSummary/>
            <SearchResults/>
        </div>
        
    );
}