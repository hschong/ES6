let elementsInClass = '';
Array.from(document.getElementsByClassName('product')).forEach(e => {
  elementsInClass += `<div class="product">${e.innerHTML}</div>`;
  e.remove();
});

document.getElementById('products').innerHTML = elementsInClass;
