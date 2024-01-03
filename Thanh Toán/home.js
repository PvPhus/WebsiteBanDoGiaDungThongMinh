function loadDistricts() {
    var province = document.getElementById('province');
    var district = document.getElementById('district');
    var ward = document.getElementById('ward');
    var addressInput = document.getElementById('addressInput');

    // Tải lại
    district.innerHTML = '<option value="" disabled selected>Chọn Quận/Huyện</option>';
    ward.innerHTML = '<option value="" disabled selected>Chọn Phường/Xã</option>';
    district.disabled = false;
    ward.disabled = true;

    // tải các quận dựa trên tỉnh được chọn
    // Bạn có thể lấy các quận từ API hoặc sử dụng danh sách được xác định trước
    // Để đơn giản, tôi đang sử dụng một danh sách tĩnh ở đây

    // Hà Nội
    if (province.value === 'province1') {
        addOption(district, 'district1', 'Thị Xã Sơn Tây');
        addOption(district, 'district2', 'Quận Ba Đình');
        addOption(district, 'district3', 'Quận Cầu Giấy');
        addOption(district, 'district4', 'Quận Đống Đa');
        addOption(district, 'district5', 'Quận Hà Đông');
        addOption(district, 'district6', 'Quận Hai Bà Trưng');
        addOption(district, 'district7', 'Huyện Ba Vì');
        addOption(district, 'district8', 'Huyện Đông Anh');
    }
    // Hưng Yên
    else if (province.value === 'province5') {
        addOption(district, 'district9', 'Thành Phố Hưng Yên');
        addOption(district, 'district11', 'Huyện Ân Thi');
        addOption(district, 'district12', 'Huyện Khoái Châu');
        addOption(district, 'district13', 'Huyện Kim Động');
        addOption(district, 'district14', 'Thị Xã Mỹ Hào');
        addOption(district, 'district15', 'Huyện Phù Cừ');
        addOption(district, 'district16', 'Huyện Tiên Lữ');
        addOption(district, 'district17', 'Huyện Văn Giang');
    }
    // Update the input field with the selected province
    addressInput.value = province.options[province.selectedIndex].text;
}

function loadWards() {
    var district = document.getElementById('district');
    var ward = document.getElementById('ward');
    var addressInput = document.getElementById('addressInput');

    // Đặt lại phường
    ward.innerHTML = '<option value="" disabled selected>Chọn Phường/Xã</option>';
    ward.disabled = false;

    // tải các phường dựa trên quận được chọn
    // Bạn có thể lấy phường từ API hoặc sử dụng danh sách được xác định trước
    // Để đơn giản, tôi đang sử dụng một danh sách tĩnh ở đây
    if (district.value === 'district1') {
        addOption(ward, 'ward1', 'Phường Lê Lợi');
        addOption(ward, 'ward2', 'Phường Phú Thịnh');
        addOption(ward, 'ward3', 'Phường Ngô Quyền');
        addOption(ward, 'ward4', 'Phường Quang Trung');
        addOption(ward, 'ward5', 'Phường Sơn Lộc');
    } else if (district.value === 'district2') {
        addOption(ward, 'ward6', 'Phường Phúc Xá');
        addOption(ward, 'ward7', 'Phường Trúc Bạch');
        addOption(ward, 'ward8', 'Phường Cống Vị');
        addOption(ward, 'ward9', 'Phường Liễu Giai');
        addOption(ward, 'ward10', 'Phường Nguyễn Trung Trực');
    } else if (district.value === 'district14') {
        addOption(ward, 'ward11', 'Phường Bần yên Nhân');
        addOption(ward, 'ward12', 'Xã Phan Đình Phùng');
        addOption(ward, 'ward13', 'Xã Cẩm Xá');
        addOption(ward, 'ward14', 'Xã Dương Quang');
        addOption(ward, 'ward15', 'Xã Hòa Phong');
        addOption(ward, 'ward16', 'Phường Dị Sử');
        addOption(ward, 'ward17', 'Phường Nhân Hòa');

    } else if (district.value === 'district4') {
        addOption(ward, 'ward7', 'Phường/Xã 7');
        addOption(ward, 'ward8', 'Phường/Xã 8');
    }
    // Update the input field with the selected district
    addressInput.value += ', ' + district.options[district.selectedIndex].text;

    // Enable the ward select
    ward.removeAttribute('disabled');

    // Update the input field with the selected ward
    addressInput.value += ', ' + ward.options[ward.selectedIndex].text;
}

function addOption(selectElement, value, text) {
    var option = document.createElement('option');
    option.value = value;
    option.text = text;
    selectElement.add(option);
}

var toggleButtons = document.querySelectorAll('.toggleButton');

toggleButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        // Remove 'marked' class from all buttons
        toggleButtons.forEach(function (btn) {
            btn.classList.remove('marked');
        });

        // Add 'marked' class to the clicked button
        button.classList.add('marked');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Gọi hàm hiển thị thông tin sản phẩm khi trang được tải
    displayCartItems();

    // Gọi hàm load lại giá tiền khi vào thanh toán
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
            var priceCell = row.insertCell(2);

            // Hiển thị hình ảnh sản phẩm
            var imgProduct = document.createElement('img');
            imgProduct.src = product.Img;
            imgProduct.alt = product.Name;
            imgProduct.width = 150; // Đặt chiều rộng của ảnh theo mong muốn
            imgProductCell.appendChild(imgProduct);

            // Hiển thị tên sản phẩm
            productNameCell.textContent = product.Name;

            // Hiển thị giá sản phẩm
            priceCell.textContent = product.Price;
        });

        // Update the total price
        updatePrice();
    }

    function updatePrice() {
        // Lấy danh sách sản phẩm từ localStorage
        var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Tính tổng số tiền từ danh sách sản phẩm
        var totalPrice = cartItems.reduce(function (total, product) {
            return total + parseFloat(product.Price) * parseInt(product.Count);
        }, 0);

        // Hiển thị tổng số tiền trong thẻ span có class là "tiensp"
        var totalCartSpan = document.querySelector('.tiensp');
        totalCartSpan.textContent = totalPrice + '.000 đ';

        // Hiển thị tổng số tiền trong thẻ span có class là "total-price"
        var totalPriceSpan = document.querySelector('.total-price');
        totalPriceSpan.textContent = totalPrice + '.000 đ';
    }
});

