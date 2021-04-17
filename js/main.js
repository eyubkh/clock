const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

// minutes
const MinutesAnimationFront = document.querySelector('.clock-minutes-change-front');
const MinutesAnimationBack = document.querySelector('.clock-minutes-change-back');
const ChangeMinutesFace = document.getElementById('minutesChangeFace');
const ChangeMinutesBack = document.getElementById('minutesChangeBack');

// hours
const HoursAnimationFront = document.querySelector('.clock-hours-change-front');
const HoursAnimationBack = document.querySelector('.clock-hours-change-back');
const ChangeHoursFace = document.getElementById('hoursChangeFace');
const ChangeHoursBack = document.getElementById('hoursChangeBack');


function Time() {
    let currentDate = new Date();
    let currentHours = currentDate.getHours();
    let currentMinutes = currentDate.getMinutes();
    let currentSeconds = currentDate.getSeconds();
    
    Hours.innerHTML = currentHours < 10 ? '0' + currentHours : currentHours;
    Minutes.innerHTML = currentMinutes < 10 ? '0' + currentMinutes : currentMinutes;
    Seconds.innerHTML = currentSeconds < 10 ? '0' + currentSeconds : currentSeconds ;

    // animation change clock minutes
    ChangeMinutesFace.innerHTML = currentMinutes < 10 ? '0' + currentMinutes : currentMinutes;
    ChangeMinutesBack.innerHTML = currentMinutes < 10 ? '0' + currentMinutes : currentMinutes;

    if (currentSeconds == 59){
        MinutesAnimationFront.style.animation = 'clock-ani-f 2s ease';
        MinutesAnimationBack.style.animation = 'clock-ani-b 2s ease';
    }else if(currentSeconds == 3) {
        MinutesAnimationFront.style.animation = 'none';
        MinutesAnimationBack.style.animation = 'none';
    }

    
    // animation change Hours
    ChangeHoursFace.innerHTML = currentHours < 10 ? '0' + currentHours : currentHours;
    ChangeHoursBack.innerHTML = currentHours < 10 ? '0' + currentHours : currentHours;

    if(currentMinutes == 59 && currentSeconds == 59 ){
        HoursAnimationFront.style.animation = 'clock-ani-f 2s ease';
        HoursAnimationBack.style.animation = 'clock-ani-b 2s ease';
    } else if (currentMinutes == 1){
        HoursAnimationFront.style.animation = 'none';
        HoursAnimationBack.style.animation = 'none';
    }


    setTimeout( () =>{ 
        Time() 
    }, 1000)
}

Time();