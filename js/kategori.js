fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  cats.forEach(showCategory);
}
function showCategory(cat) {
  //fanger våres tempalte
  const tempalte = document.querySelector("template").content;

  //cloner
  const clone = tempalte.cloneNode(true);
  //endrer innhold
  clone.querySelector("a").textContent = cat.category;
  clone.querySelector("a").href = `produktliste.html?category=${cat.category}`;
  //appender
  document.querySelector(".letterGroup ol").appendChild(clone);
}
