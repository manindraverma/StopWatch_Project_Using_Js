let hours='00';
let minutes="00";
let seconds="00";
let miliseconds="00";

//fetched all the html elements using queryselector
let getHours=document.querySelector('.hours');
let getMinutes=document.querySelector('.minutes');
let getSeconds=document.querySelector('.seconds');
let getMiliseconds=document.querySelector('.miliseconds');
let btnStart=document.querySelector('.btn-start');
let btnStop=document.querySelector('.btn-stop');
let btnReset=document.querySelector('.btn-reset');
//creating a new identifier to store the setInterval id
let interval;



//pressing start button will invoke on click addeventListner function to start the stopWatch...
btnStart.addEventListener('click',()=>{
    //after first click on start button ,it is disabled
    btnStart.disabled=true;
    //setInterval function is used to invoke the startTimer function after every 10ms and store the  Id as in interval variable returned from the setInterval
    interval=setInterval(startTimer,10);
}
)


//pressing stop button will invoke on click addeventListner function to stop the stopWatch...
btnStop.addEventListener('click',()=>{
    //clearInterval function receives the interval id as argument and clear  the timer set with setinterval method as in above function
    clearInterval(interval);
    //enable the start button as soon as we click on stop button
    btnStart.disabled=false;
})

//pressing reset button will invoke on click addeventListner function to reset  the stopWatch to inital state...
btnReset.addEventListener('click',()=>{
    
    //firstly we invoke clearInterval function and pass the interval variable 
    clearInterval(interval);
    //enable the start button as soon as we click on reset button
    btnStart.disabled=false;
    miliseconds="00";
    seconds="00";
    minutes="00";
    hours="00";
    getHours.innerHTML=hours;
    getMinutes.innerHTML=minutes;
    getSeconds.innerHTML=seconds;
    getMiliseconds.innerHTML=miliseconds;
})


//startTimer function describes the working of the stopWatch
function startTimer(){
    miliseconds++;
    if(miliseconds<=9){
        getMiliseconds.innerHTML='0'+miliseconds;
    }
    if(miliseconds>9){
        getMiliseconds.innerHTML=miliseconds;
    }
    if(miliseconds>99){
        seconds++;
        if(seconds<=9){
            getSeconds.innerHTML='0'+seconds;
            miliseconds=0;
            getMiliseconds.innerHTML='0'+miliseconds;
        }
        if(seconds>9){
            getSeconds.innerHTML=seconds;
            miliseconds=0;
            getMiliseconds.innerHTML='0'+miliseconds;
        }
    }
    if(seconds>59){
        minutes++;
        if(minutes<=9){
            getMinutes.innerHTML='0'+minutes;
            seconds=0;
            getSeconds.innerHTML='0'+seconds;
        }
        if(minutes>9){
            getMinutes.innerHTML=minutes;
            seconds=0;
            getSeconds.innerHTML='0'+seconds;
        }
    }

    if(minutes>59){
        hours++;
        if(hours<=9){
            getHours.innerHTML='0'+hours;
            minutes=0;
            getMinutes.innerHTML='0'+minutes;
        }
        if(hours>9){
            getHours.innerHTML=hours;
            minutes=0;
            getMinutes.innerHTML='0'+minutes;
        }
    }
}