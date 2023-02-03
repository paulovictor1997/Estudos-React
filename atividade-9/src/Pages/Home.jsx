import React, {useState,useMemo} from 'react';
import "./Home.css";
import CountryArea from '../componentes/CountryArea';
import FilterByRegion from '../componentes/FilterByRegion';

export default function Home () {
    
    const [countries,setCountries] = useState([]);
    const [searchfield, setSearchField] = useState('');

    const countriesToRender = useMemo(()=>{
        return countries.filter(c => c.name.common.toLowerCase().includes(searchfield.toLowerCase()))
    },[searchfield, countries])
 
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

            <FilterByRegion setCountries={setCountries}/>
            
        </nav>

        <CountryArea countries={countriesToRender} setCountries={setCountries}/>
        
    </>  
    )
}