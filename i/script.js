let currentListVar = document.getElementById("currentList");
let listVar = document.getElementById("list");

let addElementVar = document.getElementById("addElement");

currentListVar.addEventListener('click', function() {
    listVar.innerHTML = "";
    listVar.style.height = "0"; 

    let div = document.createElement('div');
    div.textContent = "hola"

    let size = 21;

    listVar.appendChild(div);

    listVar.style.display = "flex";
    listVar.style.top = (currentListVar.getBoundingClientRect().top+28) + "px";

    listVar.style.width = document.body.getBoundingClientRect().width - window.getComputedStyle(document.body).padding.split('px')[1]*2 + "px";
    
    listVar.style.height = size + "px"; 
    
});

addElementVar.addEventListener('click', function() {
    
    
    
})