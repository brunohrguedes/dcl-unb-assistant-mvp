import { fetchWeatherApi } from 'openmeteo'

export const getWeather = async () => {
  // UnB Darcy Ribeiro latitude and longitude
  const params = {
    latitude: [-15.76],
    longitude: [-47.87],
    timezone: 'America/Sao_Paulo',
    current: 'temperature_2m'
  }
  const url = 'https://api.open-meteo.com/v1/forecast'

  const responses = await fetchWeatherApi(url, params)

  const response = responses[0]

  const utcOffsetSeconds = response.utcOffsetSeconds()

  const current = response.current()!

  const weatherData = {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature: current.variables(0)!.value(),
      weatherCode: current.variables(1)!.value(),
      windSpeed: current.variables(2)!.value(),
      windDirection: current.variables(3)!.value()
    }
  }

  console.log(weatherData.current.temperature)

  return weatherData.current.temperature
}
