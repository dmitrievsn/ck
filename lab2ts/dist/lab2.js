/**task 1**/
let data = [-3, -2, -1, 0, 3, 5, 123, 24, 1, 24, 5, 2, 4];
console.log(data);
function maxValnegativenum(data) {
    let val = null;
    for (const num of data) {
        if (num > 0) {
            if (val === null || num < val) {
                val = num;
            }
        }
    }
    return val;
}
const maxnegativeval = maxValnegativenum(data);
console.log(maxnegativeval);
let matrix = [
    ["play", "list", "of"],
    ["the", "day", "daster"]
];
console.log(matrix);
function boolMatrix(matrix) {
    const resultmatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        const resultrow = [];
        for (let j = 0; j < matrix[i].length; j++) {
            const valbool = matrix[i][j].length % 2 !== 0;
            resultrow.push(valbool);
        }
        resultmatrix.push(resultrow);
    }
    return resultmatrix;
}
let MatrixBool = boolMatrix(matrix);
console.log(MatrixBool);
/**task 2**/
const tuple = [324, 711];
console.log(tuple);
function sumDigit(tuple) {
    let sum1 = Math.abs(tuple[0]).toString().split('').map(Number).reduce((acc, digit) => acc + digit, 0);
    let sum2 = Math.abs(tuple[0]).toString().split('').map(Number).reduce((acc, digit) => acc + digit, 0);
    return sum1 === sum2;
}
console.log(sumDigit(tuple));
/**task 3**/
var RNA;
(function (RNA) {
    RNA["ELEM_1"] = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD";
    RNA["ELEM_2"] = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD";
    RNA["ELEM_3"] = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD";
    RNA["ELEM_4"] = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD";
})(RNA || (RNA = {}));
console.log(RNA.ELEM_3);
/**task 4**/
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
const someCat = new Cat();
const someDog = new Dog();
console.log(someCat, someCat.speak());
console.log(someDog, someDog.speak());
const Gen1 = {
    name: 'HIV',
    structure: 'the membrane',
    contains: RNA.ELEM_2,
};
const jsonObject = JSON.stringify(Gen1);
console.log(jsonObject);
const objParsed = JSON.parse(jsonObject);
let partObject = objParsed.contains;
console.log(objParsed);
