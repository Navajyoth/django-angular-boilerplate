(function (){
	angular.module('app')
		.factory('User', User);

	User.$inject = ['$http', '$cookies', '$q'];
	
	function User($http, $cookies, $q){
    
		return {
			register: register,
			login: login,
	    info: info,
      logout: logout,
      isAuthenticated: isAuthenticated,
		};

		function info(){
			return $http.get('api/users/');
		}

		function register(info){
			return $http.post('/api/users/', info);
		}

		function login(info){
      var defer = $q.defer();
			$http.post('/api/login/', info).then(successFn, errorFn);
      return defer.promise;

      function successFn(response){
        setAuthUser(response.data);
        defer.resolve(response.data);
      }
      
      function errorFn(response){
        defer.reject(response.data);
      }
		}

    function setAuthUser(user){
      $cookies.authUser = JSON.stringfy(user);
    }

    function getAuthUser(){
      if(!isAuthenticated) return;
      return JSON.parse($cookies.authUser);
    }

    function unauthUser(){
      delete $cookies.authUser;
    }

    function isAuthenticated(){
      return !!$cookies.authUser;
    }

    function logout(){
			return $http.post('/api/logout/')
        .then(logoutSuccessFn);

      function logoutSuccessFn(){
        unauthUser();
        window.location = '/';
      }
    }
	}

})();
