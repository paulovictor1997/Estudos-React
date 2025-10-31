import { WiThermometer, WiHumidity, WiStrongWind, WiTime3 , WiSunrise, WiSunset} from "react-icons/wi"

function WeatherCard({ weather, darkMode = false }) {
  const { name, main, weather: weatherInfo, wind, timezone, sys } = weather
  const icon = `https://openweathermap.org/img/wn/${weatherInfo[0].icon}@2x.png`
  //Pegar às horas baseada no timezone retornado
  const formatLocalTime = (timestamp, timezone) => {
    if (!timestamp) return "--:--";
    // Cria um objeto Date com base no timestamp (UTC)
    const date = new Date(timestamp * 1000);
    // Aplica o offset do timezone (em segundos → ms)
    const localTime = new Date(date.getTime() + timezone * 1000);
    // Retorna no formato HH:MM
    return localTime.toISOString().slice(11, 16);
  };
  // Hora atual local
    const utcNow = new Date();
    const localNow = new Date(utcNow.getTime() + timezone * 1000);
    const localTimeString = localNow.toISOString().slice(11, 16);

  // Nascer e pôr do sol
    const sunrise = formatLocalTime(sys.sunrise, timezone);
    const sunset = formatLocalTime(sys.sunset, timezone);

  // Dark Mode
    const cardStyle = {
      background: darkMode ? "#2a2a2a" : "#ffffff",
      color: darkMode ? "#f1f1f1" : "#111827",
      boxShadow: darkMode
      ? "0 6px 18px rgba(0,0,0,0.45)"
      : "0 6px 20px rgba(0,0,0,0.08)",
    }

  return (
    <div className="weather-card" style={cardStyle}>
      <h2 className="city-name">{name}</h2>
      <div className="weather-main">
        <img src={icon} alt={weatherInfo[0].description} className="weather-icon" />
        <p className="description">{weatherInfo[0].description}</p>
      </div>
      <div className="weather-info">
        <p><WiThermometer /> Temperatura: {main.temp}°C</p>
        <p><WiHumidity /> Umidade: {main.humidity}%</p>
        <p><WiStrongWind /> Vento: {wind.speed} m/s</p>
        <p><WiTime3/> Hora local : {localTimeString}</p>
        <p><WiSunrise /> Nascer do sol: {sunrise}</p>
        <p><WiSunset /> Pôr do sol: {sunset}</p>
      </div>
    </div>

  )
}

export default WeatherCard
