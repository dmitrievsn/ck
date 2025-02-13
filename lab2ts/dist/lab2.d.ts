/**task 1**/
declare let data: number[];
declare function maxValnegativenum(data: number[]): number | null;
declare const maxnegativeval: number;
declare let matrix: string[][];
declare function boolMatrix(matrix: string[][]): boolean[][];
declare let MatrixBool: boolean[][];
/**task 2**/
declare const tuple: [number, number];
declare function sumDigit(tuple: [number, number]): boolean;
/**task 3**/
declare enum RNA {
    ELEM_1 = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD",
    ELEM_2 = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD",
    ELEM_3 = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD",
    ELEM_4 = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD"
}
/**task 4**/
declare class Pet {
    name: string;
    age: number;
    speak(): string;
}
declare class Dog extends Pet {
    label: string;
    age: number;
    speak(): string;
}
declare class Cat extends Pet {
    name: string;
    age: number;
    speak(): string;
}
declare const someCat: Pet;
declare const someDog: Pet;
/**task 5**/
interface Genomes {
    name: string;
    structure: string;
    contains: RNA;
}
declare const Gen1: Genomes;
declare const jsonObject: string;
declare const objParsed: Genomes;
declare let partObject: RNA;
