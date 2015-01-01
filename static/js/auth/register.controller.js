(function(){
	'use strict';

	angular.module('app')
		.controller('RegisterCtrl', RegisterCtrl);

	RegisterCtrl.$inject = ['User'];

	function RegisterCtrl(User){
		var vm = this;
		vm.register = register;

		function register(form){
			User.register(vm.user).then(onRegisterSuccess, onRegisterFail);

			function onRegisterSuccess(data, status, header){
				console.log('success');
				window.location = '/';
			}

			function onRegisterFail(result){
				//vm.error = result.data.err.errors;
        vm.error = '';
        angular.forEach(result.data.errors, function(error, field){
          vm.error += error.message;
          console.log(error);
          console.log(field);
        });
			}
		}
	}
})();
