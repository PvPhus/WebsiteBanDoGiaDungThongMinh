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
//         // Tạo hàm lưu thông tin
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
//     renderTable();

/*===========================================================================================================================================================================*/
/*================================================================================CONNECT API================================================================================*/
/*===========================================================================================================================================================================*/


/*DANH LOẠI SẢN PHẨM*/
// var app = angular.module('QLDSLSP', []);

// app.controller('CategoryController', function ($scope, $http) {

//     $scope.displayedCategories = []; // Danh sách sản phẩm hiển thị trên trang hiện tại
//     $scope.newCategory = {}; // Thêm sản phẩm mới
//     $scope.editCategory = null; // Sửa sản phẩm
//     $scope.itemsPerPage = 15; // Số sản phẩm trên mỗi trang
//     $scope.currentPage = 1; // Trang hiện tại
//     $scope.totalPages = 0; // Tổng số trang
//     // Hàm để gọi API và cập nhật danh sách loại sản phẩm

//     $scope.getAllCategories = function () {

//         $http.get('https://localhost:7202/api/DoGiaDung/get_all_category')
//             .then(function (response) {
//                 $scope.displayedCategories = response.data;
//                 $scope.totalPages = Math.ceil($scope.displayedCategories.length / $scope.itemsPerPage);
//                 updateDisplayedCategories();
//             })
//             .catch(function (error) {
//                 console.error('Error fetching categories:', error);
//             });
//     };

//     //Hàm để cập nhật danh sách loại sản phẩm
//     function updateDisplayedCategories() {
//         var startIndex = ($scope.currentPage - 1) * $scope.itemsPerPage;
//         var endIndex = Math.min(startIndex + $scope.itemsPerPage, $scope.displayedCategories.length);
//         $scope.displayedCategories = $scope.displayedCategories.slice(startIndex, endIndex);
//     }

//     //Hàm để quay về trang trước đó
//     $scope.prevPage = function () {
//         if ($scope.currentPage > 1) {
//             $scope.currentPage--;
//             updateDisplayedCategories();
//         }
//     };

//     // Hàm để chuyển đến trang tiếp theo
//     $scope.nextPage = function () {
//         if ($scope.currentPage < $scope.totalPages) {
//             $scope.currentPage++;
//             updateDisplayedCategories();
//         }
//     };

//     // Hàm để thêm loại sản phẩm mới
//     $scope.addCategory = function () {
//         $scope.submit == "Thêm";
//         var isDuplicate = $scope.displayedCategories.some(function (category) {
//             return category.maLoai === $scope.newCategory.maLoai;
//         });

//         if (isDuplicate) {
//             // Mã loại sản phẩm trùng lặp, thực hiện xử lý tương ứng (ví dụ: hiển thị cảnh báo)
//             alert('Mã loại sản phẩm đã tồn tại. Vui lòng chọn mã loại sản phẩm khác.');
//             return;
//         }
//         $http.post('https://localhost:7202/api/DoGiaDung/create-LoaiDoGiaDung', $scope.newCategory)
//             .then(function (response) {
//                 alert("Thêm sản phẩm thành công!");
//                 $scope.displayedCategories.push(response.data);
//                 $scope.newCategory = {}; // Clear the form
//             })
//             .catch(function (error) {
//                 console.error('Thêm sản phẩm không thành công!', error);
//             });
//     };

//     // Hàm để sửa loại sản phẩm
//     $scope.startEdit = function (category) {
//         // Set the editCategory to a copy of the category to avoid two-way binding issues
//         $scope.editCategory = angular.copy(category);
//     };

//     $scope.saveCategory = function () {
//         if (!$scope.editCategory ) {
//             console.error('ID of the category to edit is undefined.');
//             return;
//         }

//         // Perform the save logic similar to your editCategory function
//         $http.put('https://localhost:7202/api/DoGiaDung/update-LoaiDoGiaDung/' + $scope.editCategory.maLoai, $scope.editCategory)
//             .then(function () {
//                 debugger
//                 var index = $scope.displayedCategories.findIndex(function (cat) {
//                     return cat.maLoai === $scope.editCategory.maLoai;
//                 });

//                 $scope.displayedCategories[index] = angular.copy($scope.editCategory);
//                 $scope.editCategory = null;
//             })
//             .catch(function (error) {
//                 console.error('Lưu không thành công:', error);
//             });
//             updateDisplayedCategories();
//     };

//     // Gọi hàm  
//     $scope.getAllCategories();
// });



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
//     $scope.tenLoaiId = null;
//     $scope.tenLoaiName = null;

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TRANG DANH SÁCH LOẠI SẢN PHẨM=============================================================================================================
var app = angular.module('APP-LSP', []);
app.controller('Controller-LSP', function ($scope, $http) {
    $scope.maLoai;
    $scope.tenLoai;
    $scope.soLuongLoaiTon;

    $scope.itemsPerPage = 10;
    $scope.currentPage = 1;
    $scope.totalPages = 0;

    $scope.submit = "Thêm";
    $scope.listLoaiSanPham = [];
    $scope.newLoaiSanPham = {};

    // Load dữ liệu lên bảng loại sản phẩm
    $scope.LoadLoaiSanPham = function () {
        $http({
            method: 'GET',
            url: current_url + '/api/DoGiaDung/get_all_category',
        }).then(function (response) {
            $scope.listLoaiSanPham = response.data;
            $scope.totalPages = Math.ceil($scope.listLoaiSanPham.length / $scope.itemsPerPage);
            updatelistLoaiSanPham();
        });
    };

    // Hàm chuyển về trang trước
    $scope.prevPage = function () {
        if ($scope.currentPage > 1) {
            $scope.currentPage--;
            $scope.LoadLoaiSanPham();
        }
    };

    // Hàm để chuyển đến trang sau
    $scope.nextPage = function () {
        if ($scope.currentPage < $scope.totalPages) {
            $scope.currentPage++;
            $scope.LoadLoaiSanPham();
        }
    };

    // Thêm hoặc cập nhật loại sản phẩm
    $scope.addCategory = function () {
        if (!$scope.maLoai || !$scope.tenLoai || !$scope.soLuongLoaiTon) {
            $scope.error = 'Vui lòng nhập thông tin loại sản phẩm.';
            return;
        } else {
            $scope.error = '';
        }
        $scope.newLoaiSanPham.maLoai = Number($scope.maLoai);
        $scope.newLoaiSanPham.tenLoai = $scope.tenLoai;
        $scope.newLoaiSanPham.soLuongLoaiTon = Number($scope.soLuongLoaiTon);

        if ($scope.submit === "Thêm") {
            $http({
                method: 'POST',
                url: current_url + '/api/DoGiaDung/create-LoaiDoGiaDung',
                data: $scope.newLoaiSanPham,
            }).then(function (response) {
                var isDuplicate = $scope.listLoaiSanPham.some(function (category) {
                    return category.maLoai === $scope.maLoai;
                });

                if (isDuplicate) {
                    $scope.error = 'Mã loại sản phẩm đã tồn tại. Vui lòng chọn mã loại sản phẩm khác.';
                    return;
                } else {
                    $scope.error = '';
                }
                $scope.listLoaiSanPham.push(response.data);
                $scope.LoadLoaiSanPham();
                $scope.newLoaiSanPham = {};
                alert('Thêm loại sản phẩm thành công!');
            });
        }
        else if ($scope.submit === "Lưu") {
            $http({
                method: 'PUT',
                url: current_url + '/api/DoGiaDung/update-LoaiDoGiaDung/',
                data: $scope.newLoaiSanPham,
            }).then(function () {
                $scope.LoadLoaiSanPham();
                alert('Cập nhật loại sản phẩm thành công!');
                // Đặt trạng thái về thêm mới sau khi cập nhật
                $scope.submit = "Thêm";
                $scope.maLoai = null;
                $scope.tenLoai = null;
                $scope.soLuongLoaiTon = null;
            }).catch(function (error) {
                console.error('Error:', error);
            });
        }
    };

    $scope.Sua = function (maLoai) {
        $scope.submit = "Lưu";
        $scope.updateLoai = $scope.listLoaiSanPham.find(function (category) {
            return category.maLoai === maLoai;
        });

        // Gán giá trị của updateLoai vào các biến
        $scope.maLoai = $scope.updateLoai.maLoai;
        $scope.tenLoai = $scope.updateLoai.tenLoai;
        $scope.soLuongLoaiTon = $scope.updateLoai.soLuongLoaiTon;

        document.getElementById('tenLoai').focus();
    };

    // Hàm có chức năng tải lại dữ liệu trang tối đa 12 bản ghi hiển thị trên bảng
    function updatelistLoaiSanPham() {
        var startIndex = ($scope.currentPage - 1) * $scope.itemsPerPage;
        var endIndex = Math.min(startIndex + $scope.itemsPerPage, $scope.listLoaiSanPham.length);
        $scope.listLoaiSanPham = $scope.listLoaiSanPham.slice(startIndex, endIndex);
    }

    // Các hàm gọi sử dụng
    $scope.LoadLoaiSanPham();
});


// TRANG DANH SÁCH SẢN PHẨM====================================================================================================================================
var app = angular.module('APP-SP', []);
app.controller('Controller-SP', function ($scope, $http) {
    $scope.maSanPham;
    $scope.tenSanPham;
    $scope.tenLoai;
    $scope.gia;
    $scope.moTa;
    $scope.imageData;

    $scope.itemsPerPage = 10;
    $scope.currentPage = 1;
    $scope.totalPages = 0;

    $scope.submit = "Thêm";
    $scope.listSanPham = [];
    $scope.newSanPham = {};
    $scope.selectedProduct;
    $scope.displayedCategories;

    //Load dữ liệu lên bảng dánh sách sản phẩm
    $scope.LoadListSanPham = function () {
        $http({
            method: 'GET',
            url: current_url + '/api/DoGiaDung/get_all_products',
        }).then(function (response) {
            $scope.listSanPham = response.data;
            $scope.totalPages = Math.ceil($scope.listSanPham.length / $scope.itemsPerPage);
            updatelistSanPham();
        });
    };

    //Load dữ liệu lên combobox của quản lý sản phẩm
    $scope.LoadListLoaiSanPham = function () {
        $http({
            method: 'GET',
            url: current_url + '/api/DoGiaDung/get_all_category',
        }).then(function (response) {
            $scope.listLoaiSanPham = response.data;
            $scope.displayedCategories = response.data.map(function (category) {
                return category.tenLoai; // Thay 'tenLoai' bằng tên thuộc tính bạn muốn hiển thị
            });
        });
    };
    //Hàm chuyển về trang trước
    $scope.prevPage = function () {
        if ($scope.currentPage > 1) {
            $scope.currentPage--;
            $scope.LoadListSanPham();
        }
    };

    // Hàm để chuyển đến trang sau
    $scope.nextPage = function () {
        if ($scope.currentPage < $scope.totalPages) {
            $scope.currentPage++;
            $scope.LoadListSanPham();
        }
    };



    //Hàm thêm sản phẩm
    $scope.addProduct = function () {
        if (!$scope.maSanPham || !$scope.tenSanPham || !$scope.tenLoai || !$scope.gia || !$scope.moTa) {
            $scope.error = 'Vui lòng nhập thông tin sản phẩm.';
            return;
        } else {
            $scope.error = '';
        }

        $scope.newSanPham.maSanPham = Number($scope.maSanPham);
        $scope.newSanPham.tenSanPham = $scope.tenSanPham;
        $scope.newSanPham.tenLoai = $scope.tenLoai;
        $scope.newSanPham.gia = Number($scope.gia);
        $scope.newSanPham.moTa = $scope.moTa;
        $scope.newSanPham.imageData = $scope.imageData;

        var file = document.getElementById('image-input').files[5];
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            $http({
                method: 'POST',
                data: $scope.newSanPham,
                url: current_url + '/api/DoGiaDung/upload',
            }).then(function (res) {
                $scope.imageData = res.data.filePath;
                if ($scope.submit === "Thêm") {
                    $http({
                        method: 'POST',
                        data: $scope.newSanPham,
                        url: current_url + '/api/DoGiaDung/create-DoGiaDung',
                    }).then(function (response) {
                        var isDuplicate = $scope.listSanPham.some(function (product) {
                            return product.maSanPham === $scope.maSanPham;
                        });

                        if (isDuplicate) {
                            $scope.error = 'Mã sản phẩm đã tồn tại. Vui lòng chọn mã sản phẩm khác.';
                            return;
                        } else {
                            $scope.error = '';
                        }
                        $scope.listSanPham.push(response.data);
                        $scope.LoadListSanPham();
                        $scope.newSanPham = {};
                        alert('Thêm sản phẩm thành công!');
                    })
                }
                else if ($scope.submit === "Lưu") {
                    $http({
                        method: 'PUT',
                        url: current_url + '/api/DoGiaDung/update-DoGiaDung/',
                        data: $scope.newSanPham,
                    }).then(function () {
                        $scope.LoadListSanPham();
                        alert('Cập nhật sản phẩm thành công!');
                        // Đặt trạng thái về thêm mới sau khi cập nhật
                        $scope.submit = "Thêm";
                        $scope.maSanPham = null;
                        $scope.tenSanPham = null;
                        $scope.tenLoai = null;
                        $scope.gia = null;
                        $scope.moTa = null;
                        $scope.imageData = null;
                    }).catch(function (error) {
                        console.error('Error:', error);
                    });
                }
            });
        }
    }

    // hàm chức năng sửa thông tin sản phẩm
    $scope.updateProduct = function (maSanPham) {
        $scope.submit = "Lưu";

        $scope.updateSanPham = $scope.listSanPham.find(function (product) {
            return product.maSanPham === maSanPham;
        });

        $scope.maSanPham = $scope.updateSanPham.maSanPham;
        $scope.tenSanPham = $scope.updateSanPham.tenSanPham;
        $scope.tenLoai = $scope.updateSanPham.tenLoai;
        $scope.gia = $scope.updateSanPham.gia;
        $scope.moTa = $scope.updateSanPham.moTa;
        $scope.imageData = $scope.updateSanPham.imageData;

        document.getElementById('nameProduct').focus();
    };

    //Hàm xóa sản phẩm
    $scope.deleteProduct = function (maSanPham) {
        var result = confirm("Bạn có thực sự muốn xóa không?");
        if (result) {
            $http({
                method: 'DELETE',
                url: current_url + '/api/DoGiaDung/delete-DoGiaDung/' + maSanPham,
            }).then(function () {
                $scope.LoadListSanPham();
                alert('Xóa thành công!');
            }).catch(function (error) {
                console.error('Error:', error);
            });
        }
    };


    //Hàm có chức năng tải lại dữ liệu trang tối đa 12 bản ghi hiển thị trên bảng
    function updatelistSanPham() {
        var startIndex = ($scope.currentPage - 1) * $scope.itemsPerPage;
        var endIndex = Math.min(startIndex + $scope.itemsPerPage, $scope.listSanPham.length);
        $scope.listSanPham = $scope.listSanPham.slice(startIndex, endIndex);
    };

    //Các hàm gọi sử dụng
    $scope.LoadListSanPham();
    $scope.LoadListLoaiSanPham();
});


// TRANG DANH SÁCH KHACH HANG===============================================================================================================================
var app = angular.module('APP-KH', []);

// Số điện thoại dạng chuỗi, nhưng kiểm tra chỉ cho nhập số vào input SDT
app.directive('onlyNumbers', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.on('input', function (event) {
                var inputValue = event.target.value;
                var sanitizedValue = inputValue.replace(/[^0-9]/g, ''); // Loại bỏ mọi ký tự không phải số
                if (inputValue !== sanitizedValue) {
                    scope.$apply(function () {
                        scope[attrs.ngModel] = sanitizedValue;
                    });
                }
            });
        }
    };
});

app.controller('Controller-KH', function ($scope, $http) {
    $scope.itemsPerPage = 10;
    $scope.currentPage = 1;
    $scope.totalPages = 0;

    $scope.maKhachHang;
    $scope.tenKhachHang;
    $scope.diaChi;
    $scope.soDienThoai;

    $scope.submit = "Thêm";
    $scope.listKhachHang = [];
    $scope.newKhachHang = {};


    //Load dữ liệu lên bảng loại sản phẩm
    $scope.LoadListKhachHang = function () {
        $http({
            method: 'GET',
            url: current_url + '/api/KhachHang/get_all_KhachHang',
        }).then(function (response) {
            $scope.listKhachHang = response.data;
            $scope.totalPages = Math.ceil($scope.listKhachHang.length / $scope.itemsPerPage);
            updatelistKhachHang();
        });
    };

    //Hàm chuyển về trang trước
    $scope.prevPage = function () {
        if ($scope.currentPage > 1) {
            $scope.currentPage--;
            $scope.LoadListKhachHang();
        }
    };

    // Hàm để chuyển đến trang sau
    $scope.nextPage = function () {
        if ($scope.currentPage < $scope.totalPages) {
            $scope.currentPage++;
            $scope.LoadListKhachHang();
        }
    };

    // Thêm hoặc cập nhật loại sản phẩm
    $scope.addKhachHang = function () {
        if (!$scope.maKhachHang || !$scope.tenKhachHang || !$scope.diaChi || !$scope.soDienThoai) {
            $scope.error = 'Vui lòng nhập thông tin khách hàng!';
            return;
        } else {
            $scope.error = '';
        }
        //Đẩy thông tin khách hàng vào NewKhachHang
        $scope.newKhachHang.maKhachHang = Number($scope.maKhachHang);
        $scope.newKhachHang.tenKhachHang = $scope.tenKhachHang;
        $scope.newKhachHang.diaChi = $scope.diaChi;
        $scope.newKhachHang.soDienThoai = $scope.soDienThoai;

        if ($scope.submit === "Thêm") {
            $http({
                method: 'POST',
                url: current_url + '/api/KhachHang/create-KhachHang',
                data: $scope.newKhachHang,
            }).then(function (response) {
                var isDuplicate = $scope.listKhachHang.some(function (khachhang) {
                    return khachhang.maKhachHang === $scope.maKhachHang;
                });

                if (isDuplicate) {
                    $scope.error = 'Mã khách hàng đã tồn tại. Vui lòng chọn mã khách hàng khác.';
                    return;
                } else {
                    $scope.error = '';
                }
                $scope.listKhachHang.push(response.data);
                $scope.LoadListKhachHang();
                $scope.newKhachHang = {};
                alert('Thêm khách hàng thành công!');
            });
        }
        else if ($scope.submit === "Lưu") {
            $http({
                method: 'PUT',
                url: current_url + '/api/KhachHang/update-KhachHang/',
                data: $scope.newKhachHang,
            }).then(function () {
                $scope.LoadListKhachHang();
                alert('Cập nhật khách hàng thành công!');
                // Đặt trạng thái về thêm mới sau khi cập nhật
                $scope.submit = "Thêm";
                $scope.maKhachHang = null;
                $scope.tenKhachHang = null;
                $scope.diaChi = null;
                $scope.soDienThoai = null;
            }).catch(function (error) {
                console.error('Error:', error);
            });
        }
    };

    // hàm sửa thông tin khách hàng
    $scope.btneditKH = function (maKhachHang) {
        $scope.submit = "Lưu";
        $scope.updateKhachHang = $scope.listKhachHang.find(function (khachhang) {
            return khachhang.maKhachHang === maKhachHang;
        });

        // Gán giá trị của updateKhachHang vào các biến
        $scope.maKhachHang = $scope.updateKhachHang.maKhachHang;
        $scope.tenKhachHang = $scope.updateKhachHang.tenKhachHang;
        $scope.diaChi = $scope.updateKhachHang.diaChi;
        $scope.soDienThoai = $scope.updateKhachHang.soDienThoai;

        document.getElementById('tenKhachHang').focus();
    };

    //Hàm xóa khách hàng
    $scope.btndeleteKH = function (maKhachHang) {
        var result = confirm("Bạn có thực sự muốn xóa không?");
        if (result) {
            $http({
                method: 'DELETE',
                url: current_url + '/api/KhachHang/delete-KhachHang/' + maKhachHang,
            }).then(function () {
                $scope.LoadListKhachHang();
                alert('Xóa thành công!');
            }).catch(function (error) {
                console.error('Error:', error);
            });
        }
    };

    //Hàm có chức năng tải lại dữ liệu trang tối đa 12 bản ghi hiển thị trên bảng
    function updatelistKhachHang() {
        var startIndex = ($scope.currentPage - 1) * $scope.itemsPerPage;
        var endIndex = Math.min(startIndex + $scope.itemsPerPage, $scope.listKhachHang.length);
        $scope.listKhachHang = $scope.listKhachHang.slice(startIndex, endIndex);
    };

    //Các hàm gọi sử dụng
    $scope.LoadListKhachHang();
});


