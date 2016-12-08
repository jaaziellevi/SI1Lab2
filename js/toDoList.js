angular.module("toDoList", []);

angular.module("toDoList").controller("toDoListCtrl", function ($scope) {
	$scope.app = "To Do List";
	
	$scope.tasks = [
		{task: "Estudar"},
		{task: "Lavar o carro"},
		{task: "Levar o cachorro pra passear"}
	];

	$scope.checked = [];

	$scope.done = 0;

	$scope.notDone = 100;

	$scope.addTask = function(task) {
		$scope.tasks.push(angular.copy(task));
		$scope.progress();
		document.getElementById('task').value='';
	}

	$scope.eraseTasks = function (tasks) {
		$scope.tasks.length = 0;
		$scope.checked.length = 0;
		$scope.progress();
	}

	$scope.eraseTask = function (index) {
		if($scope.tasks[index].selected) {
			$scope.checked.pop();
		}
		$scope.tasks.splice(index, 1);
		$scope.progress();
	}

	$scope.addChecked = function(selected) {
		if (selected) {
			$scope.checked.push("task done");
		} else {
			$scope.checked.splice(0, 1);
		}
		$scope.progress();
	}

	$scope.progress = function() {
		$scope.done = ($scope.checked.length / $scope.tasks.length) * 100;
		$scope.notDone = 100 - ($scope.checked.length / $scope.tasks.length) * 100;
	}

});