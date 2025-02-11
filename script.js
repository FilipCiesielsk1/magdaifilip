document.addEventListener('DOMContentLoaded', function () {
    // Countdown Timer
    const countdownElement = document.getElementById('countdown');
    const weddingDate = new Date('2025-08-14T17:00:00');

    function updateCountdown() {
        const now = new Date();
        const timeLeft = weddingDate - now;
        // const timeLeft = 0;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = String(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
        const minutes = String(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        const seconds = String(Math.floor((timeLeft % (1000 * 60)) / 1000)).padStart(2, '0');

        let sDays = 'dni'
        let sHours = 'godzin'
        let sMinutes = 'minut'
        let sSeconds = 'sekundy'

        if (days === 1) {sDays = 'dzień'} else {sDays = 'dni'}
        switch (true) {
            case hours === 1:
                sHours = 'godzina'
                break;
            case hours > 1 && hours < 5:
                sHours = 'godziny'
                break;
            case hours > 4 && hours < 22:
                sHours = 'godzin'
                break;
            case hours > 21:
                sHours = 'godziny'
                break;
        }
        switch (true) {
            case minutes === 1:
                sMinutes = 'minuta'
                break;
            case minutes > 1 && minutes < 5:
                sMinutes = 'minuty'
                break;
            case minutes > 4 && minutes < 22:
                sMinutes = 'minut'
                break;
            case minutes > 21 && minutes < 25:
                sMinutes = 'minuty'
                break;
            case minutes > 24 && minutes < 32:
                sMinutes = 'minut'
                break;
            case minutes > 31 && minutes < 35:
                sMinutes = 'minuty'
                break;
            case minutes > 34 && minutes < 42:
                sMinutes = 'minut'
                break;
            case minutes > 41 && minutes < 45:
                sMinutes = 'minuty'
                break;
            case minutes > 44 && minutes < 52:
                sMinutes = 'minut'
                break;
            case minutes > 51 && minutes < 55:
                sMinutes = 'minuty'
                break;
            case minutes > 54:
                sMinutes = 'minut'
                break;
        }
        switch (true) {
            case seconds === 1:
                sSeconds = 'sekunda'
                break;
            case seconds > 1 && seconds < 5:
                sSeconds = 'sekundy'
                break;
            case seconds > 4 && seconds < 22:
                sSeconds = 'sekund'
                break;
            case seconds > 21 && seconds < 25:
                sSeconds = 'sekundy'
                break;
            case seconds > 24 && seconds < 32:
                sSeconds = 'sekund'
                break;
            case seconds > 31 && seconds < 35:
                sSeconds = 'sekundy'
                break;
            case seconds > 34 && seconds < 42:
                sSeconds = 'sekund'
                break;
            case seconds > 41 && seconds < 45:
                sSeconds = 'sekundy'
                break;
            case seconds > 44 && seconds < 52:
                sSeconds = 'sekund'
                break;
            case seconds > 51 && seconds < 55:
                sSeconds = 'sekundy'
                break;
            case seconds > 54:
                sSeconds = 'sekund'
                break;
        }

        const isMobile = window.innerWidth <= 768;
        
        if (timeLeft < 1) {countdownElement.innerHTML = 'POBRALIŚMY SIĘ!'} else
            countdownElement.innerHTML = isMobile 
            ? `${days} ${sDays}<br>${hours}:${minutes}:${seconds}`  // Skrócona wersja dla mobile
            : `${days} ${sDays} ${hours} ${sHours} ${minutes} ${sMinutes} ${seconds} ${sSeconds}`; // Pełna wersja dla desktopu
            
        
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
