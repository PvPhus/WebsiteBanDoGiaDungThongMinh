document.addEventListener('DOMContentLoaded', function () {
    // Lấy thông tin sản phẩm từ localStorage
    var selectedProduct = JSON.parse(localStorage.getItem('productdetail'))[0] || {};

    // Hiển thị thông tin sản phẩm trên trang chi tiết
    document.querySelector('.img-ProductDetail').src = selectedProduct.imgProduct;
    document.querySelector('.name-Product').textContent = selectedProduct.nameProduct;
    document.querySelector('.priceProduct').textContent = selectedProduct.priceProduct;

    // Xóa thông tin sản phẩm khỏi localStorage sau khi sử dụng (tùy theo yêu cầu)
    localStorage.removeItem('productdetail');
});

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
    alert('Thêm thành công!');
}
