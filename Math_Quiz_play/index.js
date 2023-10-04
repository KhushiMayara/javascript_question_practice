const questionElem = document.querySelector("#question")
const scoreElem = document.querySelector("#score")
const questionFormElem = document.querySelector("#questionForm")
const formElem = document.querySelector("form")
let storeAns;
let score = localStorage.getItem("score")

const randomNumberGenerater = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const getQuestion = () => {
    const randomOne = randomNumberGenerater(1, 10)
    const randomTwo = randomNumberGenerater(1, 10)
    const questionType = randomNumberGenerater(1, 4)
    let firstNumber;
    let secondNumber;

    if (randomOne > randomTwo && questionType > 2) {
        firstNumber = randomOne;
        secondNumber = randomTwo;
    } else {
        firstNumber = randomTwo;
        secondNumber = randomOne;
    }

    let question;
    let answer;

    switch (questionType) {
        case 1:
            question = `Q. What is ${firstNumber} multiplay by ${secondNumber} ?`;
            answer = firstNumber * secondNumber;
            break;

        case 2:
            question = `Q. What is ${firstNumber} add to ${secondNumber} ?`;
            answer = firstNumber + secondNumber;
            break;
        case 3:
            question = `Q. What is ${firstNumber} divide by  ${secondNumber} ?`;
            answer = Math.floor(firstNumber / secondNumber);
            break;

        case 4:
            question = `Q. What is ${firstNumber} subtract from ${secondNumber} ?`;
            answer = Math.floor(firstNumber - secondNumber);
            break;

        default:
            question = `Q. What is ${firstNumber} add to ${secondNumber} ?`;
            answer = firstNumber + secondNumber;
            break;
    }

    return { question, answer }
}
const showQuestion = () => {
    const { question, answer } = getQuestion();
    questionElem.innerHTML = question;
    storeAns = answer;
    scoreElem.innerHTML = score;
}
showQuestion()

formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(questionFormElem);
    const userAns = +formData.get("answer")
    if (storeAns === userAns) {
        score += 1;

    } else {
        score -= 1

    }
    scoreElem.innerHTML = score;
    localStorage.setItem("score", score);
    showQuestion()
    event.target.reset();

})
