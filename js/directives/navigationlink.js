app.directive("navigationlink", function() {
    return {
      restrict: "E",
      replace: true,
      scope: { 
        pagelink: '=' 
      }, 
      templateUrl : "js/directives/navigationlink.html"
    };
});