const shopEl = document.querySelector(".shop");
const cartAmountEl = document.querySelector(".cart-amount");
let basket = JSON.parse(localStorage.getItem("data")) || [];

const generateProductPage = () => {

    shopEl.innerHTML = shopItemData.map(product => {
        let { id, image, title, price } = product;

        return `<div class="shop-box" id="${id}" >
        <img src="${image}" alt="shop-img">
        <h2>"${title}"</h2>
        <p>"${price}"</p>
        <button id="addBtn" onclick="AddToCart('${id}', '${image}', '${title}', '${price}' )" >Add to Cart</button>
        </div>
        `
    });
};
const displayCartCount = () => {
    let cartCount = basket.length;
    cartAmountEl.innerHTML = cartCount;
};
displayCartCount();
const AddToCart = (id, image, title, price) => {

    basket.push({
        id: id,
        image: image,
        title: title,
        item: 1,
        price: price,
    });
    localStorage.setItem("data", JSON.stringify(basket));
    displayCartCount();
    // console.log(basket);

}
generateProductPage();
