document.getElementById('deposit-button').addEventListener('click', function() {
  const depositField = document.getElementById('deposit-input');
  const depositAmount = parseFloat(depositField.value);
  const depositTotal = document.getElementById('deposit-total');
  const currentDepositBalance = depositTotal.innerText;
  const convertCurrentDepositBalance = parseFloat(currentDepositBalance);
  const updateDepositBalance = convertCurrentDepositBalance + depositAmount;
  depositTotal.innerText = updateDepositBalance;
});