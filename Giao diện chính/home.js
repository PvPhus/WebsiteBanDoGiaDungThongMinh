//Chức năng làm ảnh tự động di chuyển
let slideIndex = 0;
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}



function ProductDetail() {
  // Lấy giá trị của các phần tử trong HTML
  var imgProduct = document.querySelector('.img-ProductDetail').src;
  var nameProduct = document.querySelector('.name-Product').textContent;
  var priceProduct = document.querySelector('.priceProduct').textContent;

  // Tạo một đối tượng để lưu các thông tin
  var product = {
      imgProduct: imgProduct,
      nameProduct: nameProduct,
      priceProduct: priceProduct,
  };

  // Lấy danh sách sản phẩm từ localStorage hoặc tạo mới nếu không tồn tại
  var productitems = JSON.parse(localStorage.getItem('productdetail')) || [];

  // Thêm sản phẩm mới vào danh sách
  productitems.push(product);

  // Lưu lại danh sách sản phẩm vào localStorage
  localStorage.setItem('productdetail', JSON.stringify(productitems));
}
document.addEventListener('DOMContentLoaded', function() {
  showSlides();
});















































//-----------------------------------------------------------//
// Trong file script.js hoặc tệp tương tự

// var app = angular.module('myApp', []);

// app.controller('SearchController', function ($scope, ProductService) {
//   $scope.searchQuery = '';
//   $scope.searchResults = [];
//   $scope.searchProducts = function () {
//     ProductService.search($scope.searchQuery)
//       .then(function (response) {
//         $scope.searchResults = response.data;
//       })
//       .catch(function (error) {
//         console.error('Error fetching search results:', error);
//       });
//   };
// });

// app.factory('ProductService', function ($http) {
//   var service = {};

//   service.search = function (query) {
//     var apiUrl = 'https://localhost:7184/api/SanPham/search?query=' + encodeURIComponent(query);
//     return $https.get(apiUrl);
//   };

//   return service;
// });

