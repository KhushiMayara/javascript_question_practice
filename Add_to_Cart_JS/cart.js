let cartContentEl = document.querySelector(".cart-content");
let totalAmountEl = document.querySelector(".total-amount");
let basket = JSON.parse(localStorage.getItem("data")) || [];

const generateCartitem = () => {
    if (basket.length !== 0) {
        return (cartContentEl.innerHTML = basket.map(cart => {
            let { id, image, title, price } = cart;
            return `<div class="shop-box" id="${id}" >
            <img src="${image}" alt="shop-img">
            <h2>"${title}"</h2>
            <p>"${price}"</p>
            <button id="addBtn" onclick="removeToCart(${id} )" >remove</button>
            </div>
            `
        }));
    };
};
const displayCartCount = () => {
    let cartAmountEl = document.querySelector(".cart-amount");
    let cartCount = basket.length;
    cartAmountEl.innerHTML = cartCount;
}

const removeToCart = (id) => {

    basket = basket.filter(itemId => itemId.id != id);
    localStorage.setItem("data", JSON.stringify(basket));
    displayCartCount();
    generateCartitem();
}
displayCartCount();
generateCartitem();

const itemTotalAmount = () => {
    let totalAmount = 0;
    basket.map(item => {
        totalAmount += item.item * item.price;
    });
    totalAmountEl.innerHTML = `
    <h2 id="addBtn" >Total Product Amount :  $${totalAmount}</h2>
    <button id="addBtn" onclick="window.location.reload()" >Update</botton>
    `
};
itemTotalAmount();

