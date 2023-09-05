// Sample product data (you would typically load this from a database)
const products = [
    {
        id: 1,
        name: "iPhone 12",
        price: 49999,
        imageUrl: "https://img1.gadgetsnow.com/gd/images/products/additional/large/G133843_View_1/mobiles/smartphones/apple-iphone-12-64-gb-black-4-gb-ram-.jpg",
    },
    {
        id: 2,
        name: "iPhone 13",
        price: 59999,
        imageUrl: "https://img2.gadgetsnow.com/gd/images/products/additional/large/G306154_View_1/mobiles/smartphones/apple-iphone-13-128-gb-starlight-4-gb-ram-.jpg",
    },
    {
        id: 3,
        name: "iPhone 14",
        price: 69999,
        imageUrl: "https://img5.gadgetsnow.com/gd/images/products/additional/large/G390766_View_1/mobiles/smartphones/apple-iphone-14-128-gb-blue-6-gb-ram-.jpg",
    },
   
    // Add more product data as needed
];

// Function to generate product HTML
function generateProductHTML(product) {
    // Use the Unicode character for the Indian Rupee symbol
    const rupeeSymbol = "\u20B9";

    return `
        <div class="product">
            <img src="${product.imageUrl}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Price: ${rupeeSymbol}${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
}

// Function to populate the product list
function populateProductList() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach((product) => {
        const productHTML = generateProductHTML(product);
        productList.innerHTML += productHTML;
    });
}

// Function to add a product to the cart (placeholder function)
function addToCart(productId) {
    alert(`Product with ID ${productId} added to cart.`);
}

// Load products when the page loads
window.addEventListener("load", populateProductList);

// Add interactivity to the search button (example: alert a message)
document.getElementById("searchButton").addEventListener("click", function () {
    const searchTerm = document.querySelector(".search-bar input[type='text']").value;
    alert("You searched for: " + searchTerm);
});
