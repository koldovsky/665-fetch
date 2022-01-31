(function() {
    function updateClock() {
        // const clockContainer = document.getElementsByClassName('clock')[0];
        const clockContainer = document.querySelector('.clock');
        clockContainer.textContent = new Date().toLocaleTimeString();
    }
    
    setInterval(updateClock, 1000);
})();



