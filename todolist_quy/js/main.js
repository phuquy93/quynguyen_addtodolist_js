var validation = new Validation();
var tasklist = new TaskList();

getLocalStorage();

getEle('addItem').addEventListener("click",function(){
    var valNewTask = getEle("newTask").value;
    var id = Math.random();
    var status = 0;
    
    var isValid = true;

    isValid &= validation.kiemtrarong(valNewTask) && validation.kiemtraid(id,"Trùng id!",tasklist.arr);

    var task = new Task(valNewTask,id,status);

    if(isValid) {
        tasklist.themtask(task,"newTask","Thêm thành công!");
        setLocalStorage();
        taobang(tasklist.arr);
    }
});

function getEle(id) {
    return document.getElementById(id);
  }

function taobang(arr){
    var content = "";
    var content2 = "";
    arr.forEach((item,index)=>{
        if(item.status == 0){
            content+= `
            <li>
                <span>${item.name}</span>
                <div class="buttons">
                <button class="remove" onclick="deleteToDo(${index})">
                    <i class="fa fa-trash-alt"></i>
                </button>
                <button class="complete" onclick="changeStatus(${item.id})">
                    <i class="far fa-check-circle"></i>
                    <i class="fas fa-check-circle"></i>
                </button>
                </div>
            </li>
            `
        }

        if(item.status == 1){
            content2+= `
            <li>
                <span>${item.name}</span>
                <div class="buttons">
                <button class="remove" onclick="deleteToDo(${index})">
                    <i class="fa fa-trash-alt"></i>
                </button>
                <button class="complete" onclick="changeStatus(${item.id})">
                    <i class="far fa-check-circle"></i>
                    <i class="fas fa-check-circle"></i>
                </button>
                </div>
            </li>
            `
        }
    });

    getEle("todo").innerHTML = content;
    getEle("completed").innerHTML = content2;
};

function setLocalStorage(){
    localStorage.setItem("Task",JSON.stringify(tasklist.arr));
};

function getLocalStorage(){
    if(localStorage.getItem("Task")){
        tasklist.arr = JSON.parse(localStorage.getItem("Task"));
        taobang(tasklist.arr);
    };
};

function deleteToDo(id){
    tasklist.deletetask(id,"Bạn muốn xoá!",tasklist.arr);
    setLocalStorage();
    taobang(tasklist.arr);
};

function changeStatus(id){
    tasklist.updatestatus(id,"Update thành công!",tasklist.arr);
    setLocalStorage();
    taobang(tasklist.arr);
}