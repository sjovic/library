package rs.levi9.library.web.validation.custom;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import rs.levi9.library.web.validation.isbn.IsbnUtil;

public class Isbn13Validator implements ConstraintValidator<Isbn13, String> {

    @Override
    public void initialize(Isbn13 category) { }
 
    @Override
    public boolean isValid(String isbn, ConstraintValidatorContext cxt) {
        return new IsbnUtil().isIsbn13Valid(isbn);
    }
    
}