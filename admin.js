const API_URL = "http://localhost:5000/api/products";

async function addProduct() {
    const body = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        image: document.getElementById("image").value,
        price: Number(document.getElementById("price").value)
    };

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    });

    alert("Product added!");
    loadProducts();
}

async function loadProducts() {
    const res = await fetch(API_URL);
    const products = await res.json();

    let html = "";
    products.forEach((p) => {
        html += `
            <div class="product">
                <img src="${p.image}" width="120">
                <h3>${p.name}</h3>
                <p>${p.description}</p>
                <p>KES ${p.price}</p>
            </div>
        `;
    });

    document.getElementById("product-list").innerHTML = html;
}

loadProducts();
