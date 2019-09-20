package rs.levi9.library.web.validatior;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class Isbn13Validator implements ConstraintValidator<Isbn13, String> {

    @Override
    public void initialize(Isbn13 constraintAnnotation) {

    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {

        String newValue = value.replaceAll("-", "");
        int[] isbn = newValue.chars().map(x -> x - '0').toArray();

        if(isbn.length != 13) {
            return false;
        }
        int sum = 0;
        for(int i = 0; i < isbn.length - 1; i++) {
            if (i % 2 == 0) {
                sum += isbn[i];
            } else {
                sum += isbn[i] * 3;
            }
        }
        int checksum = 10 - (sum % 10);

        return checksum == isbn[isbn.length - 1];
    }
}
