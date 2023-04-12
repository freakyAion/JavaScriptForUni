const add       = document.getElementById("add_task"  );
const task_name = document.getElementById("task_title");
const task_info = document.getElementById("task_info" );
const container = document.querySelector(".tasks"     );

add.addEventListener
    (
        "click",
        (event)=>
        {
            event.preventDefault();
            let title = task_name.value;
            let info  = task_info.value;

            let task_title = document.createElement("p");
            task_title.classList.add("title")
            task_title.innerHTML = title;
            container.append(task_title);

            let task = document.createElement("p");
            task.classList.remove("title")
            task.innerHTML =  info;
            container.append(task);

            

            console.log(event);

            task_name.value = "";
            task_info.value = "";
        }
    );