let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let player1 = 'X';
let player2 = 'O';
let currentPlayer = player1;
let winner = null;

function makeMove(row, col) {
    if (!board[row][col] && !winner) {
        board[row][col] = currentPlayer;
        currentPlayer = currentPlayer === player1 ? player2 : player1; // mudar o jogador antes de ver o vencedor
        checkWinner(); // ver quem ganhou dps alternar o jogador
        render();
    }
}

function checkWinner() {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
            winner = board[i][0];
            return;
        }
        if (board[0][i] && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
            winner = board[0][i];
            return;
        }
    }
    if ((board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) ||
        (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0])) {
        winner = board[1][1];
        return;
    }
}

function render() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;
        cell.innerText = board[row][col];
    });

    const message = document.getElementById('message');
    const turnText = document.getElementById('turn'); // pra mostrar a vez do jogador
    if (winner) {
        if (winner === player1) {
            message.innerText = 'X ganhou! Arrasou mona!';
        } else if (winner === player2) {
            message.innerText = 'O ganhou! Humilhou e pisou em cima!';
        }
        turnText.innerText = 'Fim de Jogo'; // mostrar "fim de jopo" quando a partida acabar
    } else if (board.every(row => row.every(cell => cell))) {
        message.innerText = 'Empatadissimas';
        turnText.innerText = 'Fim de Jogo'; // mostrar "fim de jopo" quando a partida acabar
    } else {
        message.innerText = '';
        turnText.innerText = "É a vez do " + currentPlayer; // mostra a vez do jogador atual
    }
}

function restartGame() {
    // limpar o tabuleiro
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    // reiniciar as variaveis pra reiniciar o jogo
    currentPlayer = 'X';
    winner = null;

    // renderizar o tabuleiro
    render();
}
