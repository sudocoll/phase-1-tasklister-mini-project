document.addEventListener("DOMContentLoaded", () => {
  addingEventListeners()
});



function addingEventListeners() {
 document.getElementById('create-task-form')
 .addEventListener('submit', handleFormSubmit);
  
}

function handleFormSubmit(e){
e.preventDefault()
 
const task = e.target /* ['new-task-description'] */ [0].value
const priorityLevel = parseInt(e.target[1].value);
displayTask(task,priorityLevel)

}

function displayTask(task,priorityLevel){
const taskUl = document.getElementById('tasks');
const taskLi = document.createElement('li');

taskLi.textContent = task + ' '
taskLi.style.color = getPriorityColor(priorityLevel);
taskUl.appendChild(taskLi);

const deleteBtn = document.createElement('button');
deleteBtn.textContent = "X";
taskLi.appendChild(deleteBtn)
 
deleteBtn.style.backgroundColor = "red"
deleteBtn.style.color = "white"
deleteBtn.style.fontSize = '10px'

deleteBtn.addEventListener('click', deleteTask)


}

function deleteTask(e){
 e.target.parentNode.remove();
}

function getPriorityColor(priorityLevel){

if(priorityLevel === 1){
  return 'red';
}
else if(priorityLevel === 2){
  return 'green';
}
else{
  return 'blue'
}
}
