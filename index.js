let countEl = document.getElementById("count-el");
let prevEl = document.getElementById("save-el");
let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count;
}

// 1. Create a function, save(), which logs out the count when it's called

function save() {
    prevEl.innerText += " " + count;
    count = 0;
   countEl.innerText = count;
   
}


