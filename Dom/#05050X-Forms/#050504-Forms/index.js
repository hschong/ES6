// #050504
let checkNameLength = element => {
  const MIN = 2;

  let spanForError = Array.from(
    document.getElementById('name').getElementsByClassName('error')
  )[0];

  if (element.value.length <= MIN) {
    spanForError.innerHTML = `At least ${MIN} charcters`;
  } else {
    spanForError.innerHTML = 'OK';
  }
};

let checkPasswordLength = element => {
  const MIN = 8;

  let spanForError = Array.from(
    document.getElementById('password').getElementsByClassName('error')
  )[0];

  if (element.value.length() <= MIN) {
    spanForError.innerHTML = `At least ${MIN} characters`;
  } else {
    spanForError.innerHTML = 'OK';
  }
};
