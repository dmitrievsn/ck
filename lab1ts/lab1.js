//2
var remainder = function (a, b) {
    return a % b;
};
console.log(remainder(10, 3));
//3
var num = 42;
var str = "Hello, World!";
var obj = { name: "Stepan", age: 19 };
var any = "Za pivom!";
var und = undefined;
var nullv = null;
console.log(num, str, obj, any, und, nullv);
var data = {
    id: 6,
    e1: null,
    e2: 28,
};
var jsonData = JSON.stringify(data);
console.log(jsonData);
