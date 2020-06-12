/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "angularModule"  
/* Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('indexCtrl', function($scope,$http){

    $scope.IsVisible = false;

    $scope.showData = function(){
     $scope.IsVisible = true;
    }
      
      
    $scope.contents = null;
    $http.get('https://aimtell.com/files/sites.json').then(function(data) {
        $scope.contents = data.data.sites;

        console.log($scope.contents);
    });               
});  