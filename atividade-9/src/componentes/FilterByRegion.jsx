import React from 'react';
import "../Pages/Home.css";

export default function FilterByRegion({setCountries}) {

    const regions = [
        {
            name:"Americas"
        },
        {
            name:"Africa"
        },
        {
            name:"Asia"
        },
        {
            name:"Europe"
        },
        {
            name:"Oceania"
        }

    ]

    
    const fetchCountryByRegion = async (region)=>{
        const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
        const data = await response.json();
        setCountries(data)
    }


    return (
        <>
         <div className="select-country">
            <select name="select" id="select" 
            value={regions.name}
             onChange={(e) => fetchCountryByRegion(e.target.value)}   
            >
                <option>Filter by region :</option>
                <option value="Americas" >Americas</option>
                <option value="Africa" >Africa</option>
                <option value="Asia" >Asia</option>
                <option value="Europe" >Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
        </>
    )
}

