document.addEventListener("DOMContentLoaded", function() {
    const valentines = document.querySelector('.valentines');
    const card = document.querySelector('.card');
    const layer = document.querySelector('.layer');

    valentines.addEventListener('click', function() {
        card.style.top = '-68px';
        layer.style.display = 'block'
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const layer = document.querySelector('.layer');
    const card = document.querySelector('.card');

    layer.addEventListener('click', function() {
        card.style.top = '5px';
        layer.style.display = 'none'
    });
});

