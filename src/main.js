import { refs } from "./js/refs";
import { addToDo, clearTaskList, deleteTask, renderTasks } from "./js/render-tasks";

renderTasks();
refs.form.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputTitles = event.target.elements.taskName.value.trim();
  const inputText = event.target.elements.taskDescription.value.trim();
  if (inputTitles === "" || inputText === "") {
    alert('Fill all fields');
    return
  };
  const todo = {
    title: inputTitles,
    text: inputText,
  }
  addToDo(todo);
  refs.form.reset();
});
refs.tasklist.addEventListener('click', event => {
  if (!event.target.classList.contains('task-list-item-btn')) {
    return
  }
  const title = event.target.nextElementSibling.textContent;
  deleteTask(title)
});























//  const addBtn = document.getElementById('add-btn');
//     const taskList = document.getElementById('task-list');

//     addBtn.addEventListener('click', () => {
//       const title = document.getElementById('task-title').value.trim();
//       const text = document.getElementById('task-text').value.trim();

//       if (title === '' || text === '') {
//         alert('Будь ласка, введи назву і опис завдання');
//         return;
//       }

//       const li = document.createElement('li');
//       li.className = 'task-list-item';
//       li.innerHTML = `
//         <button class="task-list-item-btn">Delete</button>
//         <h3>${title}</h3>
//         <p>${text}</p>
//       `;

//       taskList.appendChild(li);

//       // Очистити поля
//       document.getElementById('task-title').value = '';
//       document.getElementById('task-text').value = '';
//     });

//     // Делегування події на кнопку "Delete"
//     taskList.addEventListener('click', (e) => {
//       if (e.target.classList.contains('task-list-item-btn')) {
//         const taskItem = e.target.closest('.task-list-item');
//         taskItem.remove();
//       }
//     });
