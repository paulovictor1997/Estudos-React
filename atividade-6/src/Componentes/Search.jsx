import React from 'react';
import './Search.css';

export default function Search(){
    return(
        <nav>
            <form className='search-country' autoComplete='off'>
                <input type="search" 
                name='search' 
                id='search' 
                placeholder='Search for a country'  />
            </form>

            <div className="select-country">
                <select name="select" id="select">
                    <option value="Filter by region">Filter by region</option>
                    <option value="America">America</option>
                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>
                    <option value="Europa">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </nav>
    )
}