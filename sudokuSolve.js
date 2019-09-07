let num = ['1','2','3','4','5','6','7','8','9'];

function getCandidates(board, row, col) {
  let candidates = [];
  
  for(let chr of num) {
    let collision = false;
    for(let i in num) {
      if(chr == board[row][i] || chr == board[i][col] || chr == board[(row - row%3)+ Math.floor(i/3)][(col-col%3)+i%3]) {
        collision = true;
        break;
      }
    }
    if(!collision) {
      candidates.push(chr);
    }
  }
  
  return candidates;
}

function sudokuSolve(board) {
  
  let candidates = null;
  let row = -1;
  let col = -1;
  
  for (let r in num) {
    for (let c in num) {
      if (board[r][c] == '.') {
        
        let newCandidates = getCandidates(board, r, c);
        
        if(candidates == null || newCandidates.length < candidates.length) {
          candidates = newCandidates;
          row = r;
          col = c;
        }
      }
    }
  }
  
  if(candidates == null) {
    return true;
  }
  
  for(let val of candidates) {
    board[row][col] = val;
    if(sudokuSolve(board)) {
      return true;
    }
    
    board[row][col] = '.';
  }
  
  return false;
}


let board = [['5','3','.','.','7','.','.','.','.'],
             ['6','.','.','1','9','5','.','.','.'],
             ['.','9','8','.','.','.','.','6','.'],
             ['8','.','.','.','6','.','.','.','3'],
             ['4','.','.','8','.','3','.','.','.'],
             ['7','.','.','.','2','.','.','.','.'],
             ['.','6','.','.','.','.','2','8','.'],
             ['.','.','.','4','1','9','.','.','5'],
             ['.','.','.','.','8','.','.','7','9']];

// sudokuSolve(board);

console.log(sudokuSolve(board));
console.log(board);
