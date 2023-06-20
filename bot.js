// bot.js

function botMove() {
    if (!gameEnded) {
      let emptyCells = [];
      for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
          emptyCells.push(i);
        }
      }
  
      if (emptyCells.length > 0) {
        let randomIndex = Math.floor(Math.random() * emptyCells.length);
        let cellIndex = emptyCells[randomIndex];
        performMove(cellIndex);
      }
    }
  }
  
  function performMove(cellIndex) {
    if (board[cellIndex] === '' && !gameEnded) {
      board[cellIndex] = currentPlayer;
      document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
      document.getElementsByClassName('cell')[cellIndex].style.backgroundColor = currentPlayer === 'X' ? 'lightgreen' : 'lightpink';
  
      if (checkWin()) {
        if (currentPlayer === 'X') {
          document.getElementById('result').innerText = 'You win, bot loses!';
          submitButtonEnabled = true;
        } else {
          document.getElementById('result').innerText = 'You lose, bot wins!';
        }
        gameEnded = true;
        document.getElementById('scoreInput').value = 1;
      } else if (board.indexOf('') === -1) {
        document.getElementById('result').innerText = 'Draw!';
        gameEnded = true;
        document.getElementById('scoreInput').value = 0;
        submitButtonEnabled = true;
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        if (currentPlayer === 'O') {
          botMove();
        }
      }
  
      updateSubmitButtonState(); // Panggil fungsi untuk memperbarui status tombol Submit
    }
  }

  function updateSubmitButtonState() {
    const submitButton = document.querySelector('#scoreForm input[type="submit"]');
    submitButton.disabled = !submitButtonEnabled;
  }
  