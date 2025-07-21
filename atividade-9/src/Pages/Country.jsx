import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./Country.css";

export default function Country() {
    const [country, setCountry] = useState([]);
    const [borderCountries, setBorderCountries] = useState([]); // Estado para os nomes das fronteiras
    const { name } = useParams();

    useEffect(() => {
        const fetchCountryData = async () => {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
                if (!response.ok) throw new Error("Country not found");
                const country = await response.json();
                setCountry(country);

                // Buscar nomes completos das fronteiras
                const borders = country[0].borders; // Pega as fronteiras do primeiro país
                if (borders) {
                    const borderResponse = await fetch(
                        `https://restcountries.com/v3.1/alpha?codes=${borders.join(",")}`
                    );
                    const borderData = await borderResponse.json();
                    setBorderCountries(borderData.map(border => border.name.common)); // Armazena os nomes
                    console.log(borderCountries)
                } else {
                    setBorderCountries([]); // Nenhuma fronteira
                }
            } catch (error) {
                console.error(error.message);
                setCountry([]);
                setBorderCountries([]);
            }
        };

        fetchCountryData();
    }, []);

    return (
        <>
            <div className="country-component">
                <div className="buttonBack">
                    <Link to="/"><FaArrowLeft /> Back</Link>
                </div>
                <div className="modal-content">
                    {country.map((c) => {
                        const {
                            flags,
                            name,
                            population,
                            region,
                            subregion,
                            capital,
                            altSpellings,
                            tld,
                            area
                        } = c;

                        return (
                            <article key={c.cca3}>
                                <div className="flag">
                                    <img src={flags.png} alt={name.common} />
                                    <h3>{name.common}</h3>
                                </div>

                                <div className="modal-details">
                                    <div className="content-area">
                                        <div className="details-area">
                                            <div className="area-1">
                                                <p>Population: {population.toLocaleString()}</p>
                                                <p>Region: {region}</p>
                                                <p>Subregion: {subregion}</p>
                                                <p>Official: {altSpellings[1]}</p>
                                            </div>
                                            <div className="area-2">
                                                <p>Capital: {capital}</p>
                                                <p>Top Level Domain: {tld}</p>
                                                <p>Area: {area.toLocaleString()}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
                <div className="borders">
                    Borders Countries : 
                        {borderCountries.length > 0 ? (
                            <ul>
                                {borderCountries.map((borderName, index) => (
                                    <li key={index}>{borderName}</li>))}
                            </ul>
                                ) : ( <span>This country does not share borders with others</span> )}
                </div>
            </div>
        </>
    );
}