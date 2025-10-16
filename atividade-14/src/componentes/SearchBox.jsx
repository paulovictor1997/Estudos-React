import { useState } from "react"

const SearchBox = ({setWeather}) => {
  const [city,setCity] = useState("") 

  const handleSearch = async (e) =>{
    e.preventDefault()
    if(!city) return

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`

    const response = await fetch(url)
    if(!response.ok){
      alert("Cidade não encontrada")
      return
    }

    const data = await response.json()
    setWeather(data)
    setCity("")
  }

  return (
    <form onSubmit={handleSearch}>
      <input 
        type="text"
        placeholder="City name"
        value={city}
        onChange={(e)=> setCity(e.target.value)} 
      />
    </form>
  )
}

export default SearchBox
