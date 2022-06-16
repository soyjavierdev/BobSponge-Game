const startBtn = document.getElementById('startButton')

startBtn.onclick = () => {
    game.init('#canvas')
    startBtn.innerHTML = 'Restart'
    startBtn.style.backgroundColor = 'white'
    startBtn.style.color = 'black'
}
