import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { BiError } from 'react-icons/bi';
import './Country.css';
import Loader from '../componentes/Loader';

export default function Country() {
  const [country, setCountry] = useState(null);
  const [borders, setBorders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    const fetchCountry = async () => {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${name}?fullText=true`
        );
        if (!res.ok) throw new Error('Not found');
        const data = await res.json();
        const c = data[0];
        setCountry(c);

        if (c.borders?.length) {
          const borderRes = await fetch(
            `https://restcountries.com/v3.1/alpha?codes=${c.borders.join(',')}&fields=name,flags,cca3`
          );
          const borderData = await borderRes.json();
          setBorders(borderData);
        } else {
          setBorders([]);
        }
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountry();
  }, [name]);

  if (isLoading) return (
    <div className="country-page">
      <Loader />
    </div>
  );

  if (error || !country) return (
    <div className="country-page">
      <Link to="/" className="btn-back"><FiArrowLeft /> Back</Link>
      <div className="country-error">
        <BiError />
        <p>Country not found</p>
        <span>The country "{name}" could not be loaded.</span>
      </div>
    </div>
  );

  const {
    flags, population, region, subregion,
    capital, tld, area, altSpellings, currencies, languages
  } = country;

  const currencyNames = currencies
    ? Object.values(currencies).map(c => c.name).join(', ')
    : '—';

  const languageNames = languages
    ? Object.values(languages).join(', ')
    : '—';

  return (
    <div className="country-page">
      <Link to="/" className="btn-back">
        <FiArrowLeft /> Back
      </Link>

      <div className="country-detail">
        <div className="detail-flag">
          <img src={flags.png} alt={flags.alt || `Flag of ${name}`} />
          <p className="detail-flag-label">{country.name.common}</p>
        </div>

        <div className="detail-info">
          <div className="detail-info-grid">
            <div className="detail-row">
              <span className="detail-label">Population</span>
              <span className="detail-value">{population.toLocaleString()}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Region</span>
              <span className="detail-value">{region || '—'}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Subregion</span>
              <span className="detail-value">{subregion || '—'}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Capital</span>
              <span className="detail-value">{capital?.[0] || '—'}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Area</span>
              <span className="detail-value">{area ? area.toLocaleString() + ' km²' : '—'}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Top Level Domain</span>
              <span className="detail-value">{tld?.[0] || '—'}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Currencies</span>
              <span className="detail-value">{currencyNames}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Languages</span>
              <span className="detail-value">{languageNames}</span>
            </div>
            {altSpellings?.[1] && (
              <div className="detail-row">
                <span className="detail-label">Official Name</span>
                <span className="detail-value">{altSpellings[1]}</span>
              </div>
            )}
          </div>

          <div className="borders-section">
            <p className="borders-title">Border Countries</p>
            {borders.length > 0 ? (
              <ul className="borders-list">
                {borders.map(b => (
                  <li key={b.cca3}>
                    <button
                      className="border-tag"
                      onClick={() => navigate(`/countries/${b.name.common}`)}
                    >
                      <img src={b.flags.png} alt={b.name.common} />
                      {b.name.common}
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="no-borders">This country has no land borders.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}