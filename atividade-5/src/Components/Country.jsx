import React, {useEffect,useState} from "react";
import { Link,useParams } from "react-router-dom";
import {FaArrowLeft} from 'react-icons/fa';

import './Country.css';

export default function Country(){
    const [country,setCountry] = useState([]);
    const {name} = useParams()

    useEffect(()=>{
        const fetchCountryData = async()=>{
            const response = await fetch (`https://restcountries.com/v3.1/name/${name}`);
            const country = await response.json()
            setCountry(country)
        }    

        fetchCountryData()
    },[])

    return(
        <div className="country-component">
            <div className="buttonBack">
                <Link to='/'><FaArrowLeft/>Back</Link>
            </div>

            <div className="modal-content">
                <h1>Country Data</h1>
            </div>
        </div>
    )
}

