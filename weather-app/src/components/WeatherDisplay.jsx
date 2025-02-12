

export default function WeatherDisplay({weather}) {
  return (
    <div className="mt-4 p-4 border rounded bg-white dark:bg-gray-700 text-black dark:text-white">
        <h2  className="text-xl font-bold">{weather.name}</h2>
        <p>{weather.weather[0].description}</p>
        <p className="text-lg">🌡 {weather.main.temp}°C</p>
    </div>

  )
}
