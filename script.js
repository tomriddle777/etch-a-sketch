let originalSize = 16, newSize = 0;

createGrid(originalSize, newSize);

button = document.querySelector('button');
button.addEventListener('click', () => {
  let answer = prompt("Enter amount of squares per side (max. 100): ");
  if (answer && answer <= 100) {
    newSize = answer;
  } else {
    alert("ERROR");
  }
  createGrid(newSize, originalSize);
  originalSize = newSize;
})

function createGrid (size, original) {
  let divsRow = [],  divsGrid = [], rowDivider = [];
  const divsContainer = document.querySelector('.divs-container');

  if (newSize != 0){
    const rowDiv = document.querySelectorAll('.row-div');
    for (let i = 0; i < original; i++) {
      divsContainer.removeChild(rowDiv[i]);
    }
  }

  rowDivider = [];

  for (let i = 0; i < size; i++) {
    divsRow = [];
    rowDivider[i] = document.createElement('div');
    rowDivider[i].classList.add('row-div');
    for (let j = 0; j < size; j++) {
      divsRow[j] = document.createElement('div');
      divsRow[j].classList.add('square', `row-${i + 1}`, `col-${j + 1}`);
    }
    divsGrid[i] = divsRow;
  }

  for (let i = 0; i < size; i++) {
    divsContainer.appendChild(rowDivider[i]);
  }

  const rowDiv = document.querySelectorAll('.row-div');
  let rowArray = [];

  rowDiv.forEach(row => rowArray.push(row));

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      divsGrid[i][j].addEventListener('mouseover', () => divsGrid[i][j].classList.add('changed'));
      rowArray[i].appendChild(divsGrid[i][j]);
    }
  }
}