document.addEventListener('DOMContentLoaded', function () {
    // Gọi hàm hiển thị thông tin sản phẩm khi trang được tải
    displayCartItems();
    // Gọi hàm load lại giá tiền khi vào giỏ hàng
    updatePrice();
    
    function displayCartItems() {
        // Lấy thông tin sản phẩm từ localStorage
        var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Lấy phần tbody của bảng trong trang giỏ hàng
        var cartTableBody = document.querySelector('#cart-table tbody');

        // Xóa nội dung cũ của tbody để cập nhật thông tin mới
        cartTableBody.innerHTML = '';

        // Hiển thị thông tin sản phẩm trong bảng
        cartItems.forEach(function (product, index) {
            var row = cartTableBody.insertRow();
            var imgProductCell = row.insertCell(0);
            var productNameCell = row.insertCell(1);
            var quantityCell = row.insertCell(2);
            var priceCell = row.insertCell(3);
            var removeCell = row.insertCell(4);

            // Hiển thị hình ảnh sản phẩm
            var imgProduct = document.createElement('img');
            imgProduct.src = product.Img;
            imgProduct.alt = product.Name;
            imgProduct.width = 50; // Đặt chiều rộng của ảnh theo mong muốn
            imgProductCell.appendChild(imgProduct);

            // Hiển thị tên sản phẩm
            productNameCell.textContent = product.Name;

            // Tạo nút '-' để giảm số lượng
            var decreaseButton = document.createElement('button');
            decreaseButton.textContent = '-';
            decreaseButton.style.width = '30px';
            decreaseButton.addEventListener('click', function () {
                if (product.Count > 1) {
                    updateQuantity(index, product.Count - 1);
                }
            });
            quantityCell.appendChild(decreaseButton);

            // Tạo input để hiển thị số lượng
            var quantityDisplay = document.createElement('input');
            quantityDisplay.type = 'number';
            quantityDisplay.style.width = '30px';
            quantityDisplay.value = product.Count || 1; // Số lượng mặc định là 1
            quantityDisplay.readOnly = true; // Chỉ đọc
            quantityCell.appendChild(quantityDisplay);

            // Tạo nút '+' để tăng số lượng
            var increaseButton = document.createElement('button');
            increaseButton.textContent = '+';
            increaseButton.style.width = '30px';
            increaseButton.addEventListener('click', function () {
                updateQuantity(index, product.Count + 1);
            });
            quantityCell.appendChild(increaseButton);

            //Hiển thị giá sản phẩm          
            priceCell.textContent = product.Price;

            function updatePrice() {
                // Lấy danh sách sản phẩm từ localStorage
                var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

                // Cập nhật giá cho sản phẩm tại index được chọn
                cartItems[index].Price = calculatePrice(cartItems[index].Count, cartItems[index].Price);

                // Cập nhật lại danh sách sản phẩm trong localStorage
                localStorage.setItem('cart', JSON.stringify(cartItems));

                // Hiển thị lại thông tin trong bảng giỏ hàng
                displayCartItems();
            }

            function calculatePrice(quantity, basePrice) {
                // Viết logic tính toán giá dựa trên số lượng mới và giá cơ bản
                // Ở đây, giả sử giá cơ bản không thay đổi và giá mới được tính bằng basePrice * quantity
                return basePrice * quantity;
            }

            // Tạo nút để xoá sản phẩm khỏi giỏ hàng
            var removeButton = document.createElement('button');
            removeButton.textContent = 'Xoá';
            removeButton.addEventListener('click', function () {
                removeFromCart(index);
            });

            removeCell.appendChild(removeButton); 

            updatePrice();
        });    
    }

    function updatePrice() {
        // Lấy danh sách sản phẩm từ localStorage
        var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Tính tổng số tiền từ danh sách sản phẩm
        var totalPrice = cartItems.reduce(function (total, product) {
            return total + parseFloat(product.Price) * parseInt(product.Count);
        }, 0);

        // Hiển thị tổng số tiền trong thẻ span có class là "right-total-cart"
        var totalCartSpan = document.querySelector('.right-total-cart');
        totalCartSpan.textContent = totalPrice + '.000 đ';
    }

    function updateQuantity(index, newQuantity) {
        // Lấy danh sách sản phẩm từ localStorage
        var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Cập nhật số lượng cho sản phẩm tại index được chọn
        cartItems[index].Count = newQuantity;

        // Cập nhật lại danh sách sản phẩm trong localStorage
        localStorage.setItem('cart', JSON.stringify(cartItems));

        // Hiển thị lại thông tin trong bảng giỏ hàng
        displayCartItems();
    }

    function removeFromCart(index) {
        // Lấy danh sách sản phẩm từ localStorage
        var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Xoá sản phẩm tại index được chọn
        cartItems.splice(index, 1);

        // Cập nhật lại danh sách sản phẩm trong localStorage
        localStorage.setItem('cart', JSON.stringify(cartItems));

        // Hiển thị lại thông tin trong bảng giỏ hàng
        displayCartItems();
    }
});
