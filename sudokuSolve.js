let num = ['1','2','3','4','5','6','7','8','9'];

function getCandidates(board, row, col) {
  let candidates = [];
  
  for(chr of num) {
    for(i in num) {
      if(chr !== board[row][i] && chr !== board[i][col] && chr !== board[][]) {
        candidates.push(chr)
      }
    }
  }
  
  return candidates;
}

function sudokuSolve(board) {
  
  let candidates = null;
  let row = -1;
  let col = -1;
  
  for (r in num) {
    for (c in num) {
      if (board[r][c] === '.') {
        
        newCandidates = getCandidates(board, r, c);
        
        if(candidates == null || newCandidates.length < candidates.length) {
          candidates = newCandidates;
          row = r;
          col = c;
        }
      }
    }
  }
  
  if(candidates == null)
    return true;
  
  for(val of candidates) {
    board[row][col] = val;
    if(sudokuSolve(board))
      return true;
    
    board[row]col] = '.';
  }
  
  return false;
}


let board = [['5','3','.','7','.','.','.','.','.'],
             ['6','.','.','1','9','5','.','.','.'],
             ['.','9','8','.','.','.','.','6','.'],
             ['8','.','.','.','6','.','.','.','3'],
             ['4','.','.','8','.','3','.','.','.'],
             ['7','.','.','.','2','.','.','.','.'],
             ['.','6','.','.','.','.','2','8','.'],
             ['.','.','.','4','1','9','.','.','5'],
             ['.','.','.','.','8','.','.','7','9']]
