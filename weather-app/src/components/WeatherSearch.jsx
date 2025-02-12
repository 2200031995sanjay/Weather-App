

// eslint-disable-next-line react/prop-types
export default function WeatherSearch({city,setCity, fetchWeather}) {
  return (
    <div className="flex flex-col gap-3">
        <input 
        type="text"
        value={city}
        onChange={(e)=>setCity(e.target.value)}
        className="p-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg w-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        
        />

        <button
        onClick={fetchWeather}
        className="px-5 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-300"
        >GetWeather</button>
    </div>
  )
}
