app.controller('HomeController', function($scope) {
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

  $scope.activeNav = function(element){
      console.log('works', element);
  };

});