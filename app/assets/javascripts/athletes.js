(function() {

	var app = angular.module('disvolvi', [])
	.factory('socket', ['$rootScope', function ($rootScope) {

		var socket = io.connect('//localhost:3001/')

		return {
			on: function (eventName, callback) {
				socket.on(eventName, function () {  
					var args = arguments;
					$rootScope.$apply(function () {
						callback.apply(socket, args);
					});
				});
			},
			emit: function (eventName, data, callback) {
				socket.emit(eventName, data, function () {
					var args = arguments;
					$rootScope.$apply(function () {
						if (callback) {
							callback.apply(socket, args);
						}
					});
				})
			}
		};
	}]);

	app.controller('SportsController', ['$scope', '$http', 'socket', function($scope, $http, socket){

		$scope.athletes = []
		$http.get('/athletes.json').success(function(data){
	        $scope.athletes = data;
	    })

	    socket.emit('message')

		socket.on('message', function (data) {
			data = JSON.parse(data)
			$scope.athletes.push(data)
		})
	}])
})()