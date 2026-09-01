let seconds = 3;
const countdown = document.getElementById("seconds");

const timer = setInterval(() => {
    seconds -= 1;
    countdown.textContent = seconds;

    if (seconds <= 0) {
        clearInterval(timer);
        window.location.href = "./mocks/index.html";
    }
}, 1000);