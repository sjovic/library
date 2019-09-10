package rs.levi9.library.web.validatior;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class Isbn13ValidatorTest {

    private String isbn;
    private Isbn13Validator validator = new Isbn13Validator();

    @Test
    public void isOkWithDashes() {
        isbn = "9-7881-752-576-65";
        Assert.assertTrue(validator.isValid(isbn, null));
    }

    @Test
    public void isOk() {
        isbn = "9788175257665";
        Assert.assertTrue(validator.isValid(isbn, null));
    }

    @Test
    public void isTooLong() {
        isbn = "9-7881-752-576-6545";
        Assert.assertFalse(validator.isValid(isbn, null));
    }

    @Test
    public void isTooShort() {
        isbn = "9-78815766545";
        Assert.assertFalse(validator.isValid(isbn, null));
    }

    @Test
    public void isInvalid() {
        isbn = "9-7881-755-576-6545";
        Assert.assertFalse(validator.isValid(isbn, null));
    }

}