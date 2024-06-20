document.getElementById("mhead").addEventListener("click", function() {
    var hiddenBlock = document.getElementById("head");
    if (hiddenBlock.classList.contains("mhidden")) {
        hiddenBlock.classList.remove("mhidden");
    } else {
        hiddenBlock.classList.add("mhidden");
    }
});