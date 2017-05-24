package com.book.order.service;

import com.book.order.domain.BookCategory;
import com.book.order.repository.BookCategoryRepository;
import com.book.order.model.dto.BookCategoryDTO;
import java.util.List;

import org.springframework.stereotype.Service;

import org.jtransfo.JTransfo;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class BookCategoryService extends JTransfoService {

    private BookCategoryRepository bookCategoryRepository;
    
    @Autowired
    public BookCategoryService(JTransfo jTransfo, BookCategoryRepository bookCategoryRepository) {
        super(jTransfo);
        this.bookCategoryRepository = bookCategoryRepository;
    }

    public BookCategoryDTO findOne(Long id) {
        BookCategory bookCategory = bookCategoryRepository.findOne(id);
        return jTransfo.convertTo(bookCategory, BookCategoryDTO.class);
    }

    public List<BookCategoryDTO> findAll() {
        List<BookCategory> bookCategoryItems = bookCategoryRepository.findAll();
        return jTransfo.convertList(bookCategoryItems, BookCategoryDTO.class);
    }

    public BookCategoryDTO save(BookCategoryDTO bookCategoryDTO) {
        BookCategory bookCategory = jTransfo.convert(bookCategoryDTO, new BookCategory());
        bookCategory = bookCategoryRepository.save(bookCategory);
        return jTransfo.convertTo(bookCategory, BookCategoryDTO.class);
    }

    public void remove(Long id) throws IllegalArgumentException {
        BookCategory bookCategory = bookCategoryRepository.findOne(id);
        if (bookCategory == null) {
                throw new IllegalArgumentException("Daily Menu does not exists");
        }
        bookCategoryRepository.delete(bookCategory);
    }

}
