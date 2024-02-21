// Code for 2nd page
let username = document.getElementById("name");
let dob = document.getElementById("dob");
let email = document.getElementById("email");
let smoke = document.getElementById("smoke");
let drink = document.getElementById("drink");
let form = document.querySelector("form");

smoke.value = '';
drink.value = '';

let smokeStatus = '';
let drinkStatus = '';
let spinContainer = document.querySelector('.spinner-Container');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  smokeStatus = smoke.value;
  drinkStatus = drink.value;
  username.value = '';
  dob.value = '';
  email.value = '';
  smoke.value = '';
  drink.value = '';
  spinContainer.style.display = 'block';
  setTimeout(function(){
    window.location.href = "3rd.html";
  },1500);
});