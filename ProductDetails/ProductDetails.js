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

function AddProduct() {
    // Lấy giá trị của các phần tử trong HTML
    var imgProduct = document.querySelector('.img-ProductDetail').src;
    var nameProduct = document.querySelector('.name-Product').textContent;
    var priceProduct = document.querySelector('.priceProduct').textContent;
    var quantity = document.getElementById('quantity').value;

    // Tạo một đối tượng để lưu các thông tin
    var product = {
        Img: imgProduct,
        Name: nameProduct,
        Price: priceProduct,
        Quantity: quantity
    };

    // Lấy danh sách sản phẩm từ localStorage hoặc tạo mới nếu không tồn tại
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Thêm sản phẩm mới vào danh sách
    cartItems.push(product);

    // Lưu lại danh sách sản phẩm vào localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));
}
