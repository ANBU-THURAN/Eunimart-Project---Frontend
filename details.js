const productId = new URLSearchParams(window.location.search).get("id");

fetch(`https://fakestoreapi.com/products/${productId}`)
  .then(response => response.json())
  .then(product => {
    const productImage = document.querySelector('.product-image');
    productImage.src = product.image;

    const productTitle = document.querySelector('.product-title');
    productTitle.textContent = product.title;

    const productDescription = document.querySelector('.product-description');
    productDescription.textContent = product.description;

    const productPrice = document.querySelector('.product-price');
    productPrice.textContent = `$${product.price}`;
  })
  .catch(error => {
    console.error('Error fetching product details', error);
  });

  const logoutBtn = document.querySelector('.logout-btn');

  logoutBtn.addEventListener('click', () => {
  
    localStorage.clear();
  
    window.location.href = 'loginpage.html';
  });