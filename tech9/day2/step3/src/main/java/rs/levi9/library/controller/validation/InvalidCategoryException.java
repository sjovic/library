package rs.levi9.library.controller.validation;

import org.springframework.validation.BindingResult;

public class InvalidCategoryException extends Exception {
    
    private final BindingResult bindingResult;
    
    public InvalidCategoryException(BindingResult bindingResult) {
        this.bindingResult = bindingResult;
    }
    
    public BindingResult getBindingResult() {
        return bindingResult;
    }
    
}
