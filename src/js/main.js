const numberDay = document.querySelector('#number-days')
const numberHour = document.querySelector('#number-hours')
const numberMinute = document.querySelector('#number-minutes')
const numberSecond = document.querySelector('#number-seconds')

function startCountDown(duration) {
  let secondsRemaining = duration
  let day, hour, minute, secund

  let countInterval = setInterval(() => {
    day = parseInt(secondsRemaining / 24 / 60 / 60)
    hour = parseInt((secondsRemaining % 86400) / 60 / 60)
    minute = parseInt((secondsRemaining % 3600) / 60)
    secund = parseInt(secondsRemaining % 60)

    secondsRemaining = secondsRemaining - 1

    if (secondsRemaining < 0) {
      clearInterval(countInterval)
    }

    numberDay.textContent = day < 10 ? '0' + day : day
    numberHour.textContent = hour < 10 ? '0' + hour : hour
    numberMinute.textContent = minute < 10 ? '0' + minute : minute
    numberSecond.textContent = secund < 10 ? '0' + secund : secund
  }, 1000)
}

window.onload = () => {
  startCountDown(172800)
}
