// 定義任務狀態列舉

enum TaskStatus {
    Todo,
    InProgress,
    Done
}

// 空任務陣列

let tasks:{name:string,status:TaskStatus}[] = [];

// 新增陣列
function createTask(name: string){
    tasks.push({
        name: name,
        status: TaskStatus.Todo
    })
}

// 新增任務到任務列表
createTask("學習TS");
createTask("去超市購物");

//顯示任務

console.log(tasks);