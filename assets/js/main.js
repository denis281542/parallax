const bg = document.getElementById('bg');
const moon = document.getElementById('moon');
const mountain = document.getElementById('mountain');
const road = document.getElementById('road');
const parallaxTitle = document.getElementById('parallax-title');

window.addEventListener('scroll', () => {
    let value = window.pageYOffset;

    bg.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    mountain.style.top = -value * 0.15 + 'px';
    road.style.top = value * 0.15 + 'px';
    parallaxTitle.style.top = value * 1.5 + 'px';
})