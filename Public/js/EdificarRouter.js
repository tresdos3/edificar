var app = angular.module( 'AppEdificar', ['ui.router'] )
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('/',{
      url: '/',
      views:{
        '':{
          templateUrl: 'Public/view/Home.html'
        },
        'home@/':{
          templateUrl: 'Public/view/homes.html'
        },
        'about-us@/':{
          templateUrl: 'Public/view/about-us.html'
        },
        'services@/':{
          templateUrl: 'Public/view/services.html'
        },
        'portfolio@/':{
          templateUrl: 'Public/view/portfolio.html'
        },
        'contact@/':{
          templateUrl: 'Public/view/contact.html'
        }
      }
    })
    .state('Login',{
      url: '/Signin',
      templateUrl: './App/view/Signin.html'
    })
    $urlRouterProvider.otherwise('/');
})
