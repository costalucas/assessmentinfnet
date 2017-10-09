angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('CachorrosCtrl', function($scope) {
  $scope.titulo="Busca por Cachorros"
  $scope.animais = [
    "nome": "Thor",
    "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel consequat nisl. Integer in ex eget diam bibendum facilisis mollis eget tortor. Sed id scelerisque felis, et laoreet mi. Proin aliquet augue non est luctus efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam finibus odio id interdum tempor. Maecenas tincidunt posuere odio sit amet sagittis.",
    "contato" : "23456789",
    "imagem":"http://lorempixel.com/300/150/animais/55"
    ],
    [
    "nome" : "Eike",
    "descricao" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel consequat nisl. Integer in ex eget diam bibendum facilisis mollis eget tortor. Sed id scelerisque felis, et laoreet mi. Proin aliquet augue non est luctus efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam finibus odio id interdum tempor. Maecenas tincidunt posuere odio sit amet sagittis.",
    "contato" : "32112323",
    "imagem": "http://lorempixel.com/300/150/animais/55"
    ],
    [
    "nome" : "Aécio",
    "descricao" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel consequat nisl. Integer in ex eget diam bibendum facilisis mollis eget tortor. Sed id scelerisque felis, et laoreet mi. Proin aliquet augue non est luctus efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam finibus odio id interdum tempor. Maecenas tincidunt posuere odio sit amet sagittis.",
    "contato" : "78585787",
    "imagem" : "http://lorempixel.com/300/150/animais/55"
    ],
    [
    "nome" : "Cunha",
    "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel consequat nisl. Integer in ex eget diam bibendum facilisis mollis eget tortor. Sed id scelerisque felis, et laoreet mi. Proin aliquet augue non est luctus efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam finibus odio id interdum tempor. Maecenas tincidunt posuere odio sit amet sagittis.",
    "contato" : "95175345",
    "imagem": "http://lorempixel.com/300/150/animais/55"
  ];
})
.controller('GatosCtrl', function($scope) {
  $scope.animais = [
  ];
})
.controller('PerfilCtrl', function($scope) {
  
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
