package rs.levi9.library.web.validation.isbn;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class IsbnUtilTest {
	
	private String badIsbn;
	private String goodIsbn;
	private IsbnUtil isbnUtil;
	
	@Before
	public void setUp() {
		badIsbn = "wrong isbn";
		goodIsbn = "9788675553083";
		isbnUtil = new IsbnUtil();
	}
	
	@Test
	public void should_fail_validation() {
		Assert.assertFalse(isbnUtil.isIsbn13Valid(badIsbn));
	}
	
	@Test
	public void should_pass_validation() {
		Assert.assertTrue(isbnUtil.isIsbn13Valid(goodIsbn));
	}
	
}