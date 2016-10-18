app.controller('HomeController', ['$scope', function($scope) {
  $scope.pages = [
    {
      pagedetails: {
        name: 'Home',
        link: '#/'
      }
    },
    {
      pagedetails: {
        name: 'About',
        link: '#/about'
      }
    },
    {
      pagedetails: {
        name: 'Contact',
        link: '#/contact'
      }
    }
  ];
}]);