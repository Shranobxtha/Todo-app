function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();
    if(text === "") return; //if the text is empty function stops immediately
    
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = text;
    
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit";
    
    editBtn.onclick = () => {
        const newText = prompt("Edit Your Task:", span.textContent);
        if(newText != null && newText.trim() !== ""){
            span.textContent = newText;
        }
    };
    
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delete";
    
    delBtn.addEventListener("click",()=>{
        li.remove();
    });

    document.getElementById("taskList").appendChild(li);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    input.value = "";

}