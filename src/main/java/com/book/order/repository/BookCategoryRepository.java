package com.book.order.repository;

import com.book.order.domain.BookCategory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface BookCategoryRepository extends JpaRepository<BookCategory, Long>{

}
