

let bodyEl = document.querySelector("body");
let inputEl = document.querySelector(".input");
let h1El = document.getElementById("h1");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));


darkModeOn();
function darkModeOn(){
    if(inputEl.checked){
        bodyEl.style.backgroundColor = "black";
        h1El.style.color = "white";
    }
    else{
        bodyEl.style.backgroundColor = "white";
        h1El.style.color = "black";


    }
}

inputEl.addEventListener("input", ()=>{
    darkModeOn();
    updateLocalStorage();
})

function updateLocalStorage(){
    localStorage.setItem("mode", 
        JSON.stringify(inputEl.checked)
    );
}
