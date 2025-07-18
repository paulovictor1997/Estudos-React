import { useEffect } from "react";
import "./CountryArea.css";
import { Link } from "react-router-dom";


export default function CountryArea({countries,setCountries}){  


    const fetchCountryData = async ()=>{
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,flags');
        const countries = await response.json();
        setCountries(countries)
        console.log(countries)
    }

    useEffect(()=>{
        fetchCountryData()
    },[])


    return(
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
                    <p> Population - <span>{population.toLocaleString()}</span></p>
                    <Link to={`/countries/${name.common}`}>More Details</Link>
                    </div>
                </div>
          </article>
        })}
       </section>
    )
    
}
