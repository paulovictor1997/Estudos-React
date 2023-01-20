import React, {useState} from 'react';
import "./Home.css";
import CountryArea from '../componentes/CountryArea';


export default function Home ({ onSelect }) {
    
    const [searchfield, setSearchField] = useState('');

    const selectHandler = (e) => {
        const regionName = e.target.value;
       // onSelect(regionName);
       //Tentar usando o useState
       console.log(regionName)
      };

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

            <div className="select-country" onChange={selectHandler}>
                <select name="select" id="select">
                    <option>Filter by region</option>
                    <option value="America">America</option>
                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>
                    <option value="Europa">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </nav>

        <CountryArea searchfield={searchfield}/>
        
    </>  
    )
}