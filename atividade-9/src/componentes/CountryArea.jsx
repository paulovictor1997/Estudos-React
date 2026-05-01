import './CountryArea.css';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export default function CountryArea({ countries }) {
  return (
    <section className="country-grid">
      {countries.map((country) => {
        const { name, population, region, subregion, capital, flags } = country;
        return (
          <article className="country-card" key={name.common}>
            <div className="card-flag">
              <img
                src={flags.png}
                alt={flags.alt || `Flag of ${name.common}`}
                loading="lazy"
              />
              {region && (
                <span className="card-region-badge">{region}</span>
              )}
            </div>

            <div className="card-body">
              <h2 className="card-name">{name.common}</h2>
              <div className="card-info">
                {capital?.[0] && (
                  <div className="card-info-row">
                    <span className="card-info-label">Capital</span>
                    <span className="card-info-value">{capital[0]}</span>
                  </div>
                )}
                {subregion && (
                  <div className="card-info-row">
                    <span className="card-info-label">Subregion</span>
                    <span className="card-info-value">{subregion}</span>
                  </div>
                )}
                <div className="card-info-row">
                  <span className="card-info-label">Population</span>
                  <span className="card-info-value">{population.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="card-footer">
              <Link
                to={`/countries/${name.common}`}
                className="card-details-link"
              >
                More details <FiArrowRight />
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
}