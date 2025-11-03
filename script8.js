
function showProfile() {
    let profileIcon = document.querySelector(".profile-icon");
    let miniProfile = document.querySelector(".mini-profile");

    profileIcon.addEventListener("mouseenter", function () {
        miniProfile.style.display = "block"
    })

    profileIcon.addEventListener("mouseleave", function () {
        miniProfile.style.display = "none"
    })


}

function humBurger() {

    let hamburger = document.querySelector("#hamburger");
    let mobileMenu = document.querySelector("#mobileMenu");

    hamburger.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");

    })
}


showProfile();
humBurger();




document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains("product-btn")) {
        let productId = parseInt(e.target.dataset.id);

        // Purana cart lo ya empty array
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // product id cart me daal do
        cart.push(productId);

        // fir localStorage update karo
        localStorage.setItem("cart", JSON.stringify(cart));

       // alert("Product added to cart!");
    }
});

// 🔹 Page load
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart = [...new Set(cart)]; // Ensure unique ids
localStorage.setItem("cart", JSON.stringify(cart));

// 🔹 Cart display
let cartDisplay = document.querySelector(".cart-count");
cartDisplay.textContent = cart.length;

// 🔹 Toast element
const toast = document.getElementById("toast");

// 🔹 Add to cart buttons
document.querySelectorAll(".product-btn").forEach(btn => {
    let productId = parseInt(btn.dataset.id);

    // Page load pe, cart me ho to pink + "Add to Cart"
    if (cart.includes(productId)) {
        btn.textContent = "Add to Cart";
        btn.classList.add("pink-btn");
    } else {
        btn.textContent = "Add to Cart";
        btn.classList.add("pink-btn");
    }

    btn.addEventListener("click", function () {
        if (!cart.includes(productId)) {
            cart.push(productId);
            cart = [...new Set(cart)];
            localStorage.setItem("cart", JSON.stringify(cart));
            cartDisplay.textContent = cart.length;
        }

        // Button temporarily green
        btn.textContent = "✔ Added!";
        btn.classList.remove("pink-btn");
        btn.classList.add("added"); // green

        setTimeout(() => {
            btn.textContent = "Add to Cart";
            btn.classList.remove("added");
        }, 1500);

        // Toast
        toast.textContent = "Product added to cart!";
        toast.style.opacity = 1;
        setTimeout(() => {
            toast.style.opacity = 0;
        }, 2000);
    });
});












