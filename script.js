setInterval(function() {
  let a = new Date()
  document.getElementsByTagName("span")[0].innerHTML = a.getHours()
  document.getElementsByTagName("span")[2].innerHTML = a.getMinutes()
  document.getElementsByTagName("span")[4].innerHTML = a.getSeconds()
  document.getElementsByTagName("span")[1].classList.toggle("blink")
  document.getElementsByTagName("span")[3].classList.toggle("blink")
}, 500)
let b = new Date()
console.log(b.getMonth())
let day = b.getDay()
let month = b.getMonth()
let date = b.getDate()
let newday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let newmonth= ["January","February","March","April","May","June","July","August","September","October","November","December"]
document.getElementById("daydate").innerHTML = `${newday[day]} ${date} ${newmonth[month]} `