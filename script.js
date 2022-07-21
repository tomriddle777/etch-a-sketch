let divsRow = [],  divsGrid = [], rowDivider = [];

for (let i = 0; i < 16; i++) {
  divsRow = [];
  rowDivider[i] = document.createElement('div');
  rowDivider[i].classList.add('row-div');
  for (let j = 0; j < 16; j++) {
    divsRow[j] = document.createElement('div');
    divsRow[j].classList.add('square', `row-${i + 1}`, `col-${j + 1}`);
  }
  divsGrid[i] = divsRow;
}

const divsContainer = document.querySelector('.divs-container');

for (let i = 0; i < 16; i++) {
  divsContainer.appendChild(rowDivider[i]);
}

const rowDiv = document.querySelectorAll('.row-div');
let rowArray = []

rowDiv.forEach(row => rowArray.push(row));

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    rowArray[i].appendChild(divsGrid[i][j]);
  }
}