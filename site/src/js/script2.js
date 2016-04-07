var app = angular.module('app', []);

app.controller('mainCtrl', function ($scope, $http, $window){

    $scope.listTag = ['css3'];
    $scope.urlCur = '';
    $scope.listResponse = [];
    $scope.tagSelected = 'css3';

    var _loadJson = function(newTagName, maxTagId) {
        var url = "https://api.instagram.com/v1/tags/"+ newTagName +"/media/recent?access_token=194159779.5b9e1e6.23f606c4117f4263a5ee602fa7c98f8d&callback=JSON_CALLBACK";

        if(maxTagId != ''){
            url = "https://api.instagram.com/v1/tags/"+ newTagName +"/media/recent?access_token=194159779.5b9e1e6.23f606c4117f4263a5ee602fa7c98f8d&callback=JSON_CALLBACK&max_tag_id=" + maxTagId;
        }

        console.log('url', url);

        $http.jsonp(url).success(function(response) {
            $scope.response = response;
            angular.forEach(response.data, function(p){
                $scope.listResponse.push(p);
            });
            console.log('response', $scope.response);
            console.log($scope.listResponse);
        }).error(function (response) {
            $scope.response = "Request failed";
        });
    };

    _loadJson('css3', '');

    $scope.nextUrl = function(tagName, maxTagId) {
        _loadJson(tagName, maxTagId);
        console.log('tagname', tagName, 'maxTagId', maxTagId);
    }

    $scope.modifyTagName = function(newTagName) {
        $scope.listResponse = [];
        _loadJson(newTagName, '');
        $scope.listTag.push(newTagName);
        $scope.tagSelected = newTagName;
    }

    $scope.submit = function() {
        $scope.listResponse = [];
        if ($scope.tagName) {
            _loadJson($scope.tagName, '');
            $scope.listTag.push($scope.tagName);
            $scope.tagSelected = $scope.tagName;
            $scope.tagName = '';
        }
    };

    $scope.showBigPhoto = function(e) {
        console.log(e);
        e.srcElement.parentNode.classList.toggle('active');
    }

    $scope.order = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.friends = orderBy($scope.friends, predicate, $scope.reverse);
    };

    angular.element($window).bind("scroll", function() {
        var header = document.querySelector('.header');
        var mini = document.querySelector('.mini');
        if(this.pageYOffset >= 100){
            header.classList.add('active');
        }else{
            header.classList.remove('active');
        }
        if(this.pageYOffset >= 200){
            mini.classList.add('active');
        }else{
            mini.classList.remove('active');mini
        }
    });

});
