document.getElementById('start').addEventListener('click', start);
let day, hour, min, sec;
let Day, Hour, Min, Sec;
let key = 1;

if (key === 1) {
    document.getElementById('start').style.display = 'block';
    document.getElementById('resume').style.display = 'none'
    document.getElementById('pause').style.display = 'none';
    document.getElementById('restart').style.display = 'none';
}

function start() {
    clearInterval(timer);
    day = Number(document.getElementById('day').value);
    hour = Number(document.getElementById('hour').value);
    min = Number(document.getElementById('minute').value);
    sec = Number(document.getElementById('second').value);

    if(sec > 59) {
        min = min + (sec / 60);
        sec = sec % 60;
    }

    if(min > 59) {
        hour += min / 60;
        min = min % 60;
    }

    if(hour > 23) {
        day += hour / 24
        hour = hour % 24;
    }
    
    Day = day;
    Hour = hour;
    Min = min;
    Sec = sec;

    if (Day < 10) {
        document.getElementById('day').value = ('0' + Day.toString());
    }
    else {
        document.getElementById('day').value = Day;
    }
    if (Hour < 10) {
        document.getElementById('hour').value = ('0' + Hour.toString());
    }
    else {
        document.getElementById('hour').value = Hour;
    }
    if (Min < 10) {
        document.getElementById('minute').value = ('0' + Min.toString());
    }
    else {
        document.getElementById('minute').value = Min;
    }
    if (Sec < 10) {
        document.getElementById('second').value = ('0' + Sec.toString());
    }
    else {
        document.getElementById('second').value = Sec;
    }

    if (Day === 0 && Min === 0 && Hour === 0 && Sec === 0) {
        alert("Enter Valid Time");
    } else {
        time();
        
        keyChange(2);

        document.getElementById('day').disabled = true;
        document.getElementById('hour').disabled = true;
        document.getElementById('minute').disabled = true;
        document.getElementById('second').disabled = true;
    }
}

var timer;

function time() {
    timer = setInterval(() => {
        if (Day === 0 && Min === 0 && Hour === 0 && Sec === 0) {
            clearInterval(timer);
            keyChange(1);
            alert("Done")
        }
        else {
            if (Sec === 0) {
                Sec = 59;
                if (Min === 0) {
                    Min = 59;
                    if (Hour === 0) {
                        Hour = 23
                        if (Day > 0) {
                            Day = Day - 1;
                        }
                    }
                    else {
                        Hour = Hour - 1;
                    }
                }
                else {
                    Min = Min - 1;
                }
            }
            else {
                Sec = Sec - 1;
            }
            if (Day < 10) {
                document.getElementById('day').value = ('0' + Day.toString());
            }
            else {
                document.getElementById('day').value = Day;
            }
            if (Hour < 10) {
                document.getElementById('hour').value = ('0' + Hour.toString());
            }
            else {
                document.getElementById('hour').value = Hour;
            }
            if (Min < 10) {
                document.getElementById('minute').value = ('0' + Min.toString());
            }
            else {
                document.getElementById('minute').value = Min;
            }
            if (Sec < 10) {
                document.getElementById('second').value = ('0' + Sec.toString());
            }
            else {
                document.getElementById('second').value = Sec;
            }
        }
    }, 1000);
}

document.getElementById('pause').addEventListener('click', pause);

function pause() {
    clearInterval(timer);
}

document.getElementById('restart').addEventListener('click', restart);
function restart() {
    clearInterval(timer);

    keyChange(2);

    Day = day;
    Hour = hour;
    Min = min;
    Sec = sec;

    if (Day < 10) {
        document.getElementById('day').value = ('0' + Day.toString());
    }
    else {
        document.getElementById('day').value = Day;
    }
    if (Hour < 10) {
        document.getElementById('hour').value = ('0' + Hour.toString());
    }
    else {
        document.getElementById('hour').value = Hour;
    }
    if (Min < 10) {
        document.getElementById('minute').value = ('0' + Min.toString());
    }
    else {
        document.getElementById('minute').value = Min;
    }
    if (Sec < 10) {
        document.getElementById('second').value = ('0' + Sec.toString());
    }
    else {
        document.getElementById('second').value = Sec;
    }

    time();
}

document.getElementById('reset').addEventListener('click', reset);
function reset() {
    clearInterval(timer);
    document.getElementById('day').value = '00';
    document.getElementById('hour').value = '00';
    document.getElementById('minute').value = '00';
    document.getElementById('second').value = '00';
    day = hour = min = sec = Day = Hour = Min = Sec = 0;
    keyChange(1);
    document.getElementById('day').disabled = false;
    document.getElementById('hour').disabled = false;
    document.getElementById('minute').disabled = false;
    document.getElementById('second').disabled = false;
}

document.getElementById('resume').addEventListener('click', resume);
function resume() {
    clearInterval(timer);

    time();
}


function keyChange(key) {
    if (key === 1) {
        document.getElementById('start').style.display = 'block';
        document.getElementById('resume').style.display = 'none'
        document.getElementById('pause').style.display = 'none';
        document.getElementById('restart').style.display = 'none';
    }
    if (key === 2) {
        document.getElementById('start').style.display = 'none';
        document.getElementById('resume').style.display = 'block'
        document.getElementById('pause').style.display = 'block';
        document.getElementById('restart').style.display = 'block';
    }
}