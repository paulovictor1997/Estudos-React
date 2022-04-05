import React from "react";
import './style/Cards.css'
import sedas from './imagens/icon-sedans.svg';
import luxury from './imagens/icon-luxury.svg';
import suvs from './imagens/icon-suvs.svg';

export default (props) =>
    <>
        <div className="content">
            <div className="card-content" id="orange">
                <img src={sedas} alt="sedans" />
                <h1 className="title">SEDANS</h1>
                <p className="description">
                    Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip. 
                </p>
                <button type="button">Learn More</button>
            </div>

            <div className="card-content" id="green">
                <img src={suvs} alt="suvs" />
                <h1 className="title">SUVS</h1>
                <p className="description">
                    Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures
                </p>
                <button type="button">Learn More</button>
            </div>

            <div className="card-content" id="dark-green">
                <img src={luxury} alt="luxury" />
                <h1 className="title">LUXURY</h1>
                <p className="description">
                    Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.
                </p>
                <button type="button">Learn More</button>
            </div>
        </div>
    </>