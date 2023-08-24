let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let currenttime = new Date();
// console.log(currenttime.getHours());

hrs.innerHTML = currenttime.getHours();
min.innerHTML = currenttime.getMinutes();
sec.innerHTML = currenttime.getSeconds();



