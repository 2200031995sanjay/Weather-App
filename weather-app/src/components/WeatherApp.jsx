import {useState, useEffect} from 'react';
import WeatherSearch from './WeatherSearch';
import WeatherDisplay from './WeatherDisplay';

export default function WeatherApp() {
    const [city,setCity] = useState("Guntur");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_KEY = "24a1896f513a498ed8824cb6b24467dd";

    useEffect(()=>{
       fetchWeather();
    },[]);
    
    const fetchWeather = async ()=>{
        setLoading(true);
        setError(null);
        try{
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            if(!response.ok){
                throw new Error("City not found");
            }
            const data = await response.json();
            setWeather(data);
        }catch(error){
            setError(error.message);

        }
        setLoading(false);

    }


  return (
    <div className="p-4 max-w-md mx-auto text-center bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-black dark:text-white">Weather App</h1>
      <WeatherSearch city={city} setCity={setCity} fetchWeather={fetchWeather} />
      {loading && <p className="mt-4 text-gray-500">Loading....</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {weather && <WeatherDisplay weather={weather} />}
      
      </div>
  )
}
