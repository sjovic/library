package rs.levi9.library.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import rs.levi9.library.controller.validation.CategoryValidator;
import rs.levi9.library.controller.validation.InvalidCategoryException;
import rs.levi9.library.domain.Category;
import rs.levi9.library.service.CategoryService;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    private CategoryService categoryService;
    private CategoryValidator categoryValidator;

    @Autowired
    public CategoryController(CategoryService categoryService, CategoryValidator categoryValidator) {
        this.categoryService = categoryService;
        this.categoryValidator = categoryValidator;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Category> findAll() {
        return categoryService.findAll();
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.GET)
    public Category findOne(@PathVariable("id") Long id) {
        return categoryService.findOne(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Category save(@RequestBody Category category, BindingResult result) throws InvalidCategoryException {

        categoryValidator.validate(category, result);

        if (result.hasErrors()) {
            throw new InvalidCategoryException(result);
        }

        return categoryService.save(category);
    }

    @RequestMapping(path = "{id}", method = RequestMethod.DELETE)
    public void remove(@PathVariable("id") Long id) {
        categoryService.remove(id);
    }

}
