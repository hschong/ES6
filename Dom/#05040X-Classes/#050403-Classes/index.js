// <!-- #050403
//       Given the below html, remove the class selected from all the elements
//       that do not have a class of primary -->

//     <ul>
//       <li class="selected primary">1</li>
//       <li class="selected">2</li>
//       <li class="selected">3</li>
//     </ul>

let removeClassInElement = givenClass => {
  Array.from(document.getElementsByClassName(givenClass)).forEach(e => {
    if (e.classList.contains('primary') === false) {
      e.classList.remove(givenClass);
    }
  });
};

// Get all the elements with a class selected
// loop through these elements
// if ! primary, remove selected
