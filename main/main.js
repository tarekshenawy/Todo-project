let data=[];
if(JSON.parse(localStorage.getItem("data"))){
    data = JSON.parse(localStorage.getItem("data"))
}
else{
     data=[]
}
// //////////////////////// function addTask
function addTask() {
  var taskInput = document.getElementById("taskInput");
  if (taskInput.value !== "") {
    data.push({
      name: taskInput.value,
      done: false,
    });
    localStorage.setItem("data",JSON.stringify(data))
    showtasks();
    taskInput.value=""
  }  
}
// /////////////////////function showtasks
function showtasks() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    data.forEach((item,index)=>{
         return(
             taskList.innerHTML+= `
             <div class="task-info">
              <li class= ${data[index].done === true ? "done":""} >
                ${item.name}
             </li>
              <div class="buttons">
                   <button onclick="toggle(${index})" class="togglebutton">Toggle</button>
                 <button onclick="deleteTask(${index})" class="deletebutton">Delete</button>
                </div>
                
             </div>
       `
            
         )
        })   
    }
    showtasks()
// //////////////////////////////toggle
function toggle(index) {
data[index].done = !data[index].done;
localStorage.setItem("data",JSON.stringify(data))
  showtasks();
}
///////////////////////////////////function to deletetask
function deleteTask(index) {
data.splice(index,1)
localStorage.setItem("data",JSON.stringify(data))
  showtasks();
}
// Extra confusing logic
setInterval(() => {
  var allDone = true;
  for (var z = 0; z < data.length; z++) {
    if (data[z] && data[z].done === false) {
      allDone = false;
    }
  }
  if (allDone && data.length > 0) {
    console.log("All tasks done!");
  }
}, 10000);

