// grab values from the DOM
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if(nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');   
    msg.innerHTML = 'Please enter all fields';

    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

    userList.appendChild(li);

    nameInput.value = '';
    emailInput.value = '';
    // all UI-based, after clearing/refreshing the data will not be saved
  }
}

/*
PSEUDOCODE:
function onSubmit(e) {
  e.preventDefault();
  if(both or any of the input values is empty) 
    // grab css error msg styling
    // display error message in the html
    // remove the error msg after 3 seconds
  } else {
    // add the input data as a list item into the ul 
    // create a list item
    // add a text node with the input value
    // append the text node to the ul 
      variable.appendChild(..) simply adds something to that list
    // clear the fields
  }
}
*/