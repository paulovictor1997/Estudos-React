import React, {useState} from 'react';
import "./Home.css";
import CountryArea from '../componentes/CountryArea';
import FilterByRegion from '../componentes/FilterByRegion';

export default function Home () {
    
    const [searchfield, setSearchField] = useState('');
 
    return(
    <>
        <nav>
            <form className='search-country' autoComplete='off'>
                <input type="search" 
                name='search' 
                id='search' 
                placeholder='Search for a country'
                onChange={(e) => setSearchField(e.target.value)}
                />
            </form>

            <FilterByRegion filterRegion={FilterByRegion} />
            
        </nav>

        <CountryArea searchfield={searchfield}/>
        
    </>  
    )
}