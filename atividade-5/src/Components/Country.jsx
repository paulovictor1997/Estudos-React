import React, {useEffect,useState} from "react";
import { Link,useParams } from "react-router-dom";
import {FaArrowLeft} from 'react-icons/fa';

import './Country.css';

export default function Country(){
    const [country,setCountry] = useState([]);
    const {name} = useParams();

    useEffect(()=>{
        const fetchCountryData = async()=>{
            const response = await fetch (`https://restcountries.com/v3.1/name/${name}`);
            const country = await response.json()
            setCountry(country);
        }    

        fetchCountryData();
    },[])

    return(
        <div className="country-component">
            <div className="buttonBack">
                <Link to='/'><FaArrowLeft/>Back</Link>
            </div>

            <div className="modal-content">
              {country.map((c,numericCode)=>{
                const {
                    flags,
                    name,
                    population,
                    region,
                    subregion,
                    capital,
                    altSpellings,
                    tld,
                    area,
                } 
                    = c;
                return(
                    <article key={numericCode}>
                        <div className="flag">
                            <img src={flags.png} alt={name.common} />
                            <h3>{name.common}</h3>
                        </div>

                        <div className="modal-details">
                            <div className="content-area">
                                <div className="details-area">
                                    <div className="area-1">
                                        <p>Population : {population}</p>
                                        <p>Region : {region}</p>
                                        <p>Oficial : {altSpellings[1]}</p>
                                    </div>
                                    <div className="area-2">
                                        <p>Subregion : {subregion}</p>
                                        <p>Capital : {capital}</p>
                                        <p>Top Level Domain : {tld}</p>
                                        <p>Area: {area}</p>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </article>
                )
              })} 
            </div>
        </div>
    )
}

