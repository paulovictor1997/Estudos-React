import React, {useState} from 'react';
import "./Home.css";
import CountryArea from '../componentes/CountryArea';


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

            <div className="select-country">
                <select name="select" id="select">
                    <option>Filter by region</option>
                    <option value="Americas" >America</option>
                    <option value="Africa" >Africa</option>
                    <option value="Asia" >Asia</option>
                    <option value="Europe" >Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </nav>

        <CountryArea searchfield={searchfield}/>
        
    </>  
    )
}