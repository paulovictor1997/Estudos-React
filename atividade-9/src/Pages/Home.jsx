import React, {useState} from 'react';
import "./Home.css";
import CountryArea from '../componentes/CountryArea';

export default function Home () {
    
    const [searchfield, setSearchField] = useState('');
    const [countries, setCountries] = useState([]);

    const filteredCountries = countries.filter(c => c.name.toLowerCase().includes(searchfield.toLowerCase()))
    console.log(filteredCountries.value)

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

        <CountryArea countries = {filteredCountries}/>
        
    </>  
    )
}