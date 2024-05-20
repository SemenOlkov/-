document.getElementById("searchInput").addEventListener("input", function() {
    var searchText = this.value.toLowerCase();
    var items = document.getElementById("blockToSearch").getElementsByTagName("div");
    
    for (var i = 0; i < items.length; i++) {
        var itemText = items[i].textContent.toLowerCase();
        if (itemText.indexOf(searchText) === -1) {
            items[i].classList.add("hidden");
        } else {
            items[i].classList.remove("hidden");
        }
    }
});