// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

//create a new task
function addTask() {
    const text = taskInput.value.trim();
    if (text === "") {
        alert("Please write something first!");
        return;
    }
    //create "LI" element
    const list1 = document.createElement('li');

    //set the internal HTML (Task name + Delete button)
    list1.innerHTML = `
        <span>${text}</span>
        <button class="delete-btn">Delete</button>
    `;

    //add event listener to delete button
    list1.querySelector('.delete-btn').addEventListener('click', function() {list1.remove();
    });

    //add to the list and clear input
    taskList.appendChild(list1);
    taskInput.value = "";
}

//event Listeners
addButton.addEventListener('click', addTask);

//also allow adding task with "Enter" key
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
