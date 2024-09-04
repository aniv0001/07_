const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kaller showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //fange template
  const template = document.querySelector("#smallProductTemplate").content;
  //lage en kopi
  const copy = template.cloneNode(true);
  //endre innhold
  copy.querySelector("h3").textContent = product.productdisplayname;

  copy.querySelector("img").setAttribute("src", `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`);
  if (product.soldout) {
    //productet er utsolgt
    copy.querySelector("article").classList.add("soldOut");
  }
  copy.querySelector(".read-more").setAttribute("href", `produkt.html?id=${product.id}`);
  //appende
  document.querySelector("main").appendChild(copy);
}

/*<article class="smallProduct">
  <img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp" alt="Sahara Team India Fanwear Round Neck Jersey" />
  <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
  <p class="subtle">Tshirts | Nike</p>
  <p class="price">
    <span>Prev.</span> DKK 1595,-
  </p>
  <div class="discounted">
    <p>Now DKK 1560,-</p>
    <p>-34%</p>
  </div>
  <a href="produkt.html">Read More</a>
</article>; */
