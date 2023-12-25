// /*------------------------------------------------------------------DANH LOẠI SẢN PHẨM---------------------------------------------------------------------*/
// var categories = JSON.parse(localStorage.getItem('categories')) || [];
//     function renderTable() {
//         var tableBody = document.querySelector('#TABLEDLSP tbody');

//         // Xóa bảng để render lại
//         tableBody.innerHTML = '';

//         categories.forEach(function (category, index) {
//             var row = `
//                 <tr>
//                     <td>${index + 1}</td>
//                     <td>${category.id}</td>
//                     <td>${category.name}</td>
//                     <td>${category.soLuong}</td>
//                     <td>
//                         <button onclick="EditLSP(${index})">Sửa</button> ||
//                         <button onclick="DeleteLSP(${index})">Xóa</button>
//                     </td>
//                 </tr>
//             `;
//             tableBody.innerHTML += row;
//         });
//     }

//     // Thêm loại sản phẩm
//     function addLSP() {
//         var maLSP = document.getElementById('maLoai').value;
//         var tenLSP = document.getElementById('tenLoai').value;
//         var soLuong = document.getElementById('soLuongLoaiTon').value;

//         // Kiểm tra xem ID đã tồn tại chưa
//         var idExists = categories.some(function (category) {
//             return category.id === maLSP;
//         });
//         // Kiểm tra trùng ID
//         if (idExists) {
//             alert('ID đã tồn tại. Vui lòng nhập ID khác.');
//             return;
//         }
//         // Kiểm tra dữ liệu để rỗng
//         if (!maLSP || !tenLSP || !soLuong) {
//             alert('Vui lòng nhập đầy đủ thông tin loại sản phẩm.');
//             return; // Ngăn chặn gửi form nếu có lỗi
//         }
//         var newCategory = {
//             id: maLSP,
//             name: tenLSP,
//             soLuong: soLuong
//         };

//         categories.push(newCategory);

//         // Lưu danh sách loại sản phẩm vào Local Storage
//         localStorage.setItem('categories', JSON.stringify(categories));

//         // Render lại bảng
//         renderTable();

//         // Clear ô nhập
//         document.getElementById('maLoai').value = '';
//         document.getElementById('tenLoai').value = '';
//         document.getElementById('soLuongLoaiTon').value = '';
//     }

//     // Sửa loại sản phẩm
//     function EditLSP(index) {
//         // Lấy thông tin của loại sản phẩm cần sửa
//         var currentCategory = categories[index];
    
//         // Hiển thị prompt với thông tin hiện tại
//         var editName = prompt('Mời bạn chỉnh sửa tên loại sản phẩm:', currentCategory.name);
//         var editSoLuong = prompt('Mời bạn chỉnh sửa số lượng:', currentCategory.soLuong);
    
//         // Kiểm tra nếu người dùng đã nhập giá trị mới
//         if (editName !== null && editSoLuong !== null) {
//             // Cập nhật thông tin của loại sản phẩm
//             categories[index].name = editName;
//             categories[index].soLuong = editSoLuong;
    
//             // Lưu lại vào Local Storage
//             localStorage.setItem('categories', JSON.stringify(categories));
    
//             // Render lại bảng
//             renderTable();
//         }
//     }
    

//     // Xóa loại sản phẩm
//     function DeleteLSP(index) {
//         var confirmDelete = confirm('Bạn có chắc chắn muốn xóa loại sản phẩm này không?');
//         if (confirmDelete) {
//             categories.splice(index, 1);
//             localStorage.setItem('categories', JSON.stringify(categories));
//             renderTable();
//         }
//     }

//     // Render bảng khi trang được tải
//     renderTable();


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
// /*--------------------------------------------------------------------------------UPLOAD IMAGE--------------------------------------------------------------------*/
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
    
    $scope.displayedCategories = []; // Danh sách sản phẩm hiển thị trên trang hiện tại
    $scope.newCategory = {}; // Thêm sản phẩm mới
    $scope.editCategory = null; // Sửa sản phẩm
    $scope.itemsPerPage = 15; // Số sản phẩm trên mỗi trang
    $scope.currentPage = 1; // Trang hiện tại
    $scope.totalPages = 0; // Tổng số trang
    // Hàm để gọi API và cập nhật danh sách loại sản phẩm

    $scope.getAllCategories = function () {

        $http.get('https://localhost:7202/api/DoGiaDung/get_all_category')
            .then(function (response) {
                $scope.displayedCategories = response.data;
                $scope.totalPages = Math.ceil($scope.displayedCategories.length / $scope.itemsPerPage);
                updateDisplayedCategories();
            })
            .catch(function (error) {
                console.error('Error fetching categories:', error);
            });
    };

    //Hàm để cập nhật danh sách loại sản phẩm
    function updateDisplayedCategories() {
        var startIndex = ($scope.currentPage - 1) * $scope.itemsPerPage;
        var endIndex = Math.min(startIndex + $scope.itemsPerPage, $scope.displayedCategories.length);
        $scope.displayedCategories = $scope.displayedCategories.slice(startIndex, endIndex);
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

    // Hàm để thêm loại sản phẩm mới
    $scope.addCategory = function () {
        $scope.submit == "Thêm";
        var isDuplicate = $scope.displayedCategories.some(function (category) {
            return category.maLoai === $scope.newCategory.maLoai;
        });
    
        if (isDuplicate) {
            // Mã loại sản phẩm trùng lặp, thực hiện xử lý tương ứng (ví dụ: hiển thị cảnh báo)
            alert('Mã loại sản phẩm đã tồn tại. Vui lòng chọn mã loại sản phẩm khác.');
            return;
        }
        $http.post('https://localhost:7202/api/DoGiaDung/create-LoaiDoGiaDung', $scope.newCategory)
            .then(function (response) {
                alert("Thêm sản phẩm thành công!");
                $scope.displayedCategories.push(response.data);
                $scope.newCategory = {}; // Clear the form
            })
            .catch(function (error) {
                console.error('Thêm sản phẩm không thành công!', error);
            });
    };
    
    // Hàm để sửa loại sản phẩm
    $scope.editCategory = function () {
        $scope.submit == "Lưu";
        $http.put('https://localhost:7202/api/DoGiaDung/update-LoaiDoGiaDung/' + $scope.editCategory.id, $scope.editCategory)
            .then(function () {
                // Tìm chỉ mục của loại sản phẩm trong mảng
                var index = $scope.displayedCategories.findIndex(function (category) {
                    return category.id === $scope.editCategory.id;
                });

                // Cập nhật loại sản phẩm trong chuỗi
                $scope.displayedCategories[index] = angular.copy($scope.editCategory);

                // Làm mới ô nhập
                $scope.editCategory = null;
            })
            .catch(function (error) {
                console.error('Sửa không thành công:', error);
            });
    };     
    // Gọi hàm 
    $scope.addCategory();
    $scope.editCategory();
    $scope.getAllCategories();
});
 


// /*DANH SÁCH SẢN PHẨM*/ 
// var app = angular.module('QLDSSP', []);

// app.controller('ProductController', function ($scope, $http, ProductService) {
//     $scope.displayedProducts = [];
//     $scope.itemsPerPage = 15;
//     $scope.currentPage = 1;
//     $scope.totalPages = 0;
//     $scope.editMode = false;
//     $scope.loaiSanPhamList = [];
//     $scope.categories = [];
//     $scope.selectedCategoryId = null;
//     $scope.selectedCategoryName = null;

//     $scope.getAllProducts = function () {
//         ProductService.getAllProducts()
//             .then(function (response) {
//                 $scope.displayedProducts = response.data;
//                 $scope.totalPages = Math.ceil($scope.displayedProducts.length / $scope.itemsPerPage);
//                 updateDisplayedProducts();
//             })
//             .catch(function (error) {
//                 console.error('Error fetching products:', error);
//             });
//     };
//     $scope.getCategories = function () {
//         ProductService.getAllCategories()
//             .then(function (response) {
//                 $scope.categories = response.data;
//             })
//             .catch(function (error) {
//                 console.error('Error fetching categories:', error);
//             });
//     };
//     $scope.getCategoryDetails = function () {
//         if ($scope.selectedCategoryId) {
//             var url = 'https://localhost:7202/api/DoGiaDung/get-by-id-loai/' + $scope.selectedCategoryId;

//             $http.get(url)
//                 .then(function (response) {
//                     $scope.selectedCategoryName = response.data.tenLoai;
//                 })
//                 .catch(function (error) {
//                     console.error('Error fetching category details:', error);
//                 });
//         } else {
//             $scope.selectedCategoryName = null;
//         }
//     };

//     $scope.showImagePreview = function () {
//         var input = document.getElementById('image-input');
//         var file = input.files[0];

//         if (file) {
//             var reader = new FileReader();
//             reader.onload = function (e) {
//                 $scope.$apply(function () {
//                     $scope.imagePreview = e.target.result;
//                 });
//             };

//             reader.readAsDataURL(file);
//         } else {
//             $scope.imagePreview = null;
//         }
//     };

//     $scope.uploadImage = function () {
//         var input = document.getElementById('image-input');
//         var file = input.files[0];

//         if (file) {
//             var formData = new FormData();
//             formData.append('file', file);

//             $http.post('https://localhost:7202/api/DoGiaDung/upload', formData, {
//                 transformRequest: angular.identity,
//                 headers: { 'Content-Type': undefined }
//             }).then(function (response) {
//                 console.log('Hình ảnh đã được tải lên thành công:', response.data);
//             }).catch(function (error) {
//                 console.error('Tải ảnh lên bị lỗi:', error);
//             });
//         }
//     };

//     $scope.prevPage = function () {
//         if ($scope.currentPage > 1) {
//             $scope.currentPage--;
//             updateDisplayedProducts();        
//         }
//     };

//     $scope.nextPage = function () {
//         if ($scope.currentPage < $scope.totalPages) {
//             $scope.currentPage++;
//             updateDisplayedProducts();
//         }
//     };

//     function updateDisplayedProducts() {
//         var startIndex = ($scope.currentPage - 1) * $scope.itemsPerPage;
//         var endIndex = startIndex + $scope.itemsPerPage;
//         $scope.displayedProducts = $scope.displayedProducts.slice(startIndex, endIndex);
//     }
    

//     $scope.addProduct = function () {
//         var isDuplicate = $scope.displayedProducts.some(function (product) {
//             return product.maSanPham === $scope.maSanPham;
//         });

//         if (isDuplicate) {
//             alert('Mã sản phẩm đã tồn tại. Vui lòng chọn mã sản phẩm khác.');
//             return;
//         }

//         var productData = {
//             maSanPham: $scope.maSanPham,
//             tenSanPham: $scope.tenSanPham,
//             maLoai: $scope.selectedCategoryId,
//             gia: $scope.gia,
//             moTa: $scope.moTa,
//             hinhAnh: $scope.imageData
//         };

//         ProductService.addProduct(productData)
//             .then(function (response) {
//                 $scope.getAllProducts();
//                 alert('Sản phẩm đã được thêm thành công!');
//                 $scope.clearForm();
//             })
//             .catch(function (error) {
//                 console.error('Error adding product:', error);
//             });
//     };

//     $scope.updateProduct = function () {
//         var updatedProductData = {
//             maSanPham: $scope.maSanPham,
//             tenSanPham: $scope.tenSanPham,
//             maLoai: $scope.selectedCategoryId,
//             gia: $scope.gia,
//             moTa: $scope.moTa,
//             hinhAnh: $scope.imageData
//         };

//         ProductService.updateProduct($scope.productIdToUpdate, updatedProductData)
//             .then(function (response) {
//                 $scope.editMode = false;
//                 $scope.productIdToUpdate = null;
//                 $scope.getAllProducts();
//                 $scope.clearForm();
//             })
//             .catch(function (error) {
//                 console.error('Error updating product:', error);
//             });
//     };

//     $scope.deleteProduct = function (productId) {
//         ProductService.deleteProduct(productId)
//             .then(function (response) {
//                 $scope.getAllProducts();
//             })
//             .catch(function (error) {
//                 console.error('Error deleting product:', error);
//             });
//     };

//     $scope.clearForm = function () {
//         $scope.maSanPham = '';
//         $scope.tenSanPham = '';
//         $scope.selectedCategoryId = null;
//         $scope.gia = '';
//         $scope.moTa = '';
//         $scope.imageData = '';
//     };
//     $scope.getCategories();
//     $scope.getAllProducts();
// });

// app.service('ProductService', function ($http) {
//     this.getAllProducts = function () {
//         return $http.get('https://localhost:7202/api/DoGiaDung/get_all_products');
//     };

//     this.getAllCategories = function () {
//         return $http.get('https://localhost:7202/api/DoGiaDung/get-all-categories');
//     };

//     this.addProduct = function (productData) {
//         return $http.post('https://localhost:7202/api/DoGiaDung/create-DoGiaDung', productData);
//     };

//     this.updateProduct = function (productId, productData) {
//         return $http.put('https://localhost:7202/api/DoGiaDung/update-DoGiaDung/' + productId, productData);
//     };

//     this.deleteProduct = function (productId) {
//         return $http.delete('https://localhost:7202/api/DoGiaDung/delete-DoGiaDung/' + productId);
//     };
// });

// /*DANH SÁCH KHÁCH HÀNG*/
// var app = angular.module('QLDSKH',[]);

// app.controller('KhachHangController', function($scope, $http){
//     $scope.displayKhachHangs = []; 
//     $scope.newKhachHang = {};
//     $scope.editKhachHang = null; 
//     $scope.itemsPerPage = 15; 
//     $scope.currentPage = 1; 
//     $scope.totalPages = 0; 

//     $scope.getAllKhachHangs= function () {

//         $http.get('https://localhost:7202/api/KhachHang/get_all_KhachHang')
//             .then(function (response) {
//                 $scope.displayKhachHangs = response.data;
//                 $scope.totalPages = Math.ceil($scope.displayKhachHangs.length / $scope.itemsPerPage);
//                 updateDisplayedKhachHang();
//             })
//             .catch(function (error) {
//                 console.error('Error fetching categories:', error);
//             });
//     };
//     //Hàm để cập nhật danh sách loại sản phẩm
//     function updateDisplayedKhachHang() {
//         var startIndex = ($scope.currentPage - 1) * $scope.itemsPerPage;
//         var endIndex = Math.min(startIndex + $scope.itemsPerPage, $scope.displayKhachHangs.length);
//         $scope.displayKhachHangs = $scope.displayKhachHangs.slice(startIndex, endIndex);
//     }
//     $scope.prevPage = function () {
//         if ($scope.currentPage > 1) {
//             $scope.currentPage--;
//             updateDisplayedKhachHang();
//         }
//     };

//     // Hàm để chuyển đến trang tiếp theo
//     $scope.nextPage = function () {
//         if ($scope.currentPage < $scope.totalPages) {
//             $scope.currentPage++;
//             updateDisplayedKhachHang();
//         }
//     };
//      // Hàm để thêm loại sản phẩm mới
//      $scope.addKhachHang= function () {
//         var isDuplicate = $scope.displayKhachHangs.some(function (khachhang) {
//             return khachhang.maKhachHang === $scope.newKhachHang.maKhachHang;
//         });
    
//         if (isDuplicate) {
//             // Mã loại sản phẩm trùng lặp, thực hiện xử lý tương ứng (ví dụ: hiển thị cảnh báo)
//             alert('Mã khach hang đã tồn tại. Vui lòng chọn mã khach hang khác.');
//             return;
//         }
//         $http.post('https://localhost:7202/api/KhachHang/create-KhachHang', $scope.newKhachhang)
//             .then(function (response) {
//                 alert("Thêm sản phẩm thành công!");
//                 $scope.displayKhachHangs.push(response.data);
//                 $scope.newKhachHang = {}; // Clear the form
//             })
//             .catch(function (error) {
//                 console.error('Thêm khach hang không thành công!', error);
//             });
//     };
//     $scope.addKhachHang();
//     $scope.getAllKhachHangs(); 
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////