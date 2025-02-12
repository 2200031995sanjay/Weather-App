

// eslint-disable-next-line react/prop-types
export default function WeatherSearch({city,setCity, fetchWeather}) {
  return (
    <div>
        <input 
        type="text"
        value={city}
        onChange={(e)=>setCity(e.target.value)}
        className="p-2 border rounded w-full bg-white text-black dark:bg-gray-700 dark:text-white"
        
        />

        <button
        onClick={fetchWeather}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >GetWeather</button>
    </div>
  )
}
