package com.book.order.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.book.order.model.dto.BookCategoryDTO;
import com.book.order.service.BookCategoryService;

@RestController
@RequestMapping(value = "/api/v1/category")
public class BookCategoryController {
    
    @Autowired
    private BookCategoryService bookCategoryService;
	
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<BookCategoryDTO>> findAll() {
        List<BookCategoryDTO> bookCategories = bookCategoryService.findAll();
        return new ResponseEntity<>(bookCategories,HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<BookCategoryDTO> getOne(@PathVariable Long id) {
        BookCategoryDTO bookCategory = bookCategoryService.findOne(id);
        if (bookCategory == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(bookCategory, HttpStatus.OK);
    }

   /* @PreAuthorize("hasRole('ROLE_USER')")*/
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<BookCategoryDTO> save(@RequestBody @Valid BookCategoryDTO bookCategory) {
    	bookCategory = bookCategoryService.save(bookCategory);
        return new ResponseEntity<>(bookCategory, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> remove(@PathVariable Long id){
        BookCategoryDTO bookCategory = bookCategoryService.findOne(id);
        if (bookCategory == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
        	bookCategoryService.remove(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
}
