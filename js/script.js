let noon = 12;
let evening = 18; // 6PM
let wakeupTime = 9; // 9AM
let lunchTime = 12; // 12PM
let wineTime = 17; // 5PM
let coffeeTime = lunchTime + 2; // 2PM
let time = new Date().getHours();

let updateClock = function()
{
    let messageText;
    let message = document.getElementById('timeEvent');
    let dayTime = document.getElementById('dayTime');
    let image = "https://images.unsplash.com/photo-1575203091586-611fe505bb0e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80";
 
    if (time == wineTime){
        image = "https://images.unsplash.com/photo-1503427948460-3ca3eb79c566?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3034&q=80";
        messageText = "It's time to enjoy some wine with friends!";
    } else if (time == coffeeTime) {
        image = "https://images.unsplash.com/photo-1561882468-9110e03e0f78?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3034&q=80";
        messageText = "Afternoon coffee break!";
    } else if (time == lunchTime) {
        image = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2100&q=80";
        messageText = "Let's eat some lunch!";
    } else if (time == wakeupTime) {
        image = "https://images.unsplash.com/photo-1517363898874-737b62a7db91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1858&q=80";
        messageText = "Morning zen to start fresh.";
    } else if (time < noon) { 
        messageText = "Good morning!"; 
    } else if (time > evening) {
        messageText = "Good Evening!";
    } else {
    messageText = "Good afternoon!";
    }
 
    message.innerText = messageText;
    dayTime.src = image;

showCurrentTime();
};

let showCurrentTime = function()
{
    //display the string on the webpage
    let clock = document.getElementById('clock');
    
    let currentTime = new Date();
    
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = "AM";
    
    //Set hours
    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours-12;
    }
    
    //Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
    
    //Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
    
    //put together the string that displays the time
    let clockTime = hours + ":" + minutes + ":" + seconds + ":" + meridian + "!";
    
    clock.innerText = clockTime;
};

updateClock();

let oneSecond = 1000;

setInterval(updateClock, oneSecond);

let wineTimeButton = document.getElementById("wineTimeButton");
let coffeeBreakSelector = document.getElementById("coffeeBreakSelector");
let lunchTimeSelector = document.getElementById("lunchTimeSelector");
let morningMeditationSelector = document.getElementById("morningMeditationSelector")
let isWineTime = false;
 
let wineEvent = function() {
 
   if (isWineTime === false) {
      isWineTime = true;
      time = wineTime;
      wineTimeButton.innerText = "CHEERS!";
      wineTimeButton.style.backgroundColor = "#00bfff";
   } else {
      isWineTime = false;
      time = new Date().getHours();
      wineTimeButton.innerText = "GLASS EMPTY";
      wineTimeButton.style.backgroundColor = "#008080";
   }
};

let lunchEvent = function (){
    lunchTime = lunchTimeSelector.value;
};

let morningMeditationEvent = function () {
    wakeupTime = morningMeditationSelector.value;
};

let coffeeEvent = function (){
    coffeeTime = coffeeBreakSelector.value;
};

wineTimeButton.addEventListener('click', wineEvent);
coffeeBreakSelector.addEventListener('change', coffeeEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
morningMeditationSelector.addEventListener('change', morningMeditationEvent);