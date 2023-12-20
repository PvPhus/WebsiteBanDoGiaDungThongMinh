// /*------------------------------------------------------------------DANH LOẠI SẢN PHẨM---------------------------------------------------------------------*/
// // Kiểm tra nếu Local Storage đã có dữ liệu
// var categories = JSON.parse(localStorage.getItem('categories')) || [];
// function renderTable() {
//     var tableBody = document.querySelector('#TABLEDLSP tbody');

//     // Xóa bảng để render lại
//     tableBody.innerHTML = '';

//     categories.forEach(function (category, index) {
//         var row = `
//             <tr>
//                 <td>${index + 1}</td>
//                 <td>${category.id}</td>
//                 <td>${category.name}</td>
//                 <td>
//                     <button onclick="EditLSP(${index})">Sửa</button> ||
//                     <button onclick="DeleteLSP(${index})">Xóa</button>
//                 </td>
//             </tr>
//         `;
//         tableBody.innerHTML += row;
//     });
// }
// //Thêm loại sản phẩm
// function AddLSP() {
//     var maLSP = document.getElementById('MaLSP').value;
//     var tenLSP = document.getElementById('TenLSP').value;

//     // Kiểm tra xem ID đã tồn tại chưa
//     var idExists = categories.some(function (category) {
//         return category.id === maLSP;
//     });
//     //kiểm tra dữ liệu để rỗng
//     if (!maLSP || !tenLSP) {
//         alert('Vui lòng nhập đầy đủ thông tin loại sản phẩm.');
//         return false; // Ngăn chặn gửi form nếu có lỗi
//     }
//     //Kiểm tra trùng ID
//     if (idExists) {
//         alert('ID đã tồn tại. Vui lòng nhập ID khác.');
//         return;
//     }

//     var newCategory = {
//         id: maLSP,
//         name: tenLSP
//     };

//     categories.push(newCategory);

//     // Lưu danh sách loại sản phẩm vào Local Storage
//     localStorage.setItem('categories', JSON.stringify(categories));

//     // Render lại bảng
//     renderTable();

//     // Clear ô nhập
//     document.getElementById('MaLSP').value = '';
//     document.getElementById('TenLSP').value = '';
// }

// //Sửa loại sản phẩm
// function EditLSP(index) {
//     var newName = prompt('Nhập tên mới cho loại sản phẩm:');
//     if (newName) {
//         categories[index].name = newName;
//         localStorage.setItem('categories', JSON.stringify(categories));
//         renderTable();
//     }
// }
// //Xóa loại sản phẩm
// function DeleteLSP(index) {
//     var confirmDelete = confirm('Bạn có chắc chắn muốn xóa loại sản phẩm này không?');
//     if (confirmDelete) {
//         categories.splice(index, 1);
//         localStorage.setItem('categories', JSON.stringify(categories));
//         renderTable();
//     }
// }
// // Render bảng khi trang được tải
// renderTable();


// /*---------------------------------------------------------------------------DANH SÁCH SẢN PHẨM---------------------------------------------------------------------*/
// var categories = localStorage.getItem('categories') ? JSON.parse(localStorage.getItem('categories')) : [];
// var loaiSanPhamSelect = document.getElementById('loaiSanPham');

// function updateCategoryDropdown() {
//     // Lấy danh sách loại sản phẩm từ localStorage
//     const categories = JSON.parse(localStorage.getItem('categories')) || [];

//     // Lấy thẻ dropdown
//     const dropdown = document.getElementById('loaiSanPham');

//     // Xóa tất cả các option hiện tại trong dropdown
//     dropdown.innerHTML = '';

//     // Tạo option mới từ danh sách loại sản phẩm
//     categories.forEach(category => {
//         const option = document.createElement('option');
//         option.value = category.id;
//         option.text = category.name;
//         dropdown.add(option);
//     });
// }
// function showImagePreview() {
//     var preview = document.getElementById('image-preview');
//     var input = document.getElementById('image-input');

//     preview.innerHTML = '';

//     if (input.files && input.files[0]) {
//         var reader = new FileReader();

//         reader.onload = function (e) {
//             // Hiển thị hình ảnh
//             var img = document.createElement('img');
//             img.src = e.target.result;
//             preview.appendChild(img);
//         };

//         reader.readAsDataURL(input.files[0]);
//     }
// }

// function addProduct() {
//     var maSanPham = document.getElementById('maSanPham').value;
//     var tenSanPham = document.getElementById('tenSanPham').value;
//     var loaiSanPham = loaiSanPhamSelect.value;
//     var gia = document.getElementById('gia').value;
//     var moTa = document.getElementById('moTa').value;
//     var imageURL = '';

//     // Kiểm tra giá trị trống
//     if (!maSanPham || !tenSanPham || !loaiSanPham || !gia || !moTa) {
//         alert('Vui lòng nhập đầy đủ thông tin sản phẩm.');
//         return;
//     }

//     // Kiểm tra mã sản phẩm có tồn tại trong localStorage không
//     var existingProducts = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
//     var isDuplicate = existingProducts.some(product => product.maSanPham === maSanPham);

//     if (isDuplicate) {
//         alert('Mã sản phẩm đã tồn tại. Vui lòng chọn mã khác.');
//         return;
//     }

//     // Kiểm tra giá tiền phải là số
//     if (isNaN(gia)) {
//         alert('Giá sản phẩm phải là số.');
//         return;
//     }

//     // Lấy đường dẫn hình ảnh nếu có
//     var preview = document.getElementById('image-preview');
//     if (preview.firstChild && preview.firstChild.nodeName === 'IMG') {
//         imageURL = preview.firstChild.src;
//     }

//     // Thêm sản phẩm vào danh sách
//     var newProduct = {
//         maSanPham: maSanPham,
//         tenSanPham: tenSanPham,
//         loaiSanPham: loaiSanPham,
//         gia: gia,
//         moTa: moTa,
//         imageURL: imageURL
//     };

//     existingProducts.push(newProduct);
//     localStorage.setItem('products', JSON.stringify(existingProducts));

//     // Hiển thị sản phẩm trong bảng
//     var table = document.getElementById('TableDSSP');
//     var tbody = document.getElementById('ListProducts');

//     var newRow = tbody.insertRow();
//     var cells = [];
//     for (var i = 0; i < 8; i++) {
//         cells[i] = newRow.insertCell(i);
//     }

//     cells[0].innerText = tbody.children.length;
//     cells[1].innerText = maSanPham;
//     cells[2].innerText = tenSanPham;
//     cells[3].innerText = loaiSanPham;
//     cells[4].innerText = gia + 'đ';
//     cells[5].innerText = moTa;
//     cells[6].innerHTML = '<img src="' + imageURL + '" alt="ảnh sản phẩm">';
//     cells[7].innerHTML = '<button onclick="EditSP(${index})">Sửa</button> || <button onclick="DeleteSP(${index})">Xóa</button>';

//     // Làm sạch các ô nhập liệu
//     document.getElementById('maSanPham').value = '';
//     document.getElementById('tenSanPham').value = '';
//     loaiSanPhamSelect.value = '';
//     document.getElementById('gia').value = '';
//     document.getElementById('moTa').value = '';
//     document.getElementById('image-input').value = '';

//     // Hiển thị sản phẩm trong bảng
//     var table = document.getElementById('TableDSSP');
//     var tbody = document.getElementById('ListProducts');

//     var newRow = tbody.insertRow();
//     var cells = [];
//     for (var i = 0; i < 8; i++) {
//         cells[i] = newRow.insertCell(i);
//     }

//     cells[0].innerText = tbody.children.length;
//     cells[1].innerText = maSanPham;
//     cells[2].innerText = tenSanPham;
//     cells[3].innerText = loaiSanPham;
//     cells[4].innerText = gia + 'đ';
//     cells[5].innerText = moTa;
//     cells[6].innerHTML = '<img src="' + imageURL + '" alt="ảnh sản phẩm">';
//     cells[7].innerHTML = '<button class="btnedit">Sửa</button> || <button class="btndelete">Xóa</button>';
// }
/*--------------------------------------------------------------------------------UPLOAD IMAGE--------------------------------------------------------------------*/
// function storeImage() {
//     var input = document.getElementById('image-input');
//     var preview = document.getElementById('image-preview');

//     if (input.files && input.files[0]) {
//         var reader = new FileReader();

//         reader.onload = function (e) {
//             // Hiển thị hình ảnh
//             preview.innerHTML = '<img src="' + e.target.result + '" alt="ảnh hiển thị">';

//             // Lưu đường dẫn hình ảnh vào Local Storage
//             localStorage.setItem('imageURL', e.target.result);
//         };

//         reader.readAsDataURL(input.files[0]);
//     }
// }

// // Kiểm tra xem có đường dẫn hình ảnh trong Local Storage không
// var storedImageURL = localStorage.getItem('imageURL');
// if (storedImageURL) {
//     document.getElementById('image-preview').innerHTML = '<img src="' + storedImageURL + '" alt="ảnh">';
// }


/*===========================================================================================================================================================================*/
/*================================================================================CONNECT API================================================================================*/
/*===========================================================================================================================================================================*/


/*DANH LOẠI SẢN PHẨM*/
var app = angular.module('QLDSLSP', []);

app.controller('CategoryController', function ($scope, $http) {
    $scope.categories = [];  // Danh sách tất cả loại sản phẩm
    $scope.displayedCategories = []; // Danh sách sản phẩm hiển thị trên trang hiện tại
    $scope.itemsPerPage = 12; // Số sản phẩm trên mỗi trang
    $scope.currentPage = 1; // Trang hiện tại
    $scope.totalPages = 0; // Tổng số trang
    // Hàm để gọi API và cập nhật danh sách loại sản phẩm

    $scope.getAllCategories = function () {

        $http.get('https://localhost:7202/api/DoGiaDung/get_all_category')
            .then(function (response) {
                $scope.categories = response.data;
                $scope.totalPages = Math.ceil($scope.categories.length / $scope.itemsPerPage);
                updateDisplayedCategories();
            })
            .catch(function (error) {
                console.error('Error fetching categories:', error);
            });
    };

    //Hàm để cập nhật danh sách loại sản phẩm
    function updateDisplayedCategories() {
        var startIndex = ($scope.currentPage - 1) * $scope.itemsPerPage;
        var endIndex = Math.min(startIndex + $scope.itemsPerPage, $scope.categories.length);
        $scope.displayedCategories = $scope.categories.slice(startIndex, endIndex);
    }

    //Hàm để quay về trang trước đó
    $scope.prevPage = function () {
        if ($scope.currentPage > 1) {
            $scope.currentPage--;
            updateDisplayedCategories();
        }
    };

    // Hàm để chuyển đến trang tiếp theo
    $scope.nextPage = function () {
        if ($scope.currentPage < $scope.totalPages) {
            $scope.currentPage++;
            updateDisplayedCategories();
        }
    };

    // Gọi hàm khi trang được tải
    $scope.getAllCategories();





    // Hàm để thêm loại sản phẩm mới
    $scope.addCategory = function () {
        $http.post('https://localhost:7202/api/DoGiaDung/get_all_category', { maLoai: $scope.MaLSP, tenLoai: $scope.TenLSP })
            .then(function (response) {
                alert("add successfull");
                $scope.getAllCategories();
            })
            .catch(function (error) {
                console.error('Error adding category:', error);
            });
    };

    // Hàm để sửa loại sản phẩm
    $scope.editCategory = function (category) {
        $http.put(`https://localhost:7202/api/DoGiaDung/get_all_category/${category.id}`, { tenLoai: category.tenLoai })
            .then(function (response) {
                // Thành công, cập nhật danh sách
                $scope.getAllCategories();
            })
            .catch(function (error) {
                console.error('Error editing category:', error);
            });
    };

    // Hàm để xóa loại sản phẩm
    $scope.deleteCategory = function (categoryId) {
        $http.delete(`https://localhost:7202/api/DoGiaDung/delete_category/${categoryId}`)
            .then(function (response) {
                $scope.getAllCategories();
            })
            .catch(function (error) {
                console.error('Error deleting category:', error);
            });
    };
});




/*DANH SÁCH SẢN PHẨM*/
var app = angular.module('QLDSSP', []);

app.controller('ProductController', function ($scope, $http, ProductService) {
    $scope.products = [];  // Danh sách tất cả sản phẩm
    $scope.displayedProducts = []; // Danh sách sản phẩm hiển thị trên trang hiện tại
    $scope.itemsPerPage = 12; // Số sản phẩm trên mỗi trang
    $scope.currentPage = 1; // Trang hiện tại
    $scope.totalPages = 0; // Tổng số trang
    $scope.editMode = false; // Chế độ sửa

    // Hàm để gọi API và cập nhật danh sách sản phẩm
    $scope.getAllProducts = function () {
        ProductService.getAllProducts()
            .then(function (response) {
                $scope.products = response.data;
                $scope.totalPages = Math.ceil($scope.products.length / $scope.itemsPerPage);
                updateDisplayedProducts();
            })
            .catch(function (error) {
                console.error('Error fetching products:', error);
            });
    };

    // Hàm để cập nhật danh sách sản phẩm hiển thị
    function updateDisplayedProducts() {
        var startIndex = ($scope.currentPage - 1) * $scope.itemsPerPage;
        var endIndex = Math.min(startIndex + $scope.itemsPerPage, $scope.products.length);
        $scope.displayedProducts = $scope.products.slice(startIndex, endIndex);
    }

    // Hàm để chuyển đến trang trước
    $scope.prevPage = function () {
        if ($scope.currentPage > 1) {
            $scope.currentPage--;
            updateDisplayedProducts();
        }
    };

    // Hàm để chuyển đến trang tiếp theo
    $scope.nextPage = function () {
        if ($scope.currentPage < $scope.totalPages) {
            $scope.currentPage++;
            updateDisplayedProducts();
        }
    };

    // Gọi hàm khi trang được tải
    $scope.getAllProducts();

    // Chức năng thêm sản phẩm
    $scope.addProduct = function () {
        var productData = {
            maSanPham: $scope.maSanPham,
            tenSanPham: $scope.tenSanPham,
            maLoai: $scope.loaiSanPham,
            gia: $scope.gia,
            moTa: $scope.moTa,
            hinhAnh: $scope.imageData
        };

        ProductService.addProduct(productData)
            .then(function (response) {
                $scope.getAllProducts(); // Cập nhật danh sách sản phẩm sau khi thêm
                alert('Sản phẩm đã được thêm thành công!');
                $scope.clearForm();
            })
            .catch(function (error) {
                console.error('Error adding product:', error);
            });
    };

    // Chức năng cập nhật sản phẩm
    $scope.updateProduct = function () {
        var updatedProductData = {
            maSanPham: $scope.maSanPham,
            tenSanPham: $scope.tenSanPham,
            maLoai: $scope.loaiSanPham,
            gia: $scope.gia,
            moTa: $scope.moTa,
            hinhAnh: $scope.imageData
        };

        ProductService.updateProduct($scope.productIdToUpdate, updatedProductData)
            .then(function (response) {
                $scope.editMode = false;
                $scope.productIdToUpdate = null;
                $scope.getAllProducts();
                $scope.clearForm();
            })
            .catch(function (error) {
                console.error('Error updating product:', error);
            });
    };

    // Chức năng xóa sản phẩm
    $scope.deleteProduct = function (productId) {
        ProductService.deleteProduct(productId)
            .then(function (response) {
                $scope.getAllProducts();
            })
            .catch(function (error) {
                console.error('Error deleting product:', error);
            });
    };
    // Hàm để xóa dữ liệu trong form
    $scope.clearForm = function () {
        $scope.maSanPham = '';
        $scope.tenSanPham = '';
        $scope.loaiSanPham = '';
        $scope.gia = '';
        $scope.moTa = '';
        $scope.imageData = '';
    };
});

app.service('ProductService', function ($http) {
    this.getAllProducts = function () {
        return $http.get('https://localhost:7202/api/DoGiaDung/get_all_products');
    };

    this.addProduct = function (productData) {
        return $http.post('https://localhost:7202/api/DoGiaDung/create-DoGiaDung', productData);
    };

    this.updateProduct = function (productId, productData) {
        return $http.put('https://localhost:7202/api/DoGiaDung/update-DoGiaDung/' + productId, productData);
    };

    this.deleteProduct = function (productId) {
        return $http.delete('https://localhost:7202/api/DoGiaDung/delete-DoGiaDung/' + productId);
    };
});




