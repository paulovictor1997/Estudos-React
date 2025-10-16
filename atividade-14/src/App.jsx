import { useState } from "react"
import SearchBox from "./componentes/SearchBox"
import WeatherCard from "./componentes/WeatherCard"
import "./index.css"

function App() {
  const [weather,setWeather] = useState(null) 
 
  return (
    <>
      <div className="app">
        <h1>Weather App</h1>
        <SearchBox setWeather={setWeather}/>
        {weather && <WeatherCard weather={weather}/>}
      </div>
    </>
  )
}

export default App
