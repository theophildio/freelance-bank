// Deposit caculation
document.getElementById('deposit-button').addEventListener('click', function() {
  const depositField = document.getElementById('deposit-input');
  const depositAmount = parseFloat(depositField.value);
  const depositTotal = document.getElementById('deposit-total');
  const currentDepositBalance = depositTotal.innerText;
  const newCurrentDepositBalance = parseFloat(currentDepositBalance);
  const updateDepositBalance = newCurrentDepositBalance + depositAmount;
  depositTotal.innerText = updateDepositBalance;
  // clear deposit field
  depositField.value = ''; 
  // Add deposit to current balance
  const mainBalance = document.getElementById('current-amount');
  const mainBalanceTotal = mainBalance.innerText;
  const newMainBalanceTotal = parseFloat(mainBalanceTotal);
  const updateNewMainBalance = newMainBalanceTotal + depositAmount;
  mainBalance.innerText = updateNewMainBalance;
});

// Withdraw calculation

