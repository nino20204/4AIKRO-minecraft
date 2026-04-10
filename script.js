const products = [
  {name: "Dragon", price: 12.5, image: "dragon.webp"},
  {name: "Kitsune", price: 7.5, image: "kitsune.webp"},
  {name: "Leopard", price: 6.0, image: "leopard.webp"},
  {name: "Dough", price: 4.0, image: "dough.webp"}
];

function renderProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${item.image}" onerror="this.style.display='none'">
      <h3>${item.name}</h3>
      <p>$${item.price}</p>
      <button>➕ Add to Cart</button>
    `;

    const btn = card.querySelector("button");
    btn.addEventListener("click", () => {
      alert(item.name + " added to cart ✅");
    });

    container.appendChild(card);
  });
}

renderProducts();
