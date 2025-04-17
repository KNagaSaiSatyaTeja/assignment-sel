const listelement = document.querySelectorAll("#ul li");

listelement.forEach((li, index) => {
  console.log(`index ${index + 1}: `, li.innerHTML);

  if (index % 2 == 0) {
    li.classList.add("highlight");
  }
});
console.log(`the total number of li elements is: ${listelement.length}`);
