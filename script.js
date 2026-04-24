let transactions = [];

function addTransaction(id, description, amount, type) {
  transactions.push({
    id,
    description,
    amount,
    type
  });

  saveTransactions();
}

function deleteTransactionById(id) {
  transactions = transactions.filter(
    transaction => transaction.id !== id
  );

  saveTransactions();
}

function calculateTotalIncome(transactions) {
  return transactions.reduce(
    (sum, t) => t.type === "income" ? sum + t.amount : sum,
    0
  );
}

function calculateTotalExpense(transactions) {
  return transactions.reduce(
    (sum, t) => t.type === "expense" ? sum + t.amount : sum,
    0
  );
}

function calculateBalance(transactions) {
  return calculateTotalIncome(transactions) -
         calculateTotalExpense(transactions);
}

function saveTransactions() {
  localStorage.setItem(
    "transactions",
    JSON.stringify(transactions)
  );
}

function loadTransactions() {
  const data = localStorage.getItem("transactions");
  if (data) {
    transactions = JSON.parse(data);
  }
}


// let transactions = [];
// // A transcation needs:
// // id, amt, description, type.
// // let sampleTranscation = {
// //   id: 1,
// //   description: 'salary',
// //   amount: 10000,
// //   type: 'income',
// // }

// // transactions = addtransactions(transactions, {
// //   id: 1,
// //   description: 'salary',
// //   amount: 25000,
// //   type: 'income'
// // });

// // transactions = addtransactions(transactions, {
// //   id: 2,
// //   description: 'Food',
// //   amount: 2500,
// //   type: 'expense'
// // });

// // transactions = addtransactions(transactions, {
// //   id: 3,
// //   description: 'Increment',
// //   amount: 5000,
// //   type: 'income'
// // });

// function addtransaction(id, description, amount, type) {
//   transactions.push({
//     id,
//     description,
//     amount,
//     type
//   });
// };
// // console.log(transactions);

// // addtransactions(1, 'Salary', 25000, 'income');
// // addtransactions(2, 'Food', 2000, 'expense');
// // addtransactions(3, 'Gift', 500, 'income');
// // addtransactions(4, 'Snooker-paid', 150, 'expense');
// // console.log(transactions);


// function deleteTranscation(transactions, id) {
//   return transactions.filter( eachTrans => eachTrans.id !== id);
// };

// // transactions = deleteTranscation(transactions, 2);
// // console.log(transactions);

// function calculateTotalIncome(transactions) {
//  return transactions.reduce((sum, acc) => (acc.type === 'income')? sum + acc.amount: sum, 0);

//   // let totalIncome = 0;
//   // for (let transcation of transactions) {
//   //   if(transcation.type === 'income'){
//   //     totalIncome = totalIncome + transcation.amount;
//   //   }
//   // }
//   // return totalIncome;
// };
// // calculateTotalIncome(transactions);
// // console.log(calculateTotalIncome(transactions));

// function calculateTotalExpense(transactions){
//  return transactions.reduce((sum, acc) => (acc.type === 'expense')? sum + acc.amount: sum, 0);
// }
// // calculateTotalExpense(transactions);
// // console.log(calculateTotalExpense(transactions));

// function calculateBalance(transactions){
//   const income = calculateTotalIncome(transactions);
//   const expense = calculateTotalExpense(transactions);

//   return income - expense;
// }
// // console.log(calculateBalance(transactions));

// function deleteTransactionByID(id) {
//   transactions = transactions.filter(
//     transaction => transaction.id !== id
//   );
// }