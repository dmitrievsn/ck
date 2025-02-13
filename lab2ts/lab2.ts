/**task 1**/
let data: number[] = [-3, -2, -1, 0, 3, 5, 123, 24, 1, 24, 5, 2, 4];
console.log(data);
function maxValnegativenum(data: number[]): number | null {
    let val: number | null = null;
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
function boolMatrix(matrix: string[][]): boolean[][] {
    const resultmatrix: boolean[][] = [];
    for (let i = 0; i < matrix.length; i++) {
        const resultrow: boolean[] = [];
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
const tuple: [number, number] = [324, 711];
console.log(tuple);
function sumDigit(tuple: [number, number]): boolean {
    let sum1 = Math.abs(tuple[0]).toString().split('').map(Number).reduce((acc, digit) => acc + digit, 0);
    let sum2 = Math.abs(tuple[0]).toString().split('').map(Number).reduce((acc, digit) => acc + digit, 0);
    return sum1 === sum2;
}
console.log(sumDigit(tuple));
/**task 3**/
enum RNA {
    ELEM_1 = 'Аденин',
    ELEM_2 = 'Гуанин',
    ELEM_3 = 'Цитозин',
    ELEM_4 = 'Урацил',
}
console.log(RNA.ELEM_3)
/**task 4**/
class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}
const someCat: Pet = new Cat();
const someDog: Pet = new Dog();

console.log(someCat, someCat.speak());
console.log(someDog, someDog.speak());
/**task 5**/
interface Genomes {
    name: string;
    structure: string;
    contains: RNA;
}
const Gen1: Genomes = {
    name: 'HIV',
    structure: 'the membrane',
    contains: RNA.ELEM_2,
}
const jsonObject = JSON.stringify(Gen1);
console.log(jsonObject);

const objParsed: Genomes = JSON.parse(jsonObject) as Genomes;

let partObject: RNA = objParsed.contains;

console.log(objParsed);
