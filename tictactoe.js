let board = [
    ['_', '_', '_'],
    ['_', '_', '_'],
    ['_', '_', '_']
];

let currentPlayer = 'X';

while (true) {
    for (let row of board) {
        console.log(row.join(' '));
    }

    let row = prompt('Jogador ' + currentPlayer + ', escolha a linha (0, 1, 2):');
    let col = prompt('Jogador ' + currentPlayer + ', escolha a coluna (0, 1, 2):');

    if (board[row][col] === '_') {
        board[row][col] = currentPlayer;

        for (let i = 0; i < 3; i++) {
            if (board[i][0] !== '_' && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
                console.log('Jogador ' + currentPlayer + ' venceu!');
                break;
            }
            if (board[0][i] !== '_' && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
                console.log('Jogador ' + currentPlayer + ' venceu!');
                break;
            }
        }
        if ((board[0][0] !== '_' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) ||
            (board[0][2] !== '_' && board[0][2] === board[1][1] && board[0][2] === board[2][0])) {
            console.log('Jogador ' + currentPlayer + ' venceu!');
            break;
        }

        let isDraw = true;
        for (let row of board) {
            if (row.includes('_')) {
                isDraw = false;
                break;
            }
        }
        if (isDraw) {
            console.log('Empate!');
            break;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    } else {
        console.log('Posição ocupada! Tente novamente.');
    }
}