// <!-- #050403
//       Given the below html, remove the class selected from all the elements
//       that do not have a class of primary -->

//     <ul>
//       <li class="selected primary">1</li>
//       <li class="selected">2</li>
//       <li class="selected">3</li>
//     </ul>

arraySelected = Array.from(document.getElementsByClassName('selected'));
arraySelected.forEach(e => {
  if (e.classList.contains('primary') === false) {
    e.classList.remove('selected');
  }
});
