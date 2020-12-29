const newDate = new Date('1 jan 2021')


function counter(){
  let currentDate = new Date()
  let seconds = Math.round((newDate-currentDate)/1000)%60
  const ps = document.querySelector('.dates')
  ps.children[3].textContent = seconds
}
counter()
// setInterval(counter,1000)
