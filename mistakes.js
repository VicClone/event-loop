const listEl = document.querySelector('#list');
const btn = document.querySelector('#btn');
let i = 0;

btnEL.addEventListener('click', () => {
    const liNode = document.createElement('li');
    liNode.innerText = i;
    listEl.appendChild(liNode);
    // alert(`add item ${i}`)
});

btnEL.click();