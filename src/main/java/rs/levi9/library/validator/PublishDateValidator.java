package rs.levi9.library.validator;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class PublishDateValidator implements ConstraintValidator<ValidPublishDate, String> {
    
    private static final String DATE_FORMAT = "dd-MM-yyyy";
    private static final DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DATE_FORMAT);

    @Override
    public void initialize(ValidPublishDate constraintAnnotation) {
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (value == null) {
            return false;
        }
        try {
            LocalDate date = LocalDate.parse(value, formatter);
            if (date.isAfter(LocalDate.now())) {
                return false;
            }
        } catch(DateTimeParseException e) {
            return false;
        }
        return true;
    }
}
