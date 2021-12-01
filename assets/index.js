var date = new Date("November 06, 2022 00:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var remaining = date - now;

    var days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remaining % (1000 * 60)) / 1000);

    if (seconds >= 0) {
        document.getElementById("days").innerHTML = days;
        document.getElementById("days-text").innerHTML = "Days";
        document.getElementById("hrs").innerHTML = hours;
        document.getElementById("hrs-text").innerHTML = "Hours";
        document.getElementById("mins").innerHTML = minutes;
        document.getElementById("mins-text").innerHTML = "Minutes";
        document.getElementById("secs").innerHTML = seconds;
        document.getElementById("secs-text").innerHTML = "Seconds";
        document.getElementById("till-text").innerHTML = "till";
        document.getElementById("birthday-text").innerHTML = "Bui's birthday";
    }
    else {
        document.getElementById("days").innerHTML = "";
        document.getElementById("days-text").innerHTML = "";
        document.getElementById("hrs-text").innerHTML = "";
        document.getElementById("mins-text").innerHTML = "";
        document.getElementById("secs").innerHTML = "";
        document.getElementById("secs-text").innerHTML = "";
        
        document.getElementById("hrs").innerHTML = "Happy";
        document.getElementById("mins").innerHTML = "Birthday";
        document.getElementById("till-text").innerHTML = "my";
        document.getElementById("birthday-text").innerHTML = "Baby <3";
    }
}, 1000);
