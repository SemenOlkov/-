document.getElementById("fillbutton").addEventListener("click", function() {
    var hiddenBlock = document.getElementById("fill");
    hiddenBlock.classList.remove("hidden");
});
document.getElementById("unfillbutton").addEventListener("click", function() {
    var hiddenBlock = document.getElementById("fill");
    hiddenBlock.classList.add("hidden");
});