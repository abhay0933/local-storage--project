const textarea = document.getElementById("text");
textarea.addEventListener("input", saveToLocalStorage);

function saveToLocalStorage() {
    localStorage.setItem("savedText", textarea.value);
}

if (localStorage.getItem("savedText")) {
    textarea.value = localStorage.getItem("savedText");
}

function cleardata(){
    localStorage.clear();
    textarea.value=""
}
