import { WiThermometer, WiHumidity, WiStrongWind, WiTime3 , WiSunrise, WiSunset} from "react-icons/wi"

function WeatherCard({ weather }) {
  const { name, main, weather: weatherInfo, wind, timezone, sys } = weather;
  const icon = `https://openweathermap.org/img/wn/${weatherInfo[0].icon}@2x.png`

  //Pegar às horas do local, calculo do horário
  const localTime = new Date(Date.now() + timezone * 1000)
  const timeString = localTime.toUTCString().slice(17,22)

  // Conversão do nascer/pôr do sol
   const formatTime = (timestamp) => {
    const date = new Date((timestamp + timezone) * 1000)
    return date.toUTCString().slice(17, 22)
  }

  const sunrise = formatTime(sys.sunrise)
  const sunset = formatTime(sys.sunset)

  return (
    <div className="weather-card">
      <h2 className="city-name">{name}</h2>
      <div className="weather-main">
        <img src={icon} alt={weatherInfo[0].description} className="weather-icon" />
        <p className="description">{weatherInfo[0].description}</p>
      </div>
      <div className="weather-info">
        <p><WiThermometer /> Temperatura: {main.temp}°C</p>
        <p><WiHumidity /> Umidade: {main.humidity}%</p>
        <p><WiStrongWind /> Vento: {wind.speed} m/s</p>
        <p><WiTime3 /> Hora local: {timeString}</p>
        <p><WiSunrise /> Nascer do sol: {sunrise}</p>
        <p><WiSunset /> Pôr do sol: {sunset}</p>
      </div>
    </div>

  )
}

export default WeatherCard
