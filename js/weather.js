const API_KEY = '8a6ce7ad954fa49acaa293e3f21305a3'

const weatherEl = document.querySelector('.weather')
const cityEl = document.querySelector('.weather .city')
const tempEl = document.querySelector('.weather .temp')
const iconEl = document.querySelector('link[rel="shortcut icon"]')

navigator.geolocation.getCurrentPosition(pos => {
  const { latitude, longitude } = pos.coords
  const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`

  fetch(WEATHER_API_URL)
    .then(response => response.json())
    .then(data => {
      const icon = data.weather[0].icon
      const iconUrl = `https://openweathermap.org/payload/api/media/file/${icon}.png`

      iconEl.href = iconUrl

      const temperature = new Intl.NumberFormat('ko', {
        style: 'unit',
        unit: 'celsius',
      }).format(Math.round(data.main.temp - 273.15))

      const city = data.name

      cityEl.innerHTML = city
      tempEl.innerHTML = temperature
      weatherEl.style.opacity = 1
    })
})
