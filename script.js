console.log('Task Tracker Running...');

let taskCounter = document.querySelectorAll('#tasks li').length + 1;

document.getElementById('task-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const taskInput = document.getElementById('task');
  const taskText = taskInput.value.trim();
  
  if (taskText) {
    addTask(taskText);
    taskInput.value = '';
  }
});

function addTask(text) {
  const li = document.createElement('li');
  const taskNumber = taskCounter++;
  
  // Create text span
  const textSpan = document.createElement('span');
  textSpan.className = 'task-text';
  textSpan.textContent = `Task ${taskNumber}: ${text}`;
  
  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = '×';
  deleteBtn.addEventListener('click', () => {
    li.remove();
    updateTaskNumbers();
  });
  
  li.appendChild(textSpan);
  li.appendChild(deleteBtn);
  document.getElementById('tasks').appendChild(li);
}

function updateTaskNumbers() {
  const tasks = document.querySelectorAll('#tasks li');
  tasks.forEach((task, index) => {
    const textSpan = task.querySelector('.task-text');
    const currentText = textSpan.textContent.replace(/^Task \d+: /, '');
    textSpan.textContent = `Task ${index + 1}: ${currentText}`;
  });
  taskCounter = tasks.length + 1;
}

// Initialize
updateTaskNumbers();