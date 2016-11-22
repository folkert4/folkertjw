app.controller('NavController', function($scope, $location){ 
    $scope.isActive = function (viewLocation) {
        console.log($location.path(), viewLocation, viewLocation === $location.path());
        return viewLocation === $location.path();
    };
});