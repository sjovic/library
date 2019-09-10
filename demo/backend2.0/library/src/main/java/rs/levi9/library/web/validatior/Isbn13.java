package rs.levi9.library.web.validatior;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

@Documented
@Constraint(validatedBy = Isbn13Validator.class)
@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
public @interface Isbn13 {

    String message() default "invalid isbn code";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
