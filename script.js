const boardElem = document.getElementById('board');
const statusElem = document.getElementById('status');
let board, currentPlayer, gameActive;
function initGame() {
    board = Array(9).fill('');
    currentPlayer = 'X';
    gameActive = true;
    statusElem.textContent = "Player X's turn";
    renderBoard();
}
function renderBoard() {
    boardElem.innerHTML = '';
    board.forEach((cell, idx) => {
        const cellElem = document.createElement('div');
        cellElem.className = 'cell';
        cellElem.textContent = cell;
        cellElem.onclick = () => handleCellClick(idx);
        boardElem.appendChild(cellElem);
    });
}
function handleCellClick(idx) {
    if (!gameActive || board[idx]) return;
    board[idx] = currentPlayer;
    renderBoard();
    if (checkWin()) {
        statusElem.textContent = `Player ${currentPlayer} wins!`;
        gameActive = false;
    } else if (board.every(cell => cell)) {
        statusElem.textContent = "It's a draw!";
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusElem.textContent = `Player ${currentPlayer}'s turn`;
    }
}
function checkWin() {
    const wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
        [0, 4, 8], [2, 4, 6] // diags
    ];
    return wins.some(line =>
        line.every(idx => board[idx] === currentPlayer)
    );
}
function resetGame() {
    initGame();
}
initGame();