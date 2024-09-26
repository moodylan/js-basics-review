// DOM: Document Object Model
console.log(window); // window object is the parent object of the browser

// Single element selectors
const form = document.getElementById('my-form');
console.log(form);
const formQ = document.querySelector('.container');
console.log(formQ);
const formQ2 = document.querySelector('h1');
console.log(formQ2);

// Multiple element selectors
// select all of the list items
console.log(document.querySelectorAll('.item'));
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

// changing/modifying things in the DOM
// see the changes in the UI
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello'; 
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h4>item 3</h4>';

// for events, changing the color, size dynamically in the UI
const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// EVENTS
// addEventListener('the envent', function that we want to run when the event happens);
btn.addEventListener('click', (e) => {
  // prevent the form to flash/reload when clicking a submit button:
  e.preventDefault();
  // console.log('click');
  // console.log(e);
  // console.log(e.target.id);

  // when we click, let's change some things:
  document.querySelector('#my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});
// btn.addEventListener('mouseover', (e) => {
//   e.preventDefault();
//   document.querySelector('#my-form').style.background = '#ccc';
//   document.querySelector('body').classList.add('bg-dark');
//   document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });
// btn.addEventListener('mouseout', (e) => {
//   e.preventDefault();
//   document.querySelector('#my-form').style.background = '#ccc';
//   document.querySelector('body').classList.add('bg-dark');
//   document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });


