document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("product-popup");
    const popupClose = document.getElementById("popup-close");
    const variantSelect = document.getElementById("variant-select");
    const addToCartBtn = document.getElementById("add-to-cart");
  
    // Open popup on product click
    document.querySelectorAll(".grid-item").forEach(item => {
      item.addEventListener("click", () => {
        const handle = item.dataset.handle;
  
        // Fetch product JSON from Shopify
        fetch(`/products/${handle}.js`)
          .then(res => res.json())
          .then(product => {
            // Fill popup content
            document.getElementById("popup-image").src = product.images[0];
            document.getElementById("popup-title").textContent = product.title;
            document.getElementById("popup-price").textContent = 
              `$${(product.price / 100).toFixed(2)}`;
            document.getElementById("popup-description").textContent = product.description;
  
            // Variants dropdown
            variantSelect.innerHTML = "";
            product.variants.forEach(v => {
              let opt = document.createElement("option");
              opt.value = v.id;
              opt.textContent = v.title;
              variantSelect.appendChild(opt);
            });
  
            // Store product data for add-to-cart
            addToCartBtn.dataset.product = JSON.stringify(product);
  
            // Show popup
            popup.classList.remove("hidden");
          });
      });
    });
  
    // Close popup
    popupClose.addEventListener("click", () => popup.classList.add("hidden"));
  
    // Add to Cart
    addToCartBtn.addEventListener("click", () => {
      const variantId = variantSelect.value;
  
      // Add selected product
      fetch("/cart/add.js", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: variantId, quantity: 1 })
      })
      .then(res => res.json())
      .then(item => {
        console.log("Added:", item);
  
        // Special Rule: if Black + Medium, auto-add Soft Winter Jacket
        const product = JSON.parse(addToCartBtn.dataset.product);
        const chosenVariant = product.variants.find(v => v.id == variantId);
  
        if (chosenVariant.title.includes("Black") && chosenVariant.title.includes("Medium")) {
          // Find the jacket by handle (replace with your handle)
          fetch(`/products/soft-winter-jacket.js`)
            .then(r => r.json())
            .then(jacket => {
              const jacketVariant = jacket.variants[0].id; // default variant
              return fetch("/cart/add.js", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: jacketVariant, quantity: 1 })
              });
            });
        }
  
        popup.classList.add("hidden");
        alert("Added to cart!");
      });
    });
  });
  