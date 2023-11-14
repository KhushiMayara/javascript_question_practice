let navMenu = document.querySelector('#nav-menu')
let navPages = document.querySelector(".nav-pages")
let closeMenu = document.querySelector("#closeMenu")
let shops = document.querySelector("#shops")
let reviews = document.querySelector("#reviews")
let blogs = document.querySelector("#blogs")
let contacts = document.querySelector("#contacts")
let shopItem = document.querySelectorAll(".shop-item")
let productDetails = document.querySelector(".product-details")
let container = document.querySelector(".container")
let detailsImg = document.querySelector("#detailsImg")
let buyBtn = document.querySelector("#buyBtn")
let buyDetails = document.querySelector(".buy-details")
let buyClose = document.querySelector(".buyClose")
let buyPage = document.querySelector(".buy-page")


navMenu.addEventListener("click", () => {
    navPages.classList.toggle("showmenu")
    closeMenu.classList.toggle("fa-times")
})

shops.addEventListener("click", () => {
    shops.style.color = "#f86f03";
    reviews.style.color = "#fff";
    blogs.style.color = "#fff";
    contacts.style.color = "#fff";

})

reviews.addEventListener("click", () => {
    reviews.style.color = "#f86f03";
    shops.style.color = "#fff";
    blogs.style.color = "#fff";
    contacts.style.color = "#fff";
})

blogs.addEventListener("click", () => {
    blogs.style.color = "#f86f03";
    reviews.style.color = "#fff";
    shops.syle.color = "#fff";
    contacts.style.color = "#fff";
})
contacts.addEventListener("click", () => {
    contacts.style.color = "#f86f03";
    shops.style.color = "#fff";
    blogs.style.color = "#fff";
    reviews.style.color = "#fff";
})

shopItem.forEach(currentValue => {
    currentValue.addEventListener("click", () => {
        productDetails.style.display = "flex";
        container.style.display = "none";
        //  buy section
        let imgSrc = currentValue.firstElementChild.src;
        detailsImg.src = imgSrc;

        buyBtn.addEventListener("click", () => {
            buyDetails.style.display = "block";
            document.querySelector(".buy-page").innerHTML = `
            <h3>Enter Detials:</h3>
        <input type="text" id="name"  placeholder="Enter your Name"><br>
        <input type="text" id="address" placeholder="Enter your Address"><br>
        <input type="text" id="number" placeholder="Enter your number"><br>
        <h3>Payment Options:</h3>
        <select>
            <option value="Google Pay" >Google Pay</option>
            <option value="Phone Pay" >Phone Pay</option>
            <option value="Bharat Pay" >Bharat Pay</option>
            <option value="Cash-On-Delivery" >Cash-On-Delivery</option>
        </select><br>
            `

            // submit btn form section
            let submitBtn = document.createElement("button");
            submitBtn.innerHTML = "Submit";
            buyPage.append(submitBtn);


            submitBtn.addEventListener("click", () => {
                let name = document.querySelector("#name");
                let address = document.querySelector("#address");
                let number = document.querySelector("#number");

                if (name.value == "" && address.value == "" && number.value == "") {
                    alert("Fill the details");
                }
                else {
                    alert("Your response recorded");
                    buyDetails.style.display = "none";
                }
            })
            // close the form
            buyClose.addEventListener("click", () => {
                buyDetails.style.display = "none";
            })
        })
    })
});