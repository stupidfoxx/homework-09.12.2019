const field = [
  [1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];
const curPos = { x: 0, y: 0 };
console.log(field[curPos.y][curPos.x]);

function render() {
  const conteiner = document.querySelector('.conteiner');
  let str = '';
  for (const row of field) {
    for (const cell of row) {
      console.log(cell);
      if (cell === 1) {
        str = `${str}<div class="visit"></div>`;
      } else {
        str = `${str}<div></div>`;
      }
    }
  }
  conteiner.innerHTML = str;
}

function move(x, y) {
  if (
    (curPos.x === 4 && x === 1)
        || (curPos.x === 0 && x === -1)
        || (curPos.y === 4 && y === 1)
        || (curPos.y === 0 && y === -1)
  ) {
    return;
  }

  field[curPos.y][curPos.x] = 0;
  curPos.x += x;
  curPos.y += y;
  field[curPos.y][curPos.x] = 1;
  render();
}

const up = document.querySelector('.up');
const left = document.querySelector('.left');
const bottom = document.querySelector('.bottom');
const right = document.querySelector('.right');

up.addEventListener('click', () => {
  move(0, -1);
});
right.addEventListener('click', () => {
  move(1, 0);
});
bottom.addEventListener('click', () => {
  move(0, 1);
});
left.addEventListener('click', () => {
  move(-1, 0);
});
render();
