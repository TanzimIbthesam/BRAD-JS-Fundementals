//Manipulating the DOM
//To remove ul-unordered list
const ul=document.querySelector('.items');
//ul.remove();
//To remove last element
//ul.lastElementChild.remove();
//To change and add a new content 
ul.firstElementChild.textContent='Hello';
//if we want to select second element
//To remove the second child
//ul.children[1].remove();
ul.children[1].innerText='Tanzim';
ul.lastElementChild.innerHTML='<h4>Hello</h4>';

const btn=document.querySelector('.btn');
btn.style.background='red';