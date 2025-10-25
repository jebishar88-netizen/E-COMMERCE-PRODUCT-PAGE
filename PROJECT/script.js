const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter");
const products = document.querySelectorAll(".product");

function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const category = filterSelect.value;

  products.forEach(product => {
    const name = product.dataset.name.toLowerCase();
    const cat = product.dataset.category;
    const matchesSearch = name.includes(searchTerm);
    const matchesCategory = category === "all" || cat === category;

    product.style.display = matchesSearch && matchesCategory ? "block" : "none";
  });
}

searchInput.addEventListener("input", filterProducts);
filterSelect.addEventListener("change", filterProducts);