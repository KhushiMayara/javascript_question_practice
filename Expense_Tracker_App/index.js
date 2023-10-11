const state = {
    earning: 0,
    expense: 0,
    net: 0,
    transactions: [
        {
            id: 12,
            text: "example",
            amount: 0,
            type: "credit",
        },
    ]
};

let isUpdate = false;
let tid;
const transactionFormEl = document.querySelector("#transactionForm");

const renderTransactions = () => {
    const transactionsEl = document.querySelector(".transactions");
    const netBalanceEl = document.querySelector("#netBalance");
    const expenseBtnEl = document.querySelector("#expenseBtn");
    const earningBtnEl = document.querySelector("#earningBtn");

    const transactions = state.transactions;
    let earning = 0;
    let expense = 0;
    let net = 0;

    transactionsEl.innerHTML = "";

    transactions.forEach((transaction) => {
        const { id, text, amount, type } = transaction;
        const isCredit = type === "credit" ? true : false;
        const sing = isCredit ? "+" : "-";
        const transactionBoxEl = `
    <div class="transaction" id="${id}">
              <div class="transaction-content" onclick=showEdit(${id})>
                <div class="transaction-txt">
                  <p>${text}</p>
                <p>${sing}₹ ${amount}</p>
                </div>
                <p id="${isCredit ? "credit" : "debit"}">${isCredit ? "C" : "D"}</p>
              </div>
              <div class="lower-editsec">
                <i class="fa-solid fa-pen" onclick=updateHandler(${id})></i>
                <i class="fa-solid fa-trash" onclick=deleteHandler(${id})></i>
              </div>
            </div>
            

    `
        earning += isCredit ? amount : 0;
        expense += !isCredit ? amount : 0;
        net = earning - expense;

        transactionsEl.insertAdjacentHTML("afterbegin", transactionBoxEl);

        earningBtnEl.innerHTML = `₹ ${earning}`
        expenseBtnEl.innerHTML = `₹ ${expense}`
        netBalanceEl.innerHTML = `₹ ${net}`
    });
};

const addtransaction = (e) => {
    e.preventDefault();
    const eEarn = e.submitter.id === "earning" ? true : false;
    const dataForm = new FormData(transactionFormEl);
    const dataObj = {};
    dataForm.forEach((val, key) => {
        dataObj[key] = val;
    });
    const { text, amount } = dataObj;
    const transaction = state.transactions;
    const tdata = {
        id: isUpdate ? tid : Math.floor(Math.random() * 10000),
        text: text,
        amount: +amount,
        type: eEarn ? "credit" : "debit",
    }
    if (isUpdate) {
        const tIndex = state.transactions.findIndex(t => t.id === tid);
        state.transactions[tIndex] = tdata;
        isUpdate = false;
        tid = null;
    } else {
        transaction.push(tdata)
    }
    renderTransactions();
    transactionFormEl.reset();
    // console.log(state);
}
const showEdit = (id) => {
    const edit = document.getElementById(id)
    const lowerSection = edit.querySelector(".lower-editsec");
    lowerSection.classList.toggle("showEdit");
}
const updateHandler = (id) => {
    const transaction = state.transactions.find(t => t.id === id);
    const { text, amount } = transaction;
    const textInput = document.getElementById("text");
    const amountInput = document.getElementById("amount");

    textInput.value = text;
    amountInput.value = amount;
    isUpdate = true;
    tid = id;
};
const deleteHandler = (id) => {
    const filterHandler = state.transactions.filter(t => t.id !== id);
    // console.log(filterHandler);
    state.transactions = filterHandler;
    renderTransactions()
};
renderTransactions();
transactionFormEl.addEventListener("submit", addtransaction);
