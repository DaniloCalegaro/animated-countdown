const numberDaySide1 = document.querySelector('#number-days-side1')
const numberDaySide2 = document.querySelector('#number-days-side2')
const numberHourSide1 = document.querySelector('#number-hours-side1')
const numberHourSide2 = document.querySelector('#number-hours-side2')
const numberMinuteSide1 = document.querySelector('#number-minutes-side1')
const numberMinuteSide2 = document.querySelector('#number-minutes-side2')
const numberSecondSide1 = document.querySelector('#number-seconds-side1')
const numberSecondSide2 = document.querySelector('#number-seconds-side2')

const flipperDays = document.querySelector('#flipper-days')
const flipperHours = document.querySelector('#flipper-hours')
const flipperMinutes = document.querySelector('#flipper-minutes')
const flipperSeconds = document.querySelector('#flipper-seconds')

function startCountDown(duration) {
  let secondsRemaining = duration

  let time = {
    day: {
      dayCurrent: 0,
      dayLast: 0,
      side: 0
    },
    hour: {
      hourCurrent: 0,
      hourLast: 0,
      side: 0
    },
    minute: {
      minuteCurrent: 0,
      minuteLast: 0,
      side: 0
    },
    second: {
      secondCurrent: 0,
      secondLast: 0,
      side: 0
    }
  }
  let countInterval = setInterval(() => {
    time.day.dayCurrent = parseInt(secondsRemaining / 24 / 60 / 60)
    time.hour.hourCurrent = parseInt((secondsRemaining % 86400) / 60 / 60)
    time.minute.minuteCurrent = parseInt((secondsRemaining % 3600) / 60)
    time.second.secondCurrent = parseInt(secondsRemaining % 60)

    secondsRemaining = secondsRemaining - 1

    if (secondsRemaining < 0) {
      clearInterval(countInterval)
    }

    /*----Days--- */
    if (time.day.dayCurrent != time.day.dayLast) {
      const valueCurrent = formatTime(time.day.dayCurrent)

      if (time.day.side === 1) {
        numberDaySide1.textContent = valueCurrent
        time.day.side = 0
      } else {
        numberDaySide2.textContent = valueCurrent
        time.day.side = 1
      }

      flipperDays.classList.toggle('turn')
      time.day.dayLast = time.day.dayCurrent
    }

    /*----Hours--- */
    if (time.hour.hourCurrent != time.hour.hourLast) {
      const valueCurrent = formatTime(time.hour.hourCurrent)

      if (time.hour.side === 1) {
        numberHourSide1.textContent = valueCurrent
        time.hour.side = 0
      } else {
        numberHourSide2.textContent = valueCurrent
        time.hour.side = 1
      }

      flipperHours.classList.toggle('turn')
      time.hour.hourLast = time.hour.hourCurrent
    }

    /*----Minutes--- */
    if (time.minute.minuteCurrent != time.minute.minuteLast) {
      const valueCurrent = formatTime(time.minute.minuteCurrent)

      if (time.minute.side === 1) {
        numberMinuteSide1.textContent = valueCurrent
        time.minute.side = 0
      } else {
        numberMinuteSide2.textContent = valueCurrent
        time.minute.side = 1
      }

      flipperMinutes.classList.toggle('turn')
      time.minute.minuteLast = time.minute.minuteCurrent
    }

    /*----Seconds--- */
    if (time.second.secondCurrent != time.second.secondLast) {
      const valueCurrent = formatTime(time.second.secondCurrent)

      if (time.second.side === 1) {
        numberSecondSide1.textContent = valueCurrent
        time.second.side = 0
      } else {
        numberSecondSide2.textContent = valueCurrent
        time.second.side = 1
      }

      flipperSeconds.classList.toggle('turn')
      time.second.secondLast = time.second.secondCurrent
      //console.log('passou secundo')
    }
    /*------------ */
  }, 1000)
}

const toggleSide = lado => {
  if (lado === 1) {
    lado = 0
  } else {
    lado = 1
  }
  return lado
}

const formatTime = time => {
  const timeFormated = time < 10 ? '0' + time : time
  return timeFormated
}

//---- Start with window  -----//
window.onload = () => {
  startCountDown(172800)
}
