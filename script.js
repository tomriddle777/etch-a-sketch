let divsRow = [],  divsGrid = [], rowDivider = [];

for (let i = 0; i < 16; i++) {
  divsRow = [];
  rowDivider[i] = document.createElement('div')
  for (let j = 0; j < 16; j++) {
    divsRow[j] = document.createElement('div');
    divsRow[j].classList.add('square', `row-${i + 1}`, `col-${j + 1}`);
  }
  divsGrid[i] = divsRow;
}

const divsContainer = document.querySelector('.divs-container');

for (let i = 0; i < 16; i++) {
  let row = divsGrid[i];
  for (let j = 0; j < 16; j++) {
    divsContainer.appendChild(row[j]);
  }
}

