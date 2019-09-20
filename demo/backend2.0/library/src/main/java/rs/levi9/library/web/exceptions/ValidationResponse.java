package rs.levi9.library.web.exceptions;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class ValidationResponse {

    private List<ErrorDetails> errors;

    public ValidationResponse() {
        this.errors = new ArrayList<ErrorDetails>();
    }

    public  ValidationResponse(List<ErrorDetails> errors) {
        this.errors = errors;
    }

    public void setErrors(List<ErrorDetails> errors) {
        this.errors = errors;
    }

    public List<ErrorDetails> getErrors() {
        return errors;
    }

    public void addError(Date date, String message, String details) {
        this.errors.add(new ErrorDetails(date, message, details));
    }
}
