(function(){
    angular.module('app')
    .controller('CategoryController', CategoryController);   
    
    CategoryController.$inject = ['CategoryService'];
    
    function CategoryController(CategoryService) {
        
        var vm = this;
        vm.addCategory = addCategory;
        vm.cancelForm = cancelForm;
        vm.deleteCategory = deleteCategory;
        vm.editCategory = editCategory;
        vm.saveCategory = saveCategory;
        vm.selectCategory = selectCategory;
        
        //Create new category
        vm.category = {};

        getCategories();
        
        function addCategory(){
        	vm.addCategoryForm
            vm.category = {};
        }
        
        function cancelForm(){
            vm.showForm = false;
        }
        
        function deleteCategory(){
            CategoryService.deleteCategory(vm.category.id).then(function(response){
                getCategories();
            }, function(error){

            });
            vm.category = {};
        }
        
        function editCategory(category){
            vm.category = angular.copy(category);
        }
        
        function getCategories(){
            CategoryService.getCategories().then(handleSuccessCategory);
        }
        
        //Get all categories
        function handleSuccessCategory(data, status){
            vm.categories = data;
        }

        function saveCategory(category){
            CategoryService.saveCategory(category).then(function(response){
                getCategories();
            }, function(error){

            })
            //remove input value after submit
            vm.addCategoryForm.$setPristine();
        }
        
        function selectCategory(category){
            vm.category = category;
        }
    };
})();
