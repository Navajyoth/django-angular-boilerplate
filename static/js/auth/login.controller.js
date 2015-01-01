(function(){
	angular.module('app')
		.controller('LoginCtrl', LoginCtrl);

	LoginCtrl.$inject = ['User', '$location'];

	function LoginCtrl(User, $location){
		var vm = this;
		vm.login = login;
    
    activate();

    function activate(){
      if(User.isAuthenticated()){
        window.location = '/';
      }
    }

		function login(){
			User
				.login(vm.user)
				.then(onSuccess, onFail);

			function onSuccess(){
				//$location.url('/');
        window.location = '/';
			}

			function onFail(result){
				vm.error = result.message;
			}
		}
	}

})();
