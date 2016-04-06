var app = angular.module('app', []);

app.controller('mainCtrl', function ($scope, $http, $window){

    $scope.listTag = ['css3'];

    var _loadJson = function(newTagName) {
        $http.jsonp("https://api.instagram.com/v1/tags/"+ newTagName +"/media/recent?access_token=194159779.5b9e1e6.23f606c4117f4263a5ee602fa7c98f8d&callback=JSON_CALLBACK").success(function(response) {
            $scope.response = response;
        }).error(function (response) {
            $scope.response = "Request failed";
        });
    };

    _loadJson('css3');

    $scope.modifyTagName = function(newTagName) {
        _loadJson(newTagName);
        $scope.listTag.push(newTagName);
    }

    $scope.submit = function() {
        if ($scope.tagName) {
            _loadJson($scope.tagName);
            $scope.listTag.push($scope.tagName);
            $scope.tagName = '';
        }
    };

    angular.element($window).bind("scroll", function() {
        var positionScroll = document.documentElement.scrollTop;
        var header = document.querySelector('.header');
        if(positionScroll > 100){
            header.classList.add('active');
        }else{
            header.classList.remove('active');
        }
    });

});
