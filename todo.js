// each item should look like this: 
// <li><input type="checkbox"/> write this tutorial </li>

//Lessons learned
// - Avoid global variables
// = strive to make functions reusable

function addNewItem(list, itemText){
    var listItem = document.createElement("li");
    listItem.innerText = itemText;

    list.appendChild(listItem);
}
var inItemText = document.getElementById("inItemText");
   inItemText.focus();

var btnNew = document.getElementById("btnAdd");
btnNew.onclick = function(){ 
   
   var itemText = inItemText.value;


    if(!itemText || itemText == "" || itemText == " "){
                return false;
    }
    addNewItem(document.getElementById("todoList"), itemText);
}
   



 