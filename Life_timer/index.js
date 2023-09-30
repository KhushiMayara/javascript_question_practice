let isDOB = false;
let dateOfBirth;
const iconContanier = document.querySelector(".icon-contanier");
const inputContant = document.querySelector(".input-contant");
const DobInput = document.querySelector("#dob-input");
const DobBtn = document.querySelector("#dob-btn");
const textContainer = document.querySelector(".text-container");
const afterTextContainer = document.querySelector(".afterText-container");
const yearsElem = document.querySelector("#years");
const monthsElem = document.querySelector("#months");
const daysElem = document.querySelector("#days");
const hoursElem = document.querySelector("#hours");
const minutesElem = document.querySelector("#minutes");
const secondsElem = document.querySelector("#seconds");
const resetBtn = document.querySelector("#reset");

iconContanier.addEventListener("click", () => {
    if (isDOB) {
        inputContant.classList.add("hide");
    } else {
        inputContant.classList.remove("hide");
    }
    isDOB = !isDOB;
})

DobBtn.addEventListener("click", () => {
    const dateString = DobInput.value;
    dateOfBirth = dateString ? new Date(dateString) : null;
    // console.log(DobInput.value);
    if (dateOfBirth) {
        localStorage.setItem("year", dateOfBirth.getFullYear())
        localStorage.setItem("month", dateOfBirth.getMonth())
        localStorage.setItem("date", dateOfBirth.getDate())
    }
    contentToggler()
    setInterval(() => {
        updateDate()
    }, 1000)
})
const makeTwoDigitNumber = (num) => {
    return num > 9 ? num : `0${num}`
}
const updateDate = () => {
    const currentDate = new Date()
    const dateDiff = currentDate - dateOfBirth
    const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365))
    const month = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12;
    const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
    const hour = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
    const minute = Math.floor(dateDiff / (1000 * 60)) % 60
    const second = Math.floor(dateDiff / 1000) % 60
    // console.log(dateDiff, year, month, day, hour, minute, second);
    yearsElem.innerHTML = makeTwoDigitNumber(year);
    monthsElem.innerHTML = makeTwoDigitNumber(month);
    daysElem.innerHTML = makeTwoDigitNumber(day);
    hoursElem.innerHTML = makeTwoDigitNumber(hour);
    minutesElem.innerHTML = makeTwoDigitNumber(minute);
    secondsElem.innerHTML = makeTwoDigitNumber(second);

}


resetBtn.addEventListener("click", () => {
    localStorage.removeItem("year")
    localStorage.removeItem("month")
    localStorage.removeItem("date")
    localStorageGetter()
    afterTextContainer.classList.add("hide")
    textContainer.classList.remove("hide")
})

const contentToggler = () => {
    updateDate()
    if (dateOfBirth) {
        textContainer.classList.add("hide")
        afterTextContainer.classList.remove("hide")
    } else {
        afterTextContainer.classList.add("hide")
        textContainer.classList.remove("hide")
    }
}

const localStorageGetter = () => {
    const year = localStorage.getItem("year")
    const month = localStorage.getItem("month")
    const date = localStorage.getItem("date")
    if (year && month && date) {
        dateOfBirth = new Date(year, month, date)
    }
    setInterval(() => {
        updateDate()
    }, 1000)
}
localStorageGetter()
contentToggler()










