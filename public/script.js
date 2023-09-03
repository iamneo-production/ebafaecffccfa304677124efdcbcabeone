const { Touchscreen } = require("puppeteer");

let currentPlayer = 'X';
let gameOver = false;

function makeMove(cell){
    if(!cell.textContent && !gameOver){
        cell.textContent = currentPlayer;
        checkWin();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        document.getElementById('result').textContent = "Player ${currentplayer}'s turn";
    }
}

function checkWin() {
    const cells = document.querySelectorAll('.cell');
}
function resetGame(){
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.textContent='');
    currentPlayer = 'X'
    gameOver = false;
    document.getElementById('result').textContent = "Player ${currentPlayer}'s turn"

}
resetGame();