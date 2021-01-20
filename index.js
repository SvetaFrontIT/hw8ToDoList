// Каждое дело в списке может быть в двух состояниях ("нужно сделать" - желтый фон и "сделано" - зеленый фон). 
// По умолчанию, дело в список добавляется в статусе нужно сделать. При клике на него, состояние меняется на противоположное.
// Добавить в каждую строку кнопку удалить, при клике на которую элемент удаляется из списка.
// Когда удалили все элементы показывается сообщения которое сообщает что список пустой (оно должно быть всегда когда в списке нет элементов).

const btn = document.querySelector('.js-btn');
const input = document.querySelector('.js-input');
const emptyMessage = document.querySelector('.js-nothing');
const list = document.querySelector('.js-list');

function onAddItem  (e) {
  emptyMessage.setAttribute ('hidden', '');
  list.removeAttribute('hidden', '');
  const li = document.createElement("li");
  li.className = "list-group-item js-item";
  li.dataset.state = "pending";
  li.innerHTML = input.value + `
    <button type="button" data-trash="clear" class="btn btn-sm btn-outline-secondary js-icon">
      <i class="bi bi-trash" data-trash="clear"></i>
    </button>`;
  list.appendChild(li)
  input.value = "";
  li.addEventListener('click', onChangeStateOfItem);
  function onChangeStateOfItem(e) {
    li.dataset.state = "done";
  }
  const icon = document.querySelector('.js-icon');
  list.addEventListener('click', onDelete);
  onDelete
}

function onDelete(e) {
  if (e.target.dataset.trash != 'clear') return;
  const itemToDelete = e.target.closest('.js-item');
  itemToDelete.remove();
  if(list.childElementCount === 0) {
    emptyMessage.removeAttribute ('hidden', '');
    list.setAttribute('hidden', '');
  }
}

function onAddNewTodo (e) {
  if (e.keyCode === 13) {
    onAddItem ();
  }
}

btn.addEventListener('click', onAddItem);
input.addEventListener('keydown', onAddNewTodo);

