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
document.getElementById("demonstraterules").addEventListener("click", function() {
    var hiddenBlock = document.getElementById("rules");
    if (hiddenBlock.classList.contains("hidden")) {
        hiddenBlock.classList.remove("hidden");
    } else {
        hiddenBlock.classList.add("hidden");
    }
});
document.getElementById("proctorrules").addEventListener("click", function() {
    var hiddenBlock = document.getElementById("rules1");
    if (hiddenBlock.classList.contains("hidden")) {
        hiddenBlock.classList.remove("hidden");
    } else {
        hiddenBlock.classList.add("hidden");
    }
});
document.getElementById("rights").addEventListener("click", function() {
    var hiddenBlock = document.getElementById("rules2");
    if (hiddenBlock.classList.contains("hidden")) {
        hiddenBlock.classList.remove("hidden");
    } else {
        hiddenBlock.classList.add("hidden");
    }
});