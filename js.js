let luzAtiva = 0;

function mudaCor() {
    const luz = [
        document.getElementById('red'),
        document.getElementById('yellow'),
        document.getElementById('green')
    ];
    luz[luzAtiva].classList.remove('ativo');
    luzAtiva = (luzAtiva + 1) % luz.length;
    luz[luzAtiva].classList.add('ativo');
}
