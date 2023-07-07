const products2 = [{
  image: "saree-image/white-chikankari-work-georgette-partywear-gown-peachmode-1.webp",
  name: "White Chikankari Gown",
  amount: 2520,
  originalAmount: 2800,
  badge: "10% off"
},
{
image: "saree-image/maroon-lucknowi-chikankari-rayon-partywear-gown-peachmode-1.webp",
name: "Red Rayon Partywear",
amount: 1760,
originalAmount: 3200,
badge: "30% off"
},
{
image: "saree-image/dusty-pink-golden-sequence-georgette-anarkali-partywear-gown-peachmode-1.webp",
name: "Georgette Anarkali Gown",
amount: 3440,
originalAmount: 4300,
badge: "20% off"
},
{
image: "saree-image/pink-sequence-embroidered-with-printed-pure-cotton-gown-peachmode-1.webp",
name: "Pink Sequins Gown",
amount: 3640,
originalAmount: 5600,
badge: "35% off"
},
{
image: "saree-image/surpassing-light-aqua-green-colored-casual-digital-printed-muslin-blend-kurti-palazzo-set-peachmode-2.webp",
name: "Green Printed Kurti",
amount:1750,
originalAmount:3500,
badge: "50% off"
},
{
image: "saree-image/file_7e54ddc9-fffb-4acc-9fb7-517bec12ceb2.webp",
name: "Handwork Cotton Gown",
amount: 4200,
originalAmount: 6000,
badge: "30% off"
},
{
image: "saree-image/pink-digital-printed-cotton-silk-gown-peachmode-1.webp",
name: "Pink Printed Gown",
amount: 3200,
originalAmount: 4000,
badge: "20% off"
},
{
image: "saree-image/black-floral-embroidered-georgette-anarkali-suit-peachmode-2.webp",
name: "Black Embroidered Gown",
amount: 2100,
originalAmount: 2800,
badge: "25% off"
}]

let products2Html = ''

products2.forEach((product)=> {

const formattedAmount = product.amount.toFixed(2); // Format amount with 2 decimal places
const formattedOriginalAmount = product.originalAmount.toFixed(2); // Format originalAmount with 2 decimal places
products2Html += `<div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 my-3">
                    <div class="profile-grid">
                      <div class="image-container">
                        <img class="img-fluid party-image" src=${product.image}>
                        <div class="discount-badge1">${product.badge}</div>
                      </div>
                      <p class="title text-center">${product.name}</p>
                      <p class="amount">&#x20b9;${formattedAmount}/-</p>
                      <p class="ms-2 mb-1"><s>&#x20b9;${formattedOriginalAmount}/-</s></p>
                      <button class="cart-button">Add to Cart</button>
                      <button class="buy-button">Buy Now</button>
                    </div>
                  </div>`
})

document.querySelector('.product1-row').innerHTML = products2Html;