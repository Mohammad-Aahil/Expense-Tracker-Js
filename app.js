const form = document.getElementById("transactionForm");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const typeSelect = document.getElementById("type");

const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const listEl = document.getElementById("transactionList");

form.addEventListener("submit", handleFormSubmit);
listEl.addEventListener("click", handleDelete);

loadTransactions();
render();

function handleFormSubmit(e) {
  e.preventDefault();

  addTransaction(
    Date.now(),
    descriptionInput.value,
    Number(amountInput.value),
    typeSelect.value
  );

  render();

  // ✅ Reset form
  descriptionInput.value = "";
  amountInput.value = "";
  typeSelect.value = "income";
}

function handleDelete(e) {
  if (!e.target.classList.contains("delete-btn")) return;

  const li = e.target.closest("li");
  const id = Number(li.dataset.id);

  deleteTransactionById(id);
  render();
}

function render() {
  balanceEl.textContent = calculateBalance(transactions);
  incomeEl.textContent = calculateTotalIncome(transactions);
  expenseEl.textContent = calculateTotalExpense(transactions);

  listEl.innerHTML = "";

  transactions.forEach(transaction => {
    const li = document.createElement("li");
    li.dataset.id = transaction.id;
    li.classList.add(transaction.type);
    li.innerHTML = `
      ${transaction.description} - ${transaction.amount}
      <button class="delete-btn">❌</button>
    `;

    listEl.appendChild(li);
  });
}



// const form = document.getElementById("transactionForm");
// let descriptionInput = document.getElementById("description");
// let amountInput = document.getElementById("amount");
// let typeSelect = document.getElementById("type");

// const balanceEl = document.getElementById("balance");
// const incomeEl = document.getElementById("income");
// const expenseEl = document.getElementById("expense");
// const listEl = document.getElementById("transactionList");

// form.addEventListener("submit", handleFormSubmit);

// function handleFormSubmit(e) {
//   e.preventDefault();
  
//   let description = descriptionInput.value;
//   let amount = Number(amountInput.value);
//   let type = typeSelect.value;

//   addtransaction(
//     Date.now(),
//     description,
//     amount,
//     type
//   );

//   render();

//   descriptionInput.value = '';
//   amountInput.value = '';
//   typeSelect.value = 'income';

// }

// function render() {
//   balanceEl.textContent = calculateBalance(transactions);
//   incomeEl.textContent = calculateTotalIncome(transactions);
//   expenseEl.textContent = calculateTotalExpense(transactions);

//   listEl.innerHTML = "";

//   transactions.forEach(function(transaction){
//     const li = document.createElement('li');
//     li.dataset.id = transaction.id;
//     li.innerHTML = `${transaction.description}: ${transaction.amount}
//     <button class="delete-btn">❌</button>`;
//     listEl.appendChild(li);
//   });
// }

// listEl.addEventListener("click", function (e) {
//   if (e.target.classList.contains("delete-btn")) {
//     const li = e.target.closest("li");
//     const id = Number(li.dataset.id);
    
//     console.log(e.target);
//     console.log(e.target.closest("li"));

//     deleteTransactionByID(id);
//     render();
//   }
// });