/**
 * Created by Arvin Zhu on 2016/8/25.
 */
var myApp = angular.module('myApp', ['ui.router']);
myApp.config(['$stateProvider', '$urlRouterProvider', function ( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.when('', '/home')
        .when('/list-info','/list-info/product-info')
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'home.html'
    }).state('list', {
        url: '/list',
        templateUrl: 'list.html'
    }).state('list-info',{
            url:'/list-info',
            templateUrl:'list-info.html'
        })
        .state("list-info.product-info",{
            url:'/product-info',
            templateUrl:'product-info.html'
        })
        .state("list-info.comment",{
            url:'/comment',
            templateUrl:'comment.html'
        })
        .state("list-info.order-know",{
            url:'/order-know',
            templateUrl:'order-know.html'
        })
}]);
myApp.run(['$rootScope','$location','$state', function($rootScope,$location,$state) {
    $rootScope.$on('$stateChangeSuccess', function (evt,toState,toParams,fromState,fromParams) {
        if(toState.templateUrl=="list.html"){
            $(".theme").html("家政列表");
            $(".location").css("display","none");
            $(".arrow").css("display","block");
            $(".arrow a").attr("href","#/home");
            $(".footer").css("display","block");
            $("#index").css("paddingBottom",4.3125+"rem");
        }
        if(toState.templateUrl=="home.html"){
            $(".theme").html("相约金管家");
            $(".location").css("display","block");
            $(".arrow").css("display","none");
            $(".footer").css("display","block");
            $("#index").css("paddingBottom",4.3125+"rem");
        }
        if(toState.templateUrl=="product-info.html"||toState.templateUrl=="order-know.html"||toState.templateUrl=="comment.html"){
            $(".theme").html("服务详情");
            $(".footer").css("display","none");
            $("#index").css("paddingBottom",0);
            $(".location").css("display","none");
            $(".arrow").css("display","block");
            $(".arrow a").attr("href","#/list")
        }
        if(toState.templateUrl=="product-info.html"){
            $($(".nav li")[0]).addClass("active").siblings().removeClass("active");
        }
        if(toState.templateUrl=="comment.html"){
            $($(".nav li")[1]).addClass("active").siblings().removeClass("active");
        }
        if(toState.templateUrl=="order-know.html"){
            $($(".nav li")[2]).addClass("active").siblings().removeClass("active");
        }
    })
}])