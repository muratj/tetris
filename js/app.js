import * as draw from './draw.js';
import * as move from './move.js';
import * as shapes from './shapes.js';

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.querySelector('#start');
    const startMenu = document.querySelector('.menu');

    // wait until start button clicked
    startButton.addEventListener('click', () => {
        startButton.parentElement.style.zIndex = -1;
        startMenu.style.display = 'none';
        start();
    })

    // run the application
    function start() {
        const rowsInTheBoard = 24;
        const cellsInARow = 10;

        const gameBoard = document.querySelector('#game-board');

        let rows = draw.board(gameBoard, rowsInTheBoard, cellsInARow);

        // hiding rows for assistance 0,1 before and 22, 23 after
        rows.forEach((row, index) => {
            if (index < 2) {
                row.classList.add('hidden');
            }
            if (index > 21) {
                row.classList.add('hidden');
                row.childNodes.forEach(element => {
                    element.classList.add('taken');
                })
            }
        });

        let currentShape = shapes.getShape();

        draw.shape(currentShape);

        let intervalId = setInterval(() => {
            move.down(currentShape, cellsInARow);
            let shapeIsTaken = currentShape.some(index => {
                let cells = document.querySelectorAll('.cell');
                return cells[index].classList.contains('taken');
            })

            if (shapeIsTaken) {
                currentShape = shapes.getShape();
                if (currentShape === undefined) {
                    gameOver();
                }
            }

        }, 300);

        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'ArrowDown':
                    move.down(currentShape, cellsInARow);
                    break;
                case 'ArrowRight':
                    move.right(currentShape);
                    break;
                case 'ArrowLeft':
                    move.left(currentShape);
                    break;
            }
        });

        let gameOverIntervalId;

        function gameOver() {
            clearInterval(intervalId);

            const getAllBlocks = document.querySelectorAll('.block');
            gameOverIntervalId = setInterval(() => {
                getAllBlocks.forEach(block => {
                    block.classList.toggle('block');
                })
                setTimeout(() => {
                    clearInterval(gameOverIntervalId);
                }, 10000);
            }, 300);
        }
    }
})