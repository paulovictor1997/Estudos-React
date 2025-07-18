import {useState,useMemo,useEffect} from 'react';
import "./Home.css";
import CountryArea from '../componentes/CountryArea';
import FilterByRegion from '../componentes/FilterByRegion';
import Loader from '../componentes/Loader';

export default function Home () {
    
    const [countries,setCountries] = useState([]);
    const [searchfield, setSearchField] = useState('');

    const countriesToRender = useMemo(()=>{
        return countries.filter(c => c.name.common.toLowerCase().includes(searchfield.toLowerCase()))
    },[searchfield, countries])

    const [isLoading, setLoading] = useState(false)

    const loadUser = async()=>{
      setLoading(true)
      const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital');
      const data = await response.json();
      //console.log(data)
      setCountries(data)
      setLoading(false)
    }

    useEffect(() => {
        loadUser();
    }, []);
  
 
    return(
    <>
        <nav>
            <form className='search-country' autoComplete='off'>
                <input type="search" 
                name='search' 
                id='search' 
                placeholder='Search for a country'
                onChange={(e) => setSearchField(e.target.value)}
                />
            </form>

            <FilterByRegion setCountries={setCountries}/>
            
        </nav>
        {isLoading && <Loader/>}
        <CountryArea countries={countriesToRender} setCountries={setCountries} loadUser={loadUser}/>
    </>  
    )
}