document.getElementById("testobutton").addEventListener("click", function() {
    var hiddenBlock = document.getElementById("testother");
    if (hiddenBlock.classList.contains("hidden")) {
        hiddenBlock.classList.remove("hidden");
    } else {
        hiddenBlock.classList.add("hidden");
    }
});
document.getElementById("testubutton").addEventListener("click", function() {
    var hiddenBlock = document.getElementById("testurfu");
    if (hiddenBlock.classList.contains("hidden")) {
        hiddenBlock.classList.remove("hidden");
    } else {
        hiddenBlock.classList.add("hidden");
    }
});