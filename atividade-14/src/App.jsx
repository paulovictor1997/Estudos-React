import { useEffect,useState } from "react"
import { FaMoon, FaSun,FaCloudSun } from "react-icons/fa"
import SearchBox from "./componentes/SearchBox"
import WeatherCard from "./componentes/WeatherCard"
import "./index.css"

function App() {
  const [weather,setWeather] = useState(null) 
  const [darkMode,setDarkMode] = useState(()=>{
    //Recupera do localstorage, por padrão false
    try{
      const storage = localStorage.getItem("weather_dark_mode")
      return storage ? JSON.parse(storage) : false
    } catch {
      return false
    }
  })

  useEffect(()=>{
    document.body.classList.toggle("dark",darkMode)
    localStorage.setItem("weather_dark_mode", JSON.stringify(darkMode))
  },[darkMode])

   const toggleDarkMode = () => setDarkMode((s) => !s)
 
  return (
   <div className="app-container">
      <div className="app-content">
      <div className="icon"><FaCloudSun/></div>
        <h1 className="title">Weather App</h1>
         <button
          aria-label="Alternar modo escuro"
          className="mode-toggle"
          onClick={toggleDarkMode}
      >
         {darkMode ? <FaSun /> : <FaMoon />}
      </button>
      </div>
      <SearchBox setWeather={setWeather} />
      {weather && <WeatherCard weather={weather} />}
    </div>
  )
}

export default App