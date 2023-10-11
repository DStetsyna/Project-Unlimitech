function startCountdown(endDate) {
    const interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = endDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;

        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("days").textContent = 0;
            document.getElementById("hours").textContent = 0;
            document.getElementById("minutes").textContent = 0;
            document.getElementById("seconds").textContent = 0;
        }
    }, 1000);
}

const endDate = new Date().getTime() + (10 * 24 * 60 * 60 * 1000);
startCountdown(endDate);