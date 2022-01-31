(function() {
    const countdownContainer = document.querySelector('.header__banner-h1');
    const startTime = new Date();
    const limitSecs = 10;
    
    const intervalId = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const currentTime = new Date();
        const intervalSecs = Math.round((currentTime - startTime) / 1000);
        const leftSecs = limitSecs - intervalSecs;
        countdownContainer.innerText = leftSecs;
        if (leftSecs <= 0) {
            countdownContainer.innerText = 'Stickerz';
            // document.body.style.backgroundColor = 'black';
            clearInterval(intervalId);
        }
    }

})();