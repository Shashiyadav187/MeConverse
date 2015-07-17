app.controller('loginController',function($scope,$window){
	$scope.username = '';
	
	$scope.login = function(){
		alert($scope.username);
		$window.location.href = './chatroom.html';
	};
});