export function board(target, rows, columns) {
    let createdRows = [];
    for (let j = 0; j < rows; j++) {
        let row = document.createElement('div');
        row.className = 'row';

        for (let i = 0; i < columns; i++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        target.appendChild(row);

        createdRows.push(row);
    }
    return createdRows;
}

export function shape(shapeIndexes) {
    const cells = document.querySelectorAll('.cell');
    for (let i = 0; i < shapeIndexes.length; i++) {
        let index = shapeIndexes[i];
        cells[index].classList.add('block');
    }
}

export function erase(shapeIndexes) {
    const cells = document.querySelectorAll('.cell');
    for (let i = 0; i < shapeIndexes.length; i++) {
        let index = shapeIndexes[i];
        cells[index].classList.remove('block');
    }
}