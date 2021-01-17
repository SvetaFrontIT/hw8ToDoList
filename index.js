
const btn = document.querySelector('.js-btn');
const input = document.querySelector('.js-input');
const nothing = document.querySelector('.js-nothing');
const list = document.querySelector('.js-list');

function setItem (e) {
  appareOfList ();
  addNewItem ();
}

function appareOfList () {
  nothing.setAttribute ('hidden', '');
  list.removeAttribute('hidden', '');
}

function addNewItem () {
  const list = document.getElementsByTagName("ul")[0];
  const li = document.createElement("li");
  li.className = "list-group-item js-item";
  li.innerHTML = '<input class="form-check-input me-1" type="checkbox" value="" aria-label="..."></input>'+ input.value;
  list.appendChild(li)
  input.value = "";
}


btn.addEventListener('click', setItem);
  
