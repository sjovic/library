(function(){
angular.module('app')
    .controller('BookController', BookController);
    
    BookController.$inject = ['$filter', 'CategoryService', 'BookService', 'uibDateParser'];
   
    function BookController($filter, CategoryService, BookService, uibDateParser) {
        
        var vm = this;
        vm.addBook = addBook;
        vm.deleteBook = deleteBook;
        vm.editBook = editBook;
        vm.openCalendar = openCalendar;
        vm.saveBook = saveBook;
        vm.selectBook = selectBook;
        vm.operation;

        init();

        function init() {
            getCategories();
            getBooks();
            vm.error = {};
            //Create new book
            vm.book = {
                publishDate: new Date()
            };
            vm.closeModal = false;
        }

        vm.datePickerOptions = {
            formatYear: 'yy',
            maxDate : new Date()
        };

        vm.popupCalendar = {
           opened: false
        }; 

        function addBook() {
            vm.addBookForm.$setPristine();
            vm.operation = "Add";
            init();
        }

        function deleteBook(){
            BookService.deleteBook(vm.book.id).then(function(response){
                getBooks();
            }, function(error){

            });
            vm.book= {};
        }

        function editBook(book){
        	vm.error = {};
            vm.operation = "Edit";
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

        function capitalize(error){
            return '* ' + error[0].toUpperCase() + error.slice(1); 
        }

        function errorHandler(error){
            switch(error.field){
                case 'title':
                    vm.error.title = capitalize(error.message);
                    break;
                case 'isbn':
                    vm.error.isbn = capitalize(error.message);
                    break;
            }
        }

        function saveBook(book){
            book.publishDate = $filter('date')(book.publishDate, "yyyy-MM-dd");
            BookService.saveBook(book).then(function(response){
                getBooks();
                $('#add-book-modal').modal('hide');
            }, function(error){
                vm.error = {};
                angular.forEach(error.data.exceptions, function(e){
                    errorHandler(e);
                });
            })
            //remove input value after submit
            vm.addBookForm.$setPristine();
            vm.error = {};
        }
        
        function selectBook(book){
            vm.book = book;
        }
    };
})();
