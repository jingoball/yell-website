import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { SubNav } from '../Navbar/SubNav/SubNav';
import { SearchResults } from './SearchResults/SearchResults';
import { SearchResultSummary } from './SearchResultSummary/SearchResultSummary';
import useReactRouter from 'use-react-router';
import {useBusinessSearch} from '../hooks/yelp-api/useBusinessSearch';



export function Search(){

    const {location} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const termParam = params.get('find_desc');
    const locationParam = params.get('find_loc');
    const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(termParam, locationParam);

    return(
        <div>
            <Navbar term={termParam} location={locationParam}/> 
            <SubNav/>
            <SearchResultSummary term={termParam} location={locationParam}/>
            <SearchResults businesses={businesses}/>
        </div>
        
    );
}