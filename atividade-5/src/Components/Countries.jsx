import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import './Countries.css';

const url = 'https://restcountries.com/v3.1/all';

export default function Countries(){
    const [countries,setCountries] = useState([]);

    const fetchCountryData = async ()=>{
        const response = await fetch(url);
        const countries = await response.json();
        setCountries(countries)
        console.log(countries)
    }

    useEffect(()=>{
        fetchCountryData()
    },[])

    return (
       <section className="area">
        {countries.map((country,numericCode)=>{
            const {name,
                population,
                region,
                subregion,
                capital,
                flags} 
                = country;

          return <article key={numericCode}>
                <div className="content-area">
                    <img src={flags.png} alt={name.common}/>
                    <div className="description">
                    <h4>{name.common}</h4>
                    <p> Capital - {capital}</p>
                    <p> Continent - {region}</p>
                    <p> Region - {subregion}</p>
                    <p> Population - <span>{population}</span></p>
                    <Link to={`/countries/${name.common}`}>More Details</Link>
                    </div>
                </div>
          </article>
        })}
       </section>
    )
}