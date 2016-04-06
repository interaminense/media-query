var app = angular.module('app', []);
var tagName = 'css3';

app.factory('instagram', ['$http', function($http){
    return {
        fetchPopular: function(callback){
            var tagSearch = "https://api.instagram.com/v1/tags/"+tagName+"/media/recent?access_token=194159779.5b9e1e6.23f606c4117f4263a5ee602fa7c98f8d&callback=JSON_CALLBACK";
            $http.jsonp(tagSearch).success(function(response){
                callback(response.data);
            });
        }
    }
}]);

app.controller('mainCtrl', ['$scope', 'instagram', function ($scope, instagram){
    instagram.fetchPopular(function(data){
        $scope.response = data;
        console.log($scope.response);
    });
}]);
