function TaskList(){
    this.arr = [];

    this.themtask = function(task,spanID,messCompleted){
        this.arr.push(task);
        getEle(spanID).value = '';
        alert(messCompleted);
    }

    this.deletetask = function(index,mess,arr){
        arr.splice(index,1);
        alert(mess);
    }

    this.updatestatus = function(id,mess,arr){
        arr.forEach(item=>{
            if(item.id == id){
                item.status = !item.status;
            }
        });
        alert(mess)
    }
}
