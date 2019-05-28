const divService = document.querySelectorAll('.service');
const offersHeight = document.querySelector('#offers').offsetTop;

const serviceAnimation = () => {
    divService.forEach((item) => {
        item.style.marginLeft = 5 + '%';
    });
}

const serviceAnimationDesktop = () => {
    divService.forEach((item) => {
        item.style.opacity = 1;
    });
}

window.addEventListener('scroll', () => {
    if (window.innerWidth < 768) {
        if (offersHeight <= window.scrollY + 50) {
            setInterval(serviceAnimation, 1000);
        }
    } else {
        if (offersHeight <= window.scrollY + 50) {
            setInterval(serviceAnimationDesktop, 1000);
        }
    }
});