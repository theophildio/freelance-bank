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
document.getElementById('withdraw-button').addEventListener('click', function() {
  const withdrawInput = document.getElementById('withdraw-input');
  const withdrawAmount = parseFloat(withdrawInput.value);
  const currentWithdrawAmount = document.getElementById('withdraw-amount');
  const updateWithdrawAmount = parseFloat(currentWithdrawAmount.innerText);
  const withdrawAmountTotal = updateWithdrawAmount + withdrawAmount;
  currentWithdrawAmount.innerText = withdrawAmountTotal;
  // Clear withdraw field
  withdrawInput.value = '';
  // Update main balance after withdraw
  const mainBalance = document.getElementById('current-amount');
  const currentMainBalance = parseFloat(mainBalance.innerText);
  const updateMainBalance = currentMainBalance - withdrawAmount;
  mainBalance.innerText = updateMainBalance;
});

// Log out 
document.getElementById('logout').addEventListener('click', function() {
  window.location.href = 'index.html';
});