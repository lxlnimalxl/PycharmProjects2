const addBtn = document.querySelector(".add")
const taskField = document.querySelector(".taskInput")
const list = document.querySelector(".list")
addBtn.addEventListener("click", addTask)
function addTask() {
    if (taskField.value.length === 0) return
    else {
        const taskContainer = list.appendChild(document.createElement("div"))
        const task = taskContainer.appendChild(document.createElement("p"))
        const doneBtn = taskContainer.appendChild(document.createElement("i"))
        const deleteBtn = taskContainer.appendChild(document.createElement("i"))
        deleteBtn.className = "fas fa-trash-alt"
        doneBtn.className = "fas  fa-chek"
        taskContainer.className = "taskContainer"
        task.className = "task"
        task.innerHTML = taskField.value
        taskField.value = ""
        deleteBtn.addEventListener("click", deleteTask)
        doneBtn.addEventListener("click", checkTask)
        function chekTask(e) {
            e.target.parentElement.remove()
        }
    }
}
function enter(e){
    if(e.keyCode == 13)addTask()
}