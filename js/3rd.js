console.time("Timer");

// Code for random year
const minyear = new Date().getFullYear();
const maxyear = 2100;

function randomYear(){
  return Math.floor(Math.random() * (maxyear - minyear + 1) + minyear);  
}

// Code for random Month
const months = ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];

function randomMonth(){
  return Math.floor(Math.random() * (months.length));
}

// Code for random date 
function randomDate(){
  return Math.floor(Math.random() * 31) + 1;
}

//Code for select random COD 
const CauseOfDeath = ['Stomach Cancer','Childhood Diseases','Cardiac Arrest','Measles','Suicide','Covid-19','Tuberclosis','HIV/AIDS','Stroke','Liver Cancer','Lung Cancer','Kidney Failure','Malaria','Nature Death','Hypertensive Heart Disease','Diabetes Mellitus','Colorectal Cancer','Road Accident','Colon/Rectum Cancer','Diarrheal Diseases']

function causeOfDeath(){
  return CauseOfDeath[Math.floor(Math.random() * CauseOfDeath.length)];
}

//Code For Select Hell Or Heaven

function hellOrHeaven(){
  let ran = Math.floor((Math.random() * 10) + 1);
  return ran <= 5 ? 'Heaven' : 'Hell';
}

//Code for calculate Death Date and Cod
// let deathYear = randomYear();
// let deathMonth = randomMonth();
// let deathDay = randomDate();
if(!localStorage.getItem('deathYear') && !localStorage.getItem('deathMonth') && !localStorage.getItem('deathDay')){
  localStorage.setItem('deathYear',randomYear());
  localStorage.setItem('deathMonth',randomMonth());
  localStorage.setItem('deathDay',randomDate());
}



let deathYear = localStorage.getItem('deathYear');
let deathMonth = localStorage.getItem('deathMonth');
let deathDay = localStorage.getItem('deathDay');


function deathDatefilter(){  
  if(months[deathMonth] === 'FEBRUARY'){
    if((deathYear % 4 === 0) && (deathYear % 100 != 0) || (deathYear % 400 === 0)){
      if(deathDay === 31 || deathDay ===30){
        deathDay -= 2;
      }
    }else if(deathDay == 31){
      deathDay -= 3;
    }else if(deathDay == 30){
      deathDay -= 2;
    }else if(deathDay == 29){
      deathDay -= 1;
    }
  }
}
deathDatefilter();

function firstMsg(){
  if(deathDay === 1 || deathDay === 21 || deathDay ===31){
    return `${months[deathMonth]} ${deathDay}ST , ${deathYear}`;
  }else if(deathDay === 2 || deathDay === 22 ){
    return `${months[deathMonth]} ${deathDay}ND , ${deathYear}`;
  }else if(deathDay === 3 || deathDay === 23){
    return `${months[deathMonth]} ${deathDay}RD , ${deathYear}` ;
  }else{
    return `${months[deathMonth]} ${deathDay}TH , ${deathYear}`;
  }
}

// Code for current Year,Month,Day,Hour,Minutes,Seconds

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();
let currentDate = new Date().getDate();
let currentHour = new Date().getHours();
let currentMinutes = new Date().getMinutes();
let currentSeconds = new Date().getSeconds();

//Code For Calculate Year left,Month left,Day left,Hour left,Minutes left,Seconds left

function calculateYear(){
  return deathYear - currentYear;
}

function calculateMonth(){
  let yearDifference = calculateYear();
  let monthDifference;

  if (deathMonth >= currentMonth) {
    monthDifference = deathMonth - currentMonth;
  } else {
    monthDifference = 12 - currentMonth + deathMonth;
    yearDifference--; // Decrement the year difference if death month is before current month
  }

  let totalMonth = yearDifference * 12 + monthDifference + 1; // Adding 1 to include the current month
  return totalMonth;
}

function calculateDay(a,b,c){
  let curdate = new Date();
  let inputdate = new Date(a,b-1,c);
  curdate.setHours(0,0,0,0);

  let msdifference = inputdate - curdate ;
  let daydifference = Math.floor(msdifference / (1000 * 60 * 60 * 24));
  return daydifference;
}

function calculateHour(){
  return ((calculateDay(deathYear,deathMonth,deathDay)) * 24) - new Date().getHours();
}

function calculateMinutes(){
  return ((calculateHour()) * 60) - new Date().getMinutes();
}

function calculateSeconds(){
  return ((calculateMinutes()) * 60) - new Date().getSeconds();
}

//local storage
if(!localStorage.getItem('destini')){
  localStorage.setItem('destini',hellOrHeaven());
}
if(!localStorage.getItem('causeOfDeath')){
  localStorage.setItem('causeOfDeath',causeOfDeath());
}

// Wanted Variables
let msg1 = firstMsg();
let destini = localStorage.getItem('destini');
let mainCod = localStorage.getItem('causeOfDeath');
let yearLeft = calculateYear();
let monthLeft = calculateMonth();
let dayLeft = calculateDay(deathYear,deathMonth,deathDay);
let hourLeft = calculateHour();
let minutesLeft = calculateMinutes();
let secondsLeft = calculateSeconds();
let msg2 = `You Have ${yearLeft} Years. ${deathMonth - currentMonth > 0 ? deathMonth - currentMonth : (deathMonth - currentMonth)+1} Months And ${deathDay - currentDate > 0 ? deathDay - currentDate : (deathDay - currentDate)*(-1)} Days Left To Live`;
let screenWidth = window.innerWidth;
console.log(screenWidth);

//DOM Manipulation

document.getElementById("firstMsg").innerHTML = msg1;
document.getElementById("secondMsg").innerHTML = destini;
document.getElementById("thirdone").innerHTML = mainCod;
document.getElementById("fourthone").innerHTML = msg2;
document.getElementById("Years").innerHTML = yearLeft;
document.getElementById("Months").innerHTML = monthLeft;
document.getElementById("Days").innerHTML = dayLeft;
document.getElementById("Hours").innerHTML = hourLeft;
document.getElementById("Minutes").innerHTML = minutesLeft;
document.getElementById("Seconds").innerHTML = secondsLeft;


//Style For 3rd Page

let head = document.querySelector('h1');
let message = document.querySelector('h2');
let main = document.querySelectorAll('.mainmsg');
let destiniVar = document.querySelectorAll('.destiniClass');
let details = document.querySelectorAll('.details');
let leftMsg = document.querySelector('.leftmsg');
let one = document.querySelectorAll('.one');
let two = document.querySelectorAll('.two');
let homebtn = document.querySelector('.Homebtn');
let Xbtn = document.querySelector('.Xbtn');
let duration = document.querySelectorAll('.duration');

let imagpath = './Photos/heaven.webp';
let imagpath2 = './Photos/hell.jpg';

if (destini === 'Heaven') {
  document.body.style.backgroundImage = 'url('+imagpath+')';
  head.style.color = 'rgb(43, 163, 211)';
  head.style.fontFamily = 'Boogaloo';
  head.style.margin = screenWidth > 399 ? '10px 0': '10px 0 0 0' ;
  message.style.color = 'rgb(43, 163, 211)';
  message.style.fontFamily = 'Grestal';
  message.style.fontSize = screenWidth > 640 ? '25px': ( screenWidth > 399 ?'22px':'19px');
  message.style.marginBottom = screenWidth > 399 ? '10px': '0px';

  document.querySelector('.fourth').style.marginTop = screenWidth > 399 ? '13px': '0px';

  main.forEach(main => {
    main.style.color = 'rgb(43, 163, 211)';
    main.style.fontFamily = 'Boogaloo';
    main.style.fontSize = screenWidth > 640 ? '30px' : ( screenWidth > 399 ? '25px': '22px');
  })
 
  duration.forEach(duration => {
    duration.style.marginTop = '0px';
  })

  destiniVar.forEach(destiniVar => {
    destiniVar.style.fontFamily = 'Boogaloo';
    destiniVar.style.fontSize = screenWidth > 640 ? '25px' :( screenWidth > 399 ? '22px':'19px');
    destiniVar.style.color = 'white';
  })
 
  details.forEach(details => {
    details.style.fontFamily = 'Boogaloo';
    details.style.fontSize = screenWidth > 640 ? '25px' : ( screenWidth > 399 ? '22px': '19px');
  })
 
  leftMsg.style.fontSize = screenWidth > 640 ? '25px' : ( screenWidth > 399 ? '22px':'19px');
  leftMsg.style.fontFamily = 'Grestal';
  leftMsg.style.marginBottom = screenWidth > 399 ? '10px': '0px';
 
  one.forEach(one => {
    one.style.color = 'rgb(43, 163, 211)';
    one.style.fontFamily = 'Boogaloo';
    one.style.fontSize = screenWidth > 640 ? '25px' : ( screenWidth > 399 ? '22px':'19px');
  })
  two.forEach(two => {
    two.style.fontSize = screenWidth > 640 ? '24px': ( screenWidth > 399 ?'21px':'18px');
    two.style.fontFamily = 'Grestal';
  })
  homebtn.style.color = 'rgb(43, 163, 211)';
  homebtn.style.fontFamily = 'Boogaloo';
  homebtn.style.fontSize = '35px';
  homebtn.style.borderColor = 'rgb(43, 163, 211)';

  Xbtn.style.color = 'rgb(43, 163, 211)';
  Xbtn.style.fontFamily = 'Boogaloo';
  Xbtn.style.fontSize = '15px';
  Xbtn.style.borderColor = 'rgb(43, 163, 211)';
}
else{
  document.body.style.backgroundImage = 'url('+imagpath2+')';
  head.style.color = 'red';
  head.style.fontFamily = 'Eater';
  message.style.color = 'red';
  message.style.fontFamily = 'Nosifer';
  message.style.fontSize = screenWidth > 399 ? '18px':'12px';

  main.forEach(main => {
    main.style.color = 'red';
    main.style.fontFamily = 'Eater';
    main.style.fontSize = screenWidth > 399 ? '30px':'22px';
  })
 
  destiniVar.forEach(destiniVar => {
    destiniVar.style.fontFamily = 'Eater';
    destiniVar.style.fontSize = screenWidth > 399 ? '24px' : '18px';
    destiniVar.style.color = 'white';
  })
 
  details.forEach(details => {
    details.style.fontFamily = 'Eater';
    details.style.fontSize = screenWidth > 399 ? '22px': '16px' ;
    details.style.color = 'white';
  })
 
  leftMsg.style.fontSize = screenWidth > 399 ? '15px' : '10px';
  leftMsg.style.fontFamily = 'Nosifer';
  leftMsg.style.color = 'white'; 

  one.forEach(one => {
    one.style.color = 'red';
    one.style.fontFamily = 'Eater';
    one.style.fontSize = screenWidth > 399 ? '18px' : '12px';
  })
  two.forEach(two => {
    two.style.fontSize = screenWidth > 399 ? '15px': '10px';
    two.style.fontFamily = 'Nosifer';
    two.style.color = 'white';
  })
}

let spinContainer = document.querySelector('.spinner-Container');
 
let home = () => {
  // Clear local storage before navigating
  localStorage.removeItem('deathYear');
  localStorage.removeItem('deathMonth');
  localStorage.removeItem('deathDay');
  localStorage.removeItem('destini');
  localStorage.removeItem('causeOfDeath');
  // Redirect to the home page
  spinContainer.style.display = 'block';

  setTimeout(function(){
    window.location.href = './index.html';
    spinContainer.style.display = 'none';
  },1500);
}

document.getElementById('home').addEventListener('click', home);
document.getElementById('Homebtn').addEventListener('click', home);

console.timeEnd("Timer")
