import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi"
import Swal from "sweetalert2"

function SearchBox({ setWeather }) {
  const [city, setCity] = useState("")

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!city.trim()) return

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`

    const response = await fetch(url)
      if(!response.ok){
      Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Cidade não encontrada",
      text: "Verifique o nome e tente novamente!",
      showConfirmButton: false,
      timer: 2000,
      toast: true,
    })
      return
   }
    const data = await response.json()
    setWeather(data)
    setCity("")
  } 

  const handleClear = () => setCity("");

  return (
    <form className="search-box" onSubmit={handleSearch}>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {city && (
          <button type="button" className="clear-btn" onClick={handleClear}>
            <FiX />
          </button>
        )}
      </div>
      <button type="submit" className="search-btn">
        <FiSearch />
      </button>
    </form>
  )
}

export default SearchBox
