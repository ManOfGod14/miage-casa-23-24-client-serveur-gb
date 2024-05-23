document.addEventListener("DOMContentLoaded", () => {
  // Initialisation des produits depuis localStorage
  let products = JSON.parse(localStorage.getItem("products")) || [];

  // récupérer les element dans le DOM
  const productList = document.getElementById("productList");
  const productForm = document.querySelector("#productForm");
  const productNameInput = document.getElementById("productName");
  const productPriceInput = document.getElementById("productPrice");

  // Fonction pour afficher les produits
  function displayProducts() {
    productList.innerHTML = "";

    products.forEach((product, index) => {
      const productItem = document.createElement("li");
      productItem.className = "list-group-item d-flex justify-content-between align-items-center";
      productItem.innerHTML = `
                ${product.name} - ${product.price} MAD
                <button class="btn btn-danger btn-sm" onclick="deleteProduct(${index})">Supprimer</button>
            `;
      productList.appendChild(productItem);
    });
  }

  // Fonction pour ajouter un produit
  function addProduct(name, price) {
    products.push({ name, price });
    localStorage.setItem("products", JSON.stringify(products));
    displayProducts();
  }

  // Fonction pour supprimer un produit
  function deleteProduct(index) {
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    displayProducts();
  }

  // Gestion de la soumission du formulaire d'ajout de produit
  productForm.addEventListener("submit", (event) => {
    // permet de supprimer l'évènement par défaut de l'element
    event.preventDefault();

    const name = productNameInput.value;
    const price = productPriceInput.value;
    if (name && price) {
      addProduct(name, price);
      productNameInput.value = "";
      productPriceInput.value = "";
      $("#productModal").modal("hide");
    } else {
      alert("Veuillez remplir tous les champs");
    }
  });

  // Initialiser l'affichage des produits
  displayProducts();

  // Expose deleteProduct pour une utilisation globale
  window.deleteProduct = deleteProduct;
});
