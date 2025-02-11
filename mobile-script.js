document.addEventListener('DOMContentLoaded', function () {
    // Countdown Timer
    const countdownElement = document.getElementById('countdown');
    const weddingDate = new Date('2025-08-14T17:00:00');

    function updateCountdown() {
        const now = new Date();
        const timeLeft = weddingDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        let sDays = 'dni'

        if (days === 1) {sDays = 'dzień'} else {sDays = 'dni'}
        if (hours < 10) {hours = `0${hours}`}
        if (minutes < 10) {minutes = `0${minutes}`}
        if (seconds < 10) {seconds = `0${seconds}`}

        countdownElement.innerHTML = `${days} ${sDays}<br>${hours}:${minutes}:${seconds}`
        if (timeLeft < 1) {countdownElement.innerHTML = 'POBRALIŚMY SIĘ!'};
    }

    setInterval(updateCountdown, 1000);


    // Photo Upload
    const uploadPhoto = document.getElementById('upload-photo');
    const photoGallery = document.getElementById('photo-gallery');

    uploadPhoto.addEventListener('change', function () {
        const files = uploadPhoto.files;

        Array.from(files).forEach(file => {
            const reader = new FileReader();

            reader.onload = function (e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                photoGallery.appendChild(img);
            };

            reader.readAsDataURL(file);
        });
    });
});



window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollToTopBtn.classList.add("visible"); // Dodaj klasę visible
    } else {
      scrollToTopBtn.classList.remove("visible"); // Usuń klasę visible
    }
  }
  
  // Przewiń na górę po kliknięciu
  document.getElementById("scrollToTopBtn").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Płynne przewijanie
    });
  });
