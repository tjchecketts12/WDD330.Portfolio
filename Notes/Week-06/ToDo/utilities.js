function remove(task) {
    task.parentElement.setAttribute("id","deleting");
    const element = document.getElementById("deleting");
    element.parentNode.removeChild(element);

    const tasks = document.querySelectorAll(".check").length;
    const completed = document.querySelectorAll(":checked").length;
    const left = tasks - completed;

    document.getElementById("count").innerHTML = left;

}
function count() {
    const tasks = document.querySelectorAll(".check").length;
    const completed = document.querySelectorAll(":checked").length;
    const left = tasks - completed;

    document.getElementById("count").innerHTML = left;
}

function reset() {
    document.getElementById("taskinput").value = "";
}

function filter(e){
    document.getElementById("all").style.border = "none";
    document.getElementById("active").style.border = "none";
    document.getElementById("completed").style.border = "none";
    document.getElementById("all").style.background = "#E0FFFF";
    document.getElementById("active").style.background = "#E0FFFF";
    document.getElementById("completed").style.background = "#E0FFFF";
    document.getElementById("all").style.color = "#FF5733";
    document.getElementById("active").style.color = "#FF5733";
    document.getElementById("completed").style.color = "#FF5733";
    document.getElementById(e).style.border = "thin solid #002A9C";
    document.getElementById(e).style.borderRadius = "5px";
    document.getElementById(e).style.background = "#002A9C";
    document.getElementById(e).style.color = "#FFFFFF";

    var tasks, i, checked;
    checked = document.querySelectorAll(".check:checked");
    tasks = document.querySelectorAll(".taskbox");

    if (e == "all"){
        for ( i = 0; i < tasks.length; i++){
            tasks[i].style.display = "flex";
        } 
    } else if (e == "active"){
        for ( i = 0; i < tasks.length; i++){
            tasks[i].style.display = "flex";
        } 
        for (i = 0; i < checked.length; i++){
            var test = checked[i].parentNode.style.display = "none";
        }
    } else if (e == "completed"){
        for ( i = 0; i < tasks.length; i++){
            tasks[i].style.display = "none";
        }
        for (i = 0; i < checked.length; i++){
            checked[i].parentNode.style.display = "flex";
        }
    }
    
    
}