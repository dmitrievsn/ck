function getCurrentDate(): void {
    console.log(Date.now());
}
getCurrentDate();
window.addEventListener('load', () => {
    const intervalId = setInterval(() => {
        getCurrentDate();
    }, 5000);
    setTimeout(() => {
        clearInterval(intervalId);
    }, 60000);
});
function createLogger(message:string) {
    return function () {
        console.log(message);
    };
}
const logHello = createLogger("Hello, World!");
logHello();