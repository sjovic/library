package rs.levi9.library.controller.validation;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ValidationErrorHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public List<Map<String, Object>> processValidationErrors(MethodArgumentNotValidException ex) {
        return processValidationErrors(ex.getBindingResult().getFieldErrors());
    }
    
    private List<Map<String, Object>> processValidationErrors(List<FieldError> errors) {
        List<Map<String, Object>> responseErrors = new ArrayList<>();
        
        for(FieldError error : errors) {
            Map<String, Object> errorMap = new HashMap<>();
            errorMap.put("field", error.getField());
            errorMap.put("reason", error.getDefaultMessage());
            responseErrors.add(errorMap);
        }

        return responseErrors;
    }
    

}
