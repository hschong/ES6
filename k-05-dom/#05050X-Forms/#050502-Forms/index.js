// #050502
// Given the below html, change the content of the element with an id of total to the sum of
// the values typed inside the 2 input fields.
// Make sure the total is displayed in real-time as the values are typed in.

// <input type="number" class="number" placeholder="Number 1">
// <input type="number" class="number" placeholder="Number 2">
// <label>Total: <span id="total"></span></label>

let refreshTotal = () => {
  document.getElementById('total').innerHTML = Array.from(
    document.getElementsByClassName('number')
  ).reduce((a, b) => Number(a.value) + Number(b.value));
};
