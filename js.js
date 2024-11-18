let currentLight = 0;

function changeLight() {
    const lights = [
        document.getElementById('red'),
        document.getElementById('yellow'),
        document.getElementById('green')
    ];
    lights[currentLight].classList.remove('active');
    currentLight = (currentLight + 1) % lights.length;
    lights[currentLight].classList.add('active');
}
