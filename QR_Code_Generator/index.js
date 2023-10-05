const formContanierEl = document.querySelector("#formContanier");
const imgContainerEl = document.querySelector(".imgContainer");
const imgboxEl = document.querySelector(".imgbox");
const QRbtnEl = document.querySelector("#QRbtn");
const qrInputEl = document.querySelector("#qrInput");

window.onscroll = () => {
    imgContainerEl.classList.remove("show");
}
const renderQRcode = (url) => {
    if (!url) return;
    QRbtnEl.innerHTML = "QR Code Generating...";
    imgboxEl.src = url;

    const intervel = setInterval(() => {
        imgContainerEl.classList.add("show");;
        clearInterval(intervel);
        QRbtnEl.innerHTML = "QR Code Generate";
        qrInputEl.value = "";
    }, 500);
};

formContanierEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(formContanierEl);
    const text = formData.get("qrText");
    const qrGenterator = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
    renderQRcode(qrGenterator);
});

qrInputEl.addEventListener("keyup", () => {
    imgContainerEl.classList.remove("show");
});