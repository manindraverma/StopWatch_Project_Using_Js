let hours='00';
let minutes="00";
let seconds="00";
let miliseconds="00";

let getHours=document.querySelector('.hours');
let getMinutes=document.querySelector('.minutes');
let getSeconds=document.querySelector('.seconds');
let getMiliseconds=document.querySelector('.miliseconds');
let btnStart=document.querySelector('.btn-start');
let btnStop=document.querySelector('.btn-stop');
let btnReset=document.querySelector('.btn-reset');
let interval;

btnStart.addEventListener('click',()=>{
    btnStart.disabled=true;
    interval=setInterval(startTimer,10);
}
)

btnStop.addEventListener('click',()=>{
    clearInterval(interval);
    btnStart.disabled=false;
})

btnReset.addEventListener('click',()=>{
    
    clearInterval(interval);
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