
const btn = document.querySelector('.js-btn');
const input = document.querySelector('.js-input');
const emptyMessage = document.querySelector('.js-nothing');
const list = document.querySelector('.js-list');

function onAddItem  (e) {
  emptyMessage.setAttribute ('hidden', '');
  list.removeAttribute('hidden', '');
  const li = document.createElement("li");
  li.className = "list-group-item js-item";
  li.innerHTML = '<input class="form-check-input me-1" type="checkbox" value="" aria-label="..."></input>'+ input.value;
  list.appendChild(li)
  input.value = "";
}

function onAddNewTodo (e) {
  if (e.keyCode === 13) {
    setItem ();
  }
}

btn.addEventListener('click', onAddItem);
input.addEventListener('keydown', onAddNewTodo);
