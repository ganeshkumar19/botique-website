const products = [{
    image: "saree-image/saree1.jpg",
    name: "Banaras Saree",
    amount: 200.00,
    originalAmount: 400.00,
    badge: "50% off"
},
{
  image: "saree-image/flower-foldjpg.jpg",
  name: "Handaloom Saree",
  amount: 2800.00,
  originalAmount: 4000.00,
  badge: "30% off"
},
{
  image: "saree-image/newsaree.jpg",
  name: "Tussar silk",
  amount: 3600.00,
  originalAmount: 6000.00,
  badge: "50% off"
},
{
  image: "saree-image/istockphoto-93355119-612x612.jpg",
  name: "Banjaras Silk",
  amount: 2800.00,
  originalAmount: 4000.00,
  badge: "30% off"
},
{
  image: "saree-image/WACHM12-KanchiSilkCotton_800x.webp",
  name: "Panchampalli Saree",
  amount:2000.00,
  originalAmount:4000.00,
  badge: "50% off"
},
{
  image: "saree-image/Wine-red-pure-soft-silk-saree-without-border-s1315-fold-900x1350.webp",
  name: "Chanderi Saree",
  amount: 3200.00,
  originalAmount: 4000.00,
  badge: "30% off"
},
{
  image: "saree-image/WACHM12-KanchiSilkCotton_800x.webp",
  name: "Banarasi Saree",
  amount: 2800.00,
  originalAmount: 3500.00,
  badge: "20% off"
},
{
  image: "saree-image/-1117Wx1400H-461789864-green-MODEL.jpg",
  name: "Batik Print Saree",
  amount: 2800.00,
  originalAmount: 4000.00,
  badge: "30% off"
}]

let productsHtml = ''

products.forEach((product)=> {

  const formattedAmount = product.amount.toFixed(2); // Format amount with 2 decimal places
  const formattedOriginalAmount = product.originalAmount.toFixed(2); // Format originalAmount with 2 decimal places
  productsHtml += `<div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 my-3">
                <div class="profile-grid">
                  <div class="image-container">
                    <img class="img-fluid saree-image" src="${product.image}">
                    <div class="discount-badge">${product.badge}</div>
                  </div>
                  <p class="title text-center">${product.name}</p>
                  <p class="amount">&#x20b9;${formattedAmount}/-</p>
                  <p class="ms-2 mb-1"><s>&#x20b9;${formattedOriginalAmount}/-</s></p>
                  <button class="cart-button">Add to Cart</button>
                  <button class="buy-button">Buy Now</button>
                </div>
              </div>`
})

document.querySelector('.product-row').innerHTML = productsHtml;



