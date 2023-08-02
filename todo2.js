const task = document.getElementById("task");
const list = document.getElementById("list");

function additems() {
    if (task.value == 0) {
        window.alert("Please insert some text");

    } else {
        var li = document.createElement("LI");
        li.setAttribute("class","list-group-item d-flex-inline bg-info")
        // var check = document.createElement("INPUT");
        // check.setAttribute("type", "checkbox");
        // list.append(check);
        var ip=document.createElement("INPUT");
        ip.setAttribute("type","checkbox");
        
        ip.setAttribute("class","form-check-input me-1");
        ip.setAttribute("id","firstCheckboxStretched");
        list.appendChild(li);
        li.appendChild(ip);
        
        
        var span = document.createElement("span");
        span.setAttribute("class","h6 ");
        span.innerHTML = task.value;
        task.value = " ";
        li.appendChild(span);


        

       var span2=document.createElement("SPAN");
        span2.setAttribute("class","btn btn-danger position-absolute top-50 end-0 translate-middle-y fs-6");
        span2.innerHTML = "\u00d7";
        li.appendChild(span2)
        
        


        savedata();


        ip.addEventListener('change', function () {
            if (this.checked) {
                li.style = "text-decoration: line-through";
                savedata();
    
            }
            else {
                li.style = "text-decoration: none";
                savedata();
                

            }
        })
        span2.addEventListener('click', function () {
            list.removeChild(li);
            savedata();
            

        })
        
    }



}
function savedata() {
    localStorage.setItem("data", list.innerHTML);

}
function showdata() {

    list.innerHTML = localStorage.getItem("data");
}
showdata();


