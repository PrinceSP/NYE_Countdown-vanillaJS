(async function counter(){
  const newDate = new Date('1 jan 2021')
  let currentDate = new Date()
  let seconds = Math.round((newDate-currentDate)/1000)%60
  const ps = document.querySelector('.dates')
  ps.children[3].textContent = seconds
  setTimeout(counter,1000)
}())
