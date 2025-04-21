function processTransactions(transactions) {
  let finalBalance = 0;
  let TotalDeposit = 0;
  let TotalWithdraw = 0;

  transactions.forEach((transaction) => {
    if (transaction.type === "Deposit") {
      finalBalance += transaction.amount;
      TotalDeposit += transaction.amount;
    } else if (transaction.type === "Withdraw") {
      finalBalance -= transaction.amount;
      TotalWithdraw += transaction.amount;
    }
  });
  return {
    finalBalance: finalBalance,
    TotalDeposit: TotalDeposit,
    TotalWithdraw: TotalWithdraw,
  };
}

const transactions = [
  { type: "Deposit", amount: 1000 },
  { type: "Withdraw", amount: 500 },
  { type: "Deposit", amount: 200 },
  { type: "Withdraw", amount: 100 },
];
console.log(processTransactions(transactions));
