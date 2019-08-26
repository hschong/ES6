let checkEmailAdress = event => {
  event.preventDefault();

  if (document.getElementById('email').value.includes('@') === true) {
    document.getElementById('message').classList.add('success');
    document.getElementById('message').innerHTML = 'Thank you for signing up';
  } else {
    document.getElementById('message').classList.add('error');
    document.getElementById('message').innerHTML =
      'Sorry, please provide a valid email address';
  }
};
