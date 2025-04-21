document.getElementById("addButton").addEventListener("click", function () {
  var newItem = document.createElement("li");
  newItem.textContent = "New Item";
  document.getElementById("myList").appendChild(newItem);
});

const listItems = document.getElementById("myList");
listItems.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
});
