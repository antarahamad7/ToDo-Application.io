const task = document.getElementById("task");
const list = document.getElementById("list");

function additems() {
    if (task.value == 0) {
        window.alert("Please insert some text");
    } else {
        var li = document.createElement("LI");
        li.setAttribute("class", "list-group-item d-flex-inline bg-info");
        li.style.position = "relative"; // Needed for absolutely positioning the ❌

        var ip = document.createElement("INPUT");
        ip.setAttribute("type", "checkbox");
        ip.setAttribute("class", "form-check-input me-1");
        ip.setAttribute("id", "firstCheckboxStretched");

        list.appendChild(li);
        li.appendChild(ip);

        var span = document.createElement("span");
        span.setAttribute("class", "h6 ");
        span.innerHTML = task.value;
        task.value = " ";
        li.appendChild(span);

        var span2 = document.createElement("SPAN");
        span2.innerHTML = "\u00d7";

        // ✅ Add styles for red background and position at end
        span2.style.cursor = "pointer";
        span2.style.backgroundColor = "red";
        span2.style.color = "white";
        span2.style.padding = "5px 10px";
        span2.style.borderRadius = "50%";
        span2.style.position = "absolute";
        span2.style.right = "10px";
        span2.style.top = "50%";
        span2.style.transform = "translateY(-50%)";

        li.appendChild(span2);

        ip.addEventListener('change', function () {
            if (this.checked) {
                span.style.textDecoration = "line-through";
            } else {
                span.style.textDecoration = "none";
            }
        });

        span2.addEventListener('click', function () {
            list.removeChild(li);
        });
    }
}
