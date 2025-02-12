

export default function WeatherDisplay({weather}) {
  return (
    <div className="mt-6 p-6 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white shadow-md">
      <h2 className="text-2xl font-bold">{weather.name}</h2>
      <p className="text-lg capitalize">{weather.weather[0].description}</p>
      <p className="text-3xl font-semibold mt-2">🌡 {weather.main.temp}°C</p>
    </div>

  )
}
