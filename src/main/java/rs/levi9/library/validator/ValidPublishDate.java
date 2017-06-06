package rs.levi9.library.validator;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import static java.lang.annotation.RetentionPolicy.*;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;
import javax.validation.Constraint;
import javax.validation.Payload;

@Target({ElementType.FIELD})
@Retention(RUNTIME)
@Constraint(validatedBy = PublishDateValidator.class)
@Documented
public @interface ValidPublishDate {
    
    String message() default "date not in the past or wrong format!";
    
    Class<?>[] groups() default {};
    
    Class<? extends Payload>[] payload() default {};
    
}
