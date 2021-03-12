import * as draw from './draw.js';

export function down(shape, cellsInARow) {
    const cells = document.querySelectorAll('.cell');
    const isTaken = shape.some(index => {
        return cells[index + cellsInARow].classList.value.includes('taken');
    });
    if (!isTaken) {
        draw.erase(shape);
        for (let i = 0; i < shape.length; i++) {
            shape[i] += cellsInARow;
        }
        draw.shape(shape);
    } else {
        for (let i = 0; i < shape.length; i++) {
            cells[shape[i]].classList.add('taken');
        }
    }
}

export function right(shape) {
    const isRightEdge = shape.some(index => (index + 1) % 10 === 0);
    if (!isRightEdge) {
        draw.erase(shape);
        for (let i = 0; i < shape.length; i++) {
            shape[i] += 1;
        }
        draw.shape(shape);
    }
}

export function left(shape) {
    const isLeftEdge = shape.some(index => index % 10 === 0);
    if (!isLeftEdge) {
        draw.erase(shape);
        for (let i = 0; i < shape.length; i++) {
            shape[i] -= 1;
        }
        draw.shape(shape);
    }
}