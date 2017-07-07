/**
 * 
 */

(function(){
angular.module('app')
    .controller('BookController', BookController);
    
    BookController.$inject = ['$filter', 'CategoryService', 'BookService', 'uibDateParser'];
   
    function BookController($filter, CategoryService, BookService, uibDateParser) {
        
        var vm = this;
        vm.addBook = addBook;
        vm.cancelForm = cancelForm;
        vm.clearBook = clearBook;
        vm.deleteBook = deleteBook;
        vm.editBook = editBook;
        vm.openCalendar = openCalendar;
        vm.saveBook = saveBook;
        vm.selectBook = selectBook;
        
        vm.showForm = false;

        init();

        function init() {
            getCategories();
            getBooks();
            //Create new book
            vm.book = {
                publishDate: new Date()
            };
        }

        vm.datePickerOptions = {
            formatYear: 'yy',
            maxDate : new Date()
        };

        vm.popupCalendar = {
           opened: false
        }; 

        function addBook(){
            vm.showForm = true;
            init();
        }
        
        function cancelForm(){
            vm.showForm = false;
        }
        
        function clearBook(){
            vm.addBookForm.$setPristine();
            vm.book = {};
        }
        
        function deleteBook(){
            BookService.deleteBook(vm.book.id).then(function(response){
                getBooks();
            }, function(error){

            });
            vm.book= {};
        }

        function editBook(book){
            vm.showForm = true;
            vm.book = angular.copy(book);
            vm.book.publishDate = new Date(vm.book.publishDate.split('-').join(' '));
        }

        function getCategories(){
            CategoryService.getCategories().then(handleSuccessCategories);
        }
        
        function getBooks(){
            BookService.getBooks().then(handleSuccessBooks);
        }

        //Get all category
        function handleSuccessCategories(data, status){
            vm.categories = data;
        }
        
        //Get all books
        function handleSuccessBooks(data, status){
            vm.books = data.data;
        }

        function openCalendar() {
            vm.popupCalendar.opened = true;
        };

        function saveBook(book){
            book.publishDate = $filter('date')(book.publishDate, "yyyy-MM-dd");
            console.log(book.publishDate);
            BookService.saveBook(book).then(function(response){
                getBooks();
            }, function(error){

            })
            //remove input value after submit
            vm.addBookForm.$setPristine();
            vm.showForm = false;
        }
        
        function selectBook(book){
            vm.book = book;
        }
    };
})();