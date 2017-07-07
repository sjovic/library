package rs.levi9.library.controller.validation;

import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;
import rs.levi9.library.domain.Category;

@Component
public class CategoryValidator implements Validator {
    
    private static final String EMPTY_CATEGORY = "^\\s+$";
    private static final Pattern p = Pattern.compile(EMPTY_CATEGORY);

    @Override
    public boolean supports(Class<?> type) {
        return Category.class.isAssignableFrom(type);
    }

    @Override
    public void validate(Object o, Errors errors) {
        Category category = (Category) o;
        
        if (category.getName() == null) {
            errors.rejectValue("name", "field.required", "must not be null");
        } else {
            if (category.getName().length() < 2 || category.getName().length() > 30) {
                errors.rejectValue("name", "field.required", "length must be between 2 and 30");
            } else {
                Matcher m = p.matcher(category.getName());
                if (m.matches()) {
                    errors.rejectValue("name", "field.required", "must not match ^\\s+$");
                }
            }
        }
        
    }

}
