angular.module('app').controller('mainCtrl', function($scope){
    $scope.friends = [
        {
            name: 'Tiffany',
            age: 40
        },
        {
            name: 'Sara',
            age: 26
        },
         {
             name: 'Shea',
             age: 34
         }
    ]
    $scope.opts = [
        'name',
        'age',
        ''
    ]
    $scope.directions=[
        {
            name: 'Acs',
            value: '+'
        },
        {
            name: 'Desc',
            value: '-'
        }
    ]
});