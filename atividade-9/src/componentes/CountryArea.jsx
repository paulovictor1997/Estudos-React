import { useState,useEffect,useMemo } from "react";
import "./CountryArea.css";
import { Link } from "react-router-dom";



const url = 'https://restcountries.com/v3.1/all';


export default function CountryArea({searchfield}){  

    const [countries,setCountries] = useState([]);

    const fetchCountryData = async ()=>{
        const response = await fetch(url);
        const countries = await response.json();
        setCountries(countries)
        //console.log(countries)
    }

    useEffect(()=>{
        fetchCountryData()
    },[])

    const countriesToRender = useMemo(()=>{
        return countries.filter(c => c.name.common.toLowerCase().includes(searchfield.toLowerCase()))
    },[searchfield, countries])

    return(
        <section className="area">
        {countriesToRender.map((country,numericCode)=>{
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
                    <p> Population - <span>{population.toLocaleString()}</span></p>
                    <Link to={`/countries/${name.common}`}>More Details</Link>
                    </div>
                </div>
          </article>
        })}
       </section>
    )
    
}
