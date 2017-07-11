(function () {
    angular.module('app')
            .controller('HomeController', HomeController);

    HomeController.$inject = ['CategoryService', 'BookService', '$location', '$http'];

    function HomeController(CategoryService, BookService, $location) {

        var vm = this;
        vm.isActive = isActive;
        vm.categories;
        vm.books;

        init();

        function init() {
            getCategories();
            getBooks();
        }

        function getCategories() {
            CategoryService.getCategories().then(handleSuccessCategories);
        }

        function getBooks() {
            BookService.getBooks().then(handleSuccessBooks);
        }

        //Get all category
        function handleSuccessCategories(data, status) {
            vm.categories = data;
        }

        //Get all books
        function handleSuccessBooks(data, status) {
            vm.books = data.data;
        }


        //nav-bar
        function isActive(viewLocation) {
            return viewLocation === $location.path();
        }
    }

})();