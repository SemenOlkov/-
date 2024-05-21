document.getElementById("cr2").addEventListener("click", function() {
    var hiddenBlock = document.getElementById("crm2");
    var buttonRect = this.getBoundingClientRect();
    if (hiddenBlock.classList.contains("hidden")) {
        hiddenBlock.classList.remove("hidden");
        hiddenBlock.style.position = "absolute";
        hiddenBlock.style.top = (buttonRect.bottom + window.scrollY) + "px";
        hiddenBlock.style.left = buttonRect.left + "px";
    } else {
        hiddenBlock.classList.add("hidden");
    }
});