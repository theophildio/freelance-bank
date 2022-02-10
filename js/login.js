document.getElementById('login-button').addEventListener('click', function() {
  // get user email
  const inputEmail = document.getElementById('user-email');
  const userEmail = inputEmail.value;
  // get user password
  const inputPassword = document.getElementById('user-password');
  const userPassword = inputPassword.value;
  if (userEmail == 'info@login.com' && userPassword == '12345678') {
    window.location.href = 'bank.html';
  } else {
    console.log("Email and password doesn't match!");
  }
  // clear user input fields
  inputEmail.value = '';
  inputPassword.value = '';
});
