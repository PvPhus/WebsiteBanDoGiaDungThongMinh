//tăng giảm số lượng sản phẩm
const quantityInput = document.getElementById('quantity');

function increaseQuantity() {
    let currentValue = parseInt(quantity.value, 10);
    quantityInput.value = currentValue + 1;
}

function decreaseQuantity() {
    let currentValue = parseInt(quantity.value, 10);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
}



//Add products to cart, count products and count prices
// document.addEventListener('DOMContentLoaded', function () {
//     const addToCartButton = document.querySelector('.add-products-cart');
//     const quantityInput = document.getElementById('quantity');
//     const totalPriceElement = document.querySelector('.total-prices');
//     const totalItemsElement = document.querySelector('.total-products');

//     addToCartButton.addEventListener('click', () => {
//         AddProduct();
//     });

//     function AddProduct() {
//         const productPrice = parseFloat(document.querySelector('.product-price span').textContent.split('nvđ')[0].trim());
//         const quantity = parseInt(quantityInput.value);

//         const totalPriceForItem = productPrice * quantity;

//         // Update total price and total items
//         updateTotals(totalPriceForItem, quantity);
//     }

//     function updateTotals(totalPriceForItem, quantity) {
//         let totalPrice = parseFloat(totalPriceElement.textContent);
//         let totalItems = parseInt(totalItemsElement.textContent);

//         totalPrice += totalPriceForItem;
//         totalItems += quantity;

//         totalPriceElement.textContent = totalPrice.toFixed(2);
//         totalItemsElement.textContent = totalItems;
//     }
// });
