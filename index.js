(async function counter(){
  const newDate = new Date('1 jan 2021')
  let currentDate = new Date()
  let seconds = Math.round((newDate-currentDate)/1000)
  const minutes = Math.floor(seconds/60)
  const hours = Math.floor((minutes/60)%24)
  const days = Math.floor(seconds/86400)
  const ps = document.querySelector('.dates')
  ps.children[3].textContent = formatTime(seconds%60)
  ps.children[2].textContent = formatTime(minutes%60)
  ps.children[1].textContent = formatTime(hours)
  ps.children[0].textContent = formatTime(days)

  setTimeout(counter,1000)
}())

function formatTime(times){
  if (times < 10) {
    return `0${times}`
  } else {
    return times
  }
}
