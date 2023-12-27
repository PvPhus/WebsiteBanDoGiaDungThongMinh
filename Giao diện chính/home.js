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
showSlides();
//-----------------------------------------------------------//
// Trong file script.js hoặc tệp tương tự

  var app = angular.module('myApp', []);

  app.controller('SearchController', function ($scope, ProductService) {
    $scope.searchQuery = '';
    $scope.searchResults = [];
    $scope.searchProducts = function () {
      ProductService.search($scope.searchQuery)
        .then(function (response) {
          $scope.searchResults = response.data;
        })
        .catch(function (error) {
          console.error('Error fetching search results:', error);
        });
    };
  });

  app.factory('ProductService', function ($http) {
    var service = {};

    service.search = function (query) {
      var apiUrl = 'https://localhost:7184/api/SanPham/search?query=' + encodeURIComponent(query);
      return $https.get(apiUrl);
    };

    return service;
  });

