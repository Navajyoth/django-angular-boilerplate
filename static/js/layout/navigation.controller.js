(function(){
  angular.module('app')
  .controller('NavigationCtrl', NavigationCtrl);

  NavigationCtrl.$inject = ['User'];

  function NavigationCtrl(User){
    var vm = this;
    vm.logout = logout;

    function logout(){
      User.logout();
    }
  }

})();
