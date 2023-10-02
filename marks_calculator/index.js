const formElem = document.querySelector("form")
const calculateForm = document.querySelector("#calculateForm")
const resultsElem = document.querySelector("#results")

formElem.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(calculateForm);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = +value;
    });

    const avgMarks = 400;
    const totalMarks = data.chemistry + data.english + data.physices + data.math
    const result = (totalMarks / avgMarks) * 100;
    resultsElem.innerHTML = `
     Your total marks is ${totalMarks} and your result is ${result}%
    `;

})