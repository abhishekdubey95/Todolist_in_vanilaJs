
// function for adding the task
function addMore(){
    document.getElementById("error").value = "";
    let name = document.getElementById("name").value;
    if(name == ""){
        document.getElementById('error').innerHTML = "Please Enter Task"
    }
    else{
        let box = document.getElementById("box");
        
        let li = document.createElement("li");
        li.textContent = name;
   
        
// Code for adding the Delete button in every li element
        let a = document.createElement('a');
        a.textContent = "Delete";
        a.href = "javascript:void(0)";
        a.className = "remove";
        li.appendChild(a);
        
        let pos = box.firstElementChild;

        if(pos == null){
            box.appendChild(li);
        }
        else{
            box.insertBefore(li, pos);
        }

        document.getElementById("name").value = "";
    }

    // Code for deleting the list
    let btn = document.querySelector('ul');
    btn.addEventListener('click', function(e){
        let box = document.getElementById("box");
        let li = e.target.parentNode;
        box.removeChild(li);
    });

}

 