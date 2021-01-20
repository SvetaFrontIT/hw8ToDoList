// Каждое дело в списке может быть в двух состояниях ("нужно сделать" - желтый фон и "сделано" - зеленый фон). 
// По умолчанию, дело в список добавляется в статусе нужно сделать. При клике на него, состояние меняется на противоположное.

// Добавить в каждую строку кнопку удалить, при клике на которую элемент удаляется из списка.

// Когда удалили все элементы показывается сообщения которое сообщает что список пустой (оно должно быть всегда когда в списке нет элементов).

// Для реализации обязательно попробуйте использовать делегирование и интересные подходы из статей.



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
    onAddItem ();
  }
}

btn.addEventListener('click', onAddItem);
input.addEventListener('keydown', onAddNewTodo);
