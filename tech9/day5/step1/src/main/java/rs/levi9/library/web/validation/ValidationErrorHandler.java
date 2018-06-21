package rs.levi9.library.web.validation;

import java.util.List;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.DataRetrievalFailureException;

import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ValidationErrorHandler {
    
    private static final String INTEGRITY_VIOLATION = "integrity violation";

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ValidationResponse processValidationErrors(MethodArgumentNotValidException ex) {
        return processValidationErrors(ex.getBindingResult().getFieldErrors());
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ValidationResponse processValidationErrors(DataIntegrityViolationException ex) {
        ValidationResponse response = new ValidationResponse();
        response.addItem(null, INTEGRITY_VIOLATION);
        return response;
    }
    
    @ExceptionHandler(DataRetrievalFailureException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public void processValidationErrors() {
        
    }

    private ValidationResponse processValidationErrors(List<FieldError> errors) {
        ValidationResponse response = new ValidationResponse();
        for (FieldError error : errors) {
            response.addItem(error.getField(), error.getDefaultMessage());
        }
        return response;
    }

}
