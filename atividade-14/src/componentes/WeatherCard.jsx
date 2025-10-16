const WeatherCard = ({weather}) => {
  const {name,main, weather:weatherInfo,wind} = weather
  const icon = `https://openweathermap.org/img/wn/${weatherInfo[0].icon}@2x.png`
  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <img src={icon} alt={weatherInfo[0].description} />
      <p>{weatherInfo[0].description}</p>
      <p>🌡️ Temperatura: {main.temp}°C</p>
      <p>🤒 Sensação térmica: {main.feels_like}°C</p>
      <p>💧 Umidade: {main.humidity}%</p>
      <p>💨 Vento: {wind.speed} m/s</p>
    </div>
  )
}

export default WeatherCard
