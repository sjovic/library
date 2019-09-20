package rs.levi9.library.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import rs.levi9.library.model.Category;
import rs.levi9.library.service.CategoryService;
import rs.levi9.library.web.exceptions.ResourceNotFoundException;

import java.util.List;

@RestController
@RequestMapping("/categories")
@CrossOrigin
public class CategoryController {

    private final CategoryService service;

    @Autowired
    public CategoryController(CategoryService service) {
        this.service = service;
    }

    //@PreAuthorize("hasAnyRole('ADMIN_ROLE', 'USER_ROLE')")
    @GetMapping
    @ResponseBody
    public List<Category> getAllCategories() {

        return service.findAll();
    }

    //@PreAuthorize("hasAnyRole('ADMIN_ROLE', 'USER_ROLE')")
    @GetMapping(path = "{id}")
    @ResponseBody
    public ResponseEntity<Category> getCategory(@PathVariable("id") Long id) throws ResourceNotFoundException {
            Category ret = service.findOne(id)
                    .orElseThrow(() -> new ResourceNotFoundException("Category not founded with id: " + id));
            return ResponseEntity.ok().body(ret);
    }

    //@PreAuthorize("hasRole('ADMIN_ROLE')")
    @PostMapping()
    @ResponseBody
    public ResponseEntity<Category> saveCategory(@RequestBody Category category) throws ResourceNotFoundException{
        try {
            Category ret = service.save(category);
            return ResponseEntity.ok().body(ret);
        } catch (IllegalArgumentException e) {
            throw  new ResourceNotFoundException("Category not founded with id: " + category.getId());
        }
    }

    //@PreAuthorize("hasRole('ADMIN_ROLE')")
    @DeleteMapping(path = "{id}")
    public ResponseEntity deleteCategory(@PathVariable("id") Long id) throws ResourceNotFoundException {
        try {
            service.delete(id);
            return new ResponseEntity(HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            throw new ResourceNotFoundException("Couldn't delete category with id: "+id + ". Category dose not exist");
            //return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }

    //@PreAuthorize("hasRole('ADMIN_ROLE')")
    @PutMapping
    @ResponseBody
    public ResponseEntity<Category> updateCategory(@RequestBody Category category) throws ResourceNotFoundException {
        try {
            Category ret = service.update(category);
            return ResponseEntity.ok().body(ret);
        } catch (IllegalArgumentException e) {
            throw  new ResourceNotFoundException("Category not founded with id: " + category.getId());
        }
    }

}
