var items = document.getElementById("blockToGlobalSearch").getElementsByClassName("grid-item");
for (var i = 0; i < items.length; i++) {
    items[i].classList.add("hidden");
}

document.getElementById("globalsearchInput").addEventListener("input", function() {
    var searchText = this.value.toLowerCase();
    var items = document.getElementById("blockToGlobalSearch").getElementsByClassName("globallink");
    
    if (searchText === "") {
        for (var i = 0; i < items.length; i++) {
            items[i].classList.add("hidden");
        }
        return;
    }

    for (var i = 0; i < items.length; i++) {
        var itemText = items[i].textContent.toLowerCase();
        if (itemText.indexOf(searchText) === -1) {
            items[i].classList.add("hidden");
        } else {
            items[i].classList.remove("hidden");
        }
    }
});
