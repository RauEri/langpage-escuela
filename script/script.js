// Inicio Class scrolled y scroll-banner 
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    const div = document.getElementById('banner-conteiner');
    if (window.scrollY > 50) {
        div.classList.add('scroll-banner');
    } else {
        div.classList.remove('scroll-banner')
    }
});
// Fin del Class scrolled y scroll-banner

// Inicio Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Fin Smooth scroll

// Inicio menu hamburguesa
document.getElementById('hamburguer').addEventListener('click', function () {
    document.querySelector('.main-menu').classList.toggle('open');
});
// Fin menu hamburguesa

// Inicio de Carrusel
// let currentIndex = 0;
// let autoplayInterval = null;

// document.querySelector('.prev-button').addEventListener('click', () => {
//     navigate(-1);
//     restartAutoplay();
// });

// document.querySelector('.next-button').addEventListener('click', () => {
//     navigate(1);
//     restartAutoplay();
// });

// function navigate(direction) {
//     const galleryContainer = document.querySelector('.gallery-container');
//     const totalImages = document.querySelectorAll('.gallery-item').length;

//     currentIndex = (currentIndex + direction + totalImages) % totalImages;
//     const offset = -currentIndex * 100;

//     galleryContainer.style.transform = `translateX(${offset}%)`;
// }

// function startAutoplay(interval) {
//     stopAutoplay(); // Detiene cualquier autoplay anterior para evitar múltiples intervalos.
//     autoplayInterval = setInterval(() => {
//         navigate(1); // Navega a la siguiente imagen cada intervalo de tiempo.
//     }, interval);
// }

// function stopAutoplay() {
//     clearInterval(autoplayInterval);
// }

// function restartAutoplay() {
//     stopAutoplay();
//     startAutoplay(5000); // Reinicia el autoplay con un intervalo de 3 segundos.
// }

// // Iniciar autoplay con un intervalo de 3 segundos.
// startAutoplay(5000);

// // Detener autoplay cuando el usuario interactúa con los botones de navegación.
// document.querySelectorAll('.nav-button').forEach(button => {
//     button.addEventListener('click', () => {
//         stopAutoplay();
//         restartAutoplay(); // Reinicia el autoplay después de detenerlo.
//     });
// });

// // Detener autoplay cuando el mouse está sobre la galería y reiniciarlo cuando se sale.
// document.querySelector('.gallery-container').addEventListener('mouseover', stopAutoplay);
// document.querySelector('.gallery-container').addEventListener('mouseout', restartAutoplay);
// Fin de Carrusel