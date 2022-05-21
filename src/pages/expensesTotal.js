function expensesTotal(expenseArray) {
  const eachExpense = expenseArray
    .map(({ value, currency, exchangeRates }) => exchangeRates[currency].ask * value);
  const spendTotal = eachExpense.reduce((acc, curr) => acc + curr, 0);
  return Number(spendTotal.toFixed(2));
}

export default expensesTotal;
