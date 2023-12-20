import { TaskStatus } from './types/TaskStatus.js'
import { Task } from './types/Task.js'

document.querySelector(".addTask")!.addEventListener(`click`,()=>{
    const tasknameInput = <HTMLInputElement>document.querySelector(".taskName");
    const taskname = tasknameInput.value;
    //console.log(taskname);
    if (taskname) {
        const taskItem: Task = {
            name: taskname,
            status: TaskStatus.Todo
        }
        createTask(taskItem)
    }
})

// 空任務陣列
let tasks:Task[] = [];

// 新增陣列
function createTask(task: Task){
    tasks.push(task);
    //console.log(tasks);
    upadteTaskList()
}

function upadteTaskList() {
    let taskListHTML = ``;
    tasks.forEach(task =>{
        taskListHTML += `<li>${task.name} - 狀態: ${TaskStatus[task.status]}</li>`;
        document.querySelector(".taskList")!.innerHTML = taskListHTML;
    })
}
// 新增任務到任務列表
// createTask("學習TS");
// createTask("去超市購物");

//顯示任務

console.log(tasks);