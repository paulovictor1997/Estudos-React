import { useState, useMemo, useEffect } from 'react';
import { BiError } from 'react-icons/bi';
import "./Home.css";
import CountryArea from '../componentes/CountryArea';
import FilterByRegion from '../componentes/FilterByRegion';
import Loader from '../componentes/Loader';

export default function Home() {
  const [countries, setCountries] = useState([])
  const [searchfield, setSearchField] = useState('')
  const [isLoading, setLoading] = useState(false)

  const countriesToRender = useMemo(() => {
    return countries.filter(c =>
      c.name.common.toLowerCase().includes(searchfield.toLowerCase())
    );
  }, [searchfield, countries])

  const loadUser = async () => {
    setLoading(true);
    const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital');
    const data = await response.json();
    setCountries(data)
    setLoading(false)
  };

  useEffect(() => {
    loadUser()
  }, [])

  return (
    <>
      <nav>
        <form className='search-country' autoComplete='off'>
          <input
            type="search"
            name='search'
            id='search'
            placeholder='Search for a country'
            onChange={(e) => setSearchField(e.target.value)}
          />
        </form>

        <FilterByRegion setCountries={setCountries} />
      </nav>

      {isLoading && <Loader />}

      {!isLoading && countriesToRender.length === 0 ? (
        <div className="not-found-message">
          <BiError className="error-icon" />
          <p>There is no country with this name.</p>
        </div>
      ) : (
        <CountryArea countries={countriesToRender} setCountries={setCountries} loadUser={loadUser} />
      )}
    </>
  );
}
