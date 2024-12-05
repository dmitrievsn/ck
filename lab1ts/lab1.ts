//2
const remainder = (a: number, b: number): number => {
    return a % b;
}
console.log(remainder(10, 3));
//3
const num: number = 42;
let str: string = "Hello, World!";
const obj: { name: string; age: number } = { name: "Stepan", age: 19 };
let any: any = "Za pivom!";
const und: undefined = undefined;
let nullv: null = null;
console.log(num, str, obj, any, und, nullv);
//4
interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    e1?: number;
    e2?: number;
}
const data: ToJsonStringify = {
    id: 6,
    e1: null,
    e2: 28,
};
const jsonData = JSON.stringify(data);
console.log(jsonData);