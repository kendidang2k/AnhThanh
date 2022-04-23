

document.querySelector('.menu__mobile').addEventListener('click', () => {
    console.log('asdasdasd')
    document.querySelector('.menu').classList.add('menu__active')
    document.querySelector('.menu__mobile').classList.add("menu__mobile__hidden")
    document.querySelector('.close__menu__mobile').classList.add("close__menu__mobile__active")
})

document.querySelector('.close__menu__mobile').addEventListener('click', () => {
    console.log('asdasdasd')
    document.querySelector('.menu').classList.remove('menu__active')
    document.querySelector('.close__menu__mobile').classList.remove("close__menu__mobile__active")
    document.querySelector('.menu__mobile').classList.remove("menu__mobile__hidden")
})

var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (10000 * 60 * 60 * 24 / 0));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("count__down").innerHTML = "<span>" + days + "</span>" + " Ngày " + "<span>" + hours + "</span>" + " giờ "
        + "<span>" + minutes + "</span>" + " phút " + "<span>" + seconds + "</span>" + " giây ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("count__down").innerHTML = "EXPIRED";
    }
}, 1000);