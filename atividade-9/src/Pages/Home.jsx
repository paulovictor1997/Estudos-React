import { useState, useMemo, useEffect, useCallback } from 'react';
import { BiSearch, BiError } from 'react-icons/bi';
import { MdOutlineFilterAlt } from 'react-icons/md';
import './Home.css';
import CountryArea from '../componentes/CountryArea';
import Loader from '../componentes/Loader';
import ScrollToTopButton from '../componentes/ScrollTopButton';

const REGIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

export default function Home() {
  const [allCountries, setAllCountries] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const loadAllCountries = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        'https://restcountries.com/v3.1/all?fields=name,flags,region,subregion,population,capital'
      );
      const data = await response.json();
      setAllCountries(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => { loadAllCountries(); }, [loadAllCountries]);

  const countriesToRender = useMemo(() => {
    return allCountries.filter(c => {
      const matchSearch = c.name.common.toLowerCase().includes(searchField.toLowerCase());
      const matchRegion = selectedRegion ? c.region === selectedRegion : true;
      return matchSearch && matchRegion;
    });
  }, [searchField, selectedRegion, allCountries]);

  const handleReset = () => {
    setSearchField('');
    setSelectedRegion('');
  };

  return (
    <>
      <nav className="controls-bar">
        <div className="search-wrapper">
          <BiSearch className="search-icon" />
          <input
            className="search-input"
            type="search"
            placeholder="Search for a country…"
            value={searchField}
            onChange={e => setSearchField(e.target.value)}
            autoComplete="off"
          />
        </div>

        <div className="select-wrapper">
          <select
            className="region-select"
            value={selectedRegion}
            onChange={e => setSelectedRegion(e.target.value)}
          >
            <option value="">All Regions</option>
            {REGIONS.map(r => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
          <MdOutlineFilterAlt className="select-arrow" />
        </div>
      </nav>

      {!isLoading && (
        <p className="results-info">
          {countriesToRender.length} {countriesToRender.length === 1 ? 'country' : 'countries'} found
          {selectedRegion ? ` in ${selectedRegion}` : ''}
          {searchField ? ` matching "${searchField}"` : ''}
        </p>
      )}

      {isLoading && <Loader />}

      {!isLoading && countriesToRender.length === 0 ? (
        <div className="not-found">
          <BiError />
          <p>No countries found</p>
          <span>Try adjusting your search or filter</span>
          <button className="reset-btn" onClick={handleReset}>Clear filters</button>
        </div>
      ) : (
        !isLoading && <CountryArea countries={countriesToRender} />
      )}

      <ScrollToTopButton />
    </>
  );
}