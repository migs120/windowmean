



angular.module('articles').controller('ArticlesController', 
                                      ['$scope', '$routeParams', '$location', 'Authentication', 'Articles',
                                       
  function($scope, $routeParams, $location, Authentication, Articles) {
    
    
    //var contl = require('../../../app/controllers/articles.server.controller.js');
    
    $scope.authentication = Authentication;
    
    
 //===============================================   
    console.log( 'hay'
                  
                                  // Articles.query()
                                              
                           
               );
 //========================================                                      
    
    $scope.create = function() {
                                var article = new Articles({
                                                                title: this.title,
                                                                content: this.content
                                                              });

                                article.$save(
                                              function(response) {
                                                                    $location.path('articles/' + response._id);
                                                                  },
                                              function(errorResponse) {
                                                                        $scope.error = errorResponse.data.message;
                                                                      }
                                            );
                              };

    $scope.find = function() {   
                                $scope.articles = Articles.query();
      
      
                               // console.log(contl.Article.find({'title':'the new'}).title);
  
      
                              };

    $scope.findOne = function() {
                                  $scope.article = Articles.get({
                                                                  articleId: $routeParams.articleId
                                                                });
                                };


    $scope.update = function() {
                                  $scope.article.$update(
                                                          function() {
                                                                        $location.path('articles/' + $scope.article._id);
                                                                      },
                                                          function(errorResponse) {
                                                                                    $scope.error = errorResponse.data.message;
                                                                                  }
                                                        );
                                };

    $scope.delete = function(article) {
                                        if (article) {
                                                        article.$remove(function() {
                                                                                      for (var i in $scope.articles) {
                                                                                                                      if ($scope.articles[i] === article) {
                                                                                                                                                            $scope.articles.splice(i, 1);              
                                                                                                                                                          }
                                                                                                                    }
                                                                                    });
                                                      }
                                        else {
                                                $scope.article.$remove(function() {
                                                                                   // console.log("Yeah!")
                                                                                    $location.path('articles');
                                                                                  });
                                        }
      
                                      };
    
    
   
  //$scope.test = function(){ $scope.people = {name:'bill'};  } ; 
  
   //$scope.test2 = function(){ $scope.article1 =  };   
    
    
  }
]);




