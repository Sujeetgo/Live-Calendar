const currentDate =  new Date();
const monthEl = document.querySelector(".date h1");
// days element
const daysEl = document.querySelector(".days");
//Friday Dec 30 2022
const paraEl = document.querySelector(".date p");
const dayIndx = new Date().getDay();
const monthIndx = new Date().getMonth();
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
monthEl.innerHTML = months[monthIndx];
paraEl.innerHTML = days[dayIndx] +", "+ currentDate.getDate()+" "+ currentDate.getFullYear();
// finding day count and last and first date of month

const lastDay = new Date(new Date().getFullYear(),monthIndx+1,0).getDate();
const firstDay = new Date(new Date().getFullYear(),monthIndx,1).getDate()+2;
//days list
let Days = "";
for(let i = firstDay; i>0; i--){
    Days += `<div class="empty"></div>`;
}
for(let i=1; i<=lastDay; i++){
    if(i == new Date().getDate()){
        Days += `<div class="today">${i}</div>`;
    }
    else{
        Days += `<div>${i}</div>`;
    }
   
}
daysEl.innerHTML = Days;

