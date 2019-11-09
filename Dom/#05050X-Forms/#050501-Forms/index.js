// #050501
// Given the below html and css, toggle the content of the button between ON and OFF
// when clicked, as well as the classes .on and .off.

const changeStatus = e => {
  let status = 'on';
  if (e.innerHTML === 'ON') {
    status = 'off';
  }

  e.classList.add(status);
  e.classList.remove(e.innerHTML.toLowerCase());
  e.innerHTML = status.toUpperCase();
};
