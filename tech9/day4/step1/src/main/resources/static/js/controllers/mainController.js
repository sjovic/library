/**
 * 
 */
(function(){
    angular.module('app')
        .controller('MainController', MainController);
    
        MainController.$inject = ['CategoryService', '$location', '$anchorScroll', 'BookService'];
    
        function MainController(CategoryService, $location, $anchorScroll, BookService) {

            var vm = this;
            vm.isActive = isActive;
            vm.scrollTo = scrollTo;

            getCategories();

            //nav-bar
            function isActive(viewLocation) {
                return viewLocation === $location.path();
            };

            function getCategories(){
                CategoryService.getCategories().then(handleSuccessCategory);
            }

            function handleSuccessCategory(data, status) {
                vm.categories = data;
            }

            function scrollTo(id) {
                $location.hash(id);
                $anchorScroll();
            }

            BookService.getBooks().then(function(response) {
                vm.books = response.data;
            });
        }
}) ();
