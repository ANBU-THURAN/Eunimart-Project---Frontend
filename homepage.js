const productList = document.querySelector('#product-list');

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {
    
    products.forEach(product => {
      
      const listItem = document.createElement('li');
      listItem.classList.add('product-card');
      listItem.setAttribute('data-id', product.id);
      const image = document.createElement('img');
      image.src = product.image;
      image.alt = product.title;
      listItem.appendChild(image);
 
      const heading = document.createElement('h2');
      heading.textContent = product.title;
      listItem.appendChild(heading);
   
      const price = document.createElement('p');
      price.textContent = `$${product.price}`;
      listItem.appendChild(price);

      productList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error(error);
  });


productList.addEventListener('click', event => {

  if (event.target.closest('.product-card')) {
    const productId = event.target.closest('.product-card').getAttribute('data-id');
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(response => response.json())
      .then(product => {
        window.location.href = `details.html?id=${productId}`;
      })
      .catch(error => {
        console.error(error);
      });
  }
});

const logoutBtn = document.querySelector('.logout-btn');

logoutBtn.addEventListener('click', () => {

  localStorage.clear();

  window.location.href = 'loginpage.html';
});



