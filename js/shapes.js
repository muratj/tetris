let j1 = [3, 14, 15, 6];
let j2 = [6, 16];
let j3 = [6, 16];
let j4 = [6, 16];
let j5 = [6, 16];

let s1 = [3, 6, 14, 15];
let s2 = [5, 6, 16];
let s3 = [4, 15];
let s4 = [3, 13, 14];
let s5 = [13, 4, 5, 16];

let shapes = [j1, s1, j2, s2, j3, s3, j4, s4, j5, s5];

export function getShape() {
    return shapes.shift();
}