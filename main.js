


let textBox = document.getElementById("textBox");
let add_button = document.getElementById("add_button");
let clear_button = document.getElementById("clear_button");
add_button.addEventListener("click", addItem);
clear_button.addEventListener("click", clearAllItems);


function addItem()
{
    let newItem = document.createElement("li");
    newItem.innerText = textBox.value;
    list.appendChild(newItem);
    textBox.value = '';
}

function clearAllItems()
{
    list.innerHTML = ''
}