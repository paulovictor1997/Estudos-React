import React from 'react';
import './Navbar.css';

export default function Search(){
    /*
    const [data,setData] = useState([]);

    const handleInputChange = (e) =>{
        e.preventDefault();
        const {value} = e.target;
        if(!value) return;

        const url = `https://restcountries.com/v3.1/name?q=${value}`; 
        
        fetch(url)
        .then((response) => response.json())
        .then(({data})=> setData(data));
       

    }
    console.log('data', data);
    */
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