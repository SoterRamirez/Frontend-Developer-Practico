/* Seleccionando los elementos del DOM. */
const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

/* Adición de detectores de eventos a los elementos. */
menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

/**
 * Si el carrito de compras está abierto, ciérrelo y cambie el menú del escritorio
 */
function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

/**
 * Si el carrito de compras está abierto, ciérrelo, luego cierre los detalles del producto a un lado,
 * luego cambie el menú móvil
 */
function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive");
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle("inactive");
}

/**
 * Si el menú móvil está abierto, ciérralo; si el detalle del producto está abierto, ciérrelo; alternar
 * el carrito de compras
 */
function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }

    const isProductDetailClosed =
        productDetailContainer.classList.contains("inactive");

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add("inactive");
    }

    shoppingCartContainer.classList.toggle("inactive");
}

/**
 * Cuando el usuario hace clic en la imagen del producto, el contenedor del carrito de compras se
 * oculta y se muestra el contenedor de detalles del producto.
 */
function openProductDetailAside() {
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.remove("inactive");
}

/**
 * Cuando el usuario haga clic en el botón de cerrar, agregue la clase inactiva al contenedor de
 * detalles del producto.
 */
function closeProductDetailAside() {
    productDetailContainer.classList.add("inactive");
}

/* Creación de una matriz de objetos. */
const productList = [];
productList.push({
    name: "Blockchain",
    price: 120,
    image: "https://images.unsplash.com/photo-1643101809904-6960d19952b5",
});
productList.push({
    name: "BTC",
    price: 220,
    image: "https://images.unsplash.com/photo-1643101808871-6d5d03cccf37",
});
productList.push({
    name: "NFT",
    price: 620,
    image: "https://images.unsplash.com/photo-1643101809204-6fb869816dbe",
});
productList.push({
    name: "Blockchain",
    price: 120,
    image: "https://images.unsplash.com/photo-1643101809904-6960d19952b5",
});
productList.push({
    name: "BTC",
    price: 220,
    image: "https://images.unsplash.com/photo-1643101808871-6d5d03cccf37",
});
productList.push({
    name: "NFT",
    price: 620,
    image: "https://images.unsplash.com/photo-1643101809204-6fb869816dbe",
});
productList.push({
    name: "Blockchain",
    price: 120,
    image: "https://images.unsplash.com/photo-1643101809904-6960d19952b5",
});
productList.push({
    name: "BTC",
    price: 220,
    image:
        "https://images.unsplash.com/photo-1643101808871-6d5d03cccf37",
});
productList.push({
    name: "NFT",
    price: 620,
    image:
        "https://images.unsplash.com/photo-1643101809204-6fb869816dbe",
});
productList.push({
    name: "Blockchain",
    price: 120,
    image: "https://images.unsplash.com/photo-1643101809904-6960d19952b5",
});
productList.push({
    name: "BTC",
    price: 220,
    image: "https://images.unsplash.com/photo-1643101808871-6d5d03cccf37",
});
productList.push({
    name: "NFT",
    price: 620,
    image: "https://images.unsplash.com/photo-1643101809204-6fb869816dbe",
});

/**
 * Crea un div con la clase "product-card", crea un elemento img, establece el atributo src a la imagen
 * del producto, agrega un detector de eventos al elemento img, crea un div con la clase
 * "product-info", crea un div, crea un elemento p, establece el texto interno en el precio del
 * producto, crea un elemento p, establece el texto interno en el nombre del producto, agrega los
 * elementos p al div, crea un elemento de figura, crea un elemento img, establece el atributo src en
 * el imagen del carrito, agrega el elemento img al elemento figure, agrega el div y el elemento figure
 * al div con la clase "product-info", agrega el elemento img y el div con la clase "product-info" al
 * div con la clase "tarjeta de producto" y agrega el div con la clase "tarjeta de producto" al div con
 * la clase "contenedor de tarjetas"
 * @param arr - una matriz de objetos que contiene la información del producto
 */
function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductDetailAside);

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const productInfoDiv = document.createElement("div");

        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./assets/images/Icons/bt_add_to_cart.svg");

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
