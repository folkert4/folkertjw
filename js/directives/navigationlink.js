app.directive("navigationlink", function() {
    return {
      restrict: "E",
      replace: true,
      scope: { 
        pagelink: '=',
        callback: '&' 
      }, 
      templateUrl : "js/directives/navigationlink.html"
    };
});