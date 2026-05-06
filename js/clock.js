const clock = document.querySelector('.clock')
const time = clock.querySelector('.time')
const date = clock.querySelector('.date')

function updateClock() {
  const now = new Date()

  const timeString = new Intl.DateTimeFormat('en-us', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  }).format(now)

  const dateString = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'long',
  }).format(now)

  time.textContent = timeString
  date.textContent = dateString
}

setInterval(updateClock, 1000)
updateClock()
