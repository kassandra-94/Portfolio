// riconoscere cosa deve muoversi tramite dom manipulation
let div = document.getElementById("div");
let ul = document.getElementById("ul");
let h1 = document.getElementById("h1");

//funzione usando this in cui descrivo lelemento che deve cambiare
//deve essere un div che cambia
function show(child) {
  if (child.style.display === "none") {
    child.style.display = "block";
    alert("this is a heist");
  }
}

div.addEventListener("click", show(ul));
