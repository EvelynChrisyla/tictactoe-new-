// script.js

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameEnded = false;
let submitButtonEnabled = false; // Add a variable to track if the Submit button should be enabled

function performMove(cellIndex) {
  if (board[cellIndex] === '' && !gameEnded) {
    board[cellIndex] = currentPlayer;
    document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
    document.getElementsByClassName('cell')[cellIndex].style.backgroundColor = currentPlayer === 'X' ? 'lightgreen' : 'lightpink';
    
    if (checkWin()) {
      if (currentPlayer === 'X') {
        document.getElementById('result').innerText = 'You win, bot loses!';
        submitButtonEnabled = true; // Set the flag to enable the Submit button
      } else {
        document.getElementById('result').innerText = 'You lose, bot wins!';
      }
      gameEnded = true;
      document.getElementById('scoreInput').value = 1;
    } else if (board.indexOf('') === -1) {
      document.getElementById('result').innerText = 'Draw!';
      gameEnded = true;
      document.getElementById('scoreInput').value = 0;
      submitButtonEnabled = true; // Set the flag to enable the Submit button
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      if (currentPlayer === 'O') {
        botMove();
      }
    }
    
    // Update the Submit button state
    const submitButton = document.querySelector('#scoreForm input[type="submit"]');
    submitButton.disabled = !submitButtonEnabled;
  }
}

function checkWin() {
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  for (let combination of winCombinations) {
    if (
      board[combination[0]] === currentPlayer &&
      board[combination[1]] === currentPlayer &&
      board[combination[2]] === currentPlayer
    ) {
      return true;
    }
  }
  
  return false;
}

function enableSubmitButton() {
  const submitButton = document.querySelector('#scoreForm input[type="submit"]');
  submitButton.removeAttribute('disabled');
}

function newGame() {
  // Reset the game state
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameEnded = false;

  // Clear the board and result display
  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
    cells[i].style.backgroundColor = 'lightblue';
  }
  document.getElementById('result').innerText = '';

  // Disable the Submit button
  const submitButton = document.querySelector('#scoreForm input[type="submit"]');
  submitButton.setAttribute('disabled', 'disabled');
  submitButtonEnabled = false; // Reset the flag for enabling the Submit button
}

// Rest of the code...
