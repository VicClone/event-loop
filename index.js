console.log('hi');

console.log('a');
console.log('b');

setTimeout(() => {
    console.log('setTimeout 1')
});

setTimeout(() => {
    console.log('setTimeout 2')
});

const promise = new Promise((resolve, reject) => resolve("it's ok"));
promise.then(() => {
    console.log('promise 1')
});

promise.then(() => {
    console.log('promise 2')
});

const btnEL = document.querySelector('#btn');

btnEL.addEventListener('click', () => {
    btnEL.style.background = `#${Math.floor(Math.random()*16777215).toString(16)}`;
});

btnEL.click();