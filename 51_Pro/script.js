const getdate = ()=>{
    let d = new Date();
    let hours = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let da = d.getDate();
    let mon = d.getMonth();
    let ye = d.getFullYear();
    let dy = d.getDay();
    let me = "AM";

    if(hours > 12){
        me = "PM";
        hours = hours-12;
    }
    if(hours === 0){
        hours = 12;
    }
    if(hours < 10){
        hours = "0"+hours
    }

    if(min < 10){
        min = "0"+min;
    }
    if(sec < 10){
        sec = "0" + sec
    }

    if(da <10){
        da = "0"+da;
    }
    if(mon <10){
        mon = "0" + mon
    }

    // Day Ka zhol
    if(dy == 0){
        dy = "Sunday";
    }
    else if(dy == 1){
        dy = "Monday"
    }
    else if(dy == 2){
        dy = "Tuesday"
    }
    else if(dy == 3){
        dy = "Wednesday"
    }
    else if(dy == 4){
        dy = "Thurday"
    }
    else if(dy == 5){
        dy = "Friday"
    }
    else if(dy == 6){
        dy = "Saturday"
    }
    else{
        dy ="Some"
    }




    let h = document.getElementById("h")
    let m = document.getElementById("m")
    let s = document.getElementById("s")
    let md = document.getElementById("me")
    let dw = document.getElementById("date")
    let mo = document.getElementById("month")
    let y = document.getElementById("year")
    let day = document.getElementById("day")

    h.innerHTML = hours;
    m.innerHTML = min;
    s.innerHTML = sec;
    md.innerHTML = me;
    dw.innerHTML = da;
    mo.innerHTML = mon
    y.innerHTML = ye
    day.innerHTML = dy;    

}

setInterval(getdate,1000)