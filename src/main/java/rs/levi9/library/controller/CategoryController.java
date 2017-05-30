package rs.levi9.library.controller;

import rs.levi9.library.domain.Category;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import rs.levi9.library.service.CategoryService;

@RestController
@RequestMapping(value = "/api/v1/categories")
public class CategoryController {
    
    @Autowired
    private CategoryService categoryService;
	
    @RequestMapping(method = RequestMethod.GET)
    public List<Category>findAll() {
        return categoryService.findAll();
    }

    // TODO: do we even need this?
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Category> findOne(@PathVariable Long id) {
        Category category = categoryService.findOne(id);
        if (category == null) {
            return new ResponseEntity<>(category, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(category, HttpStatus.OK);
    }

   /* @PreAuthorize("hasRole('ROLE_USER')")*/
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Category> save(@RequestBody @Valid Category category) {
        try {
            Category result = categoryService.save(category);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (DataAccessException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public HttpStatus remove(@PathVariable Long id) {
        try {
            categoryService.remove(id);
        } catch (IllegalArgumentException e) {
            return HttpStatus.NOT_FOUND;
        }
        return HttpStatus.OK;
    }
}
