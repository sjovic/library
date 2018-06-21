package rs.levi9.library.web.validation.isbn;

public class IsbnUtil {
    
    public  boolean isIsbn13Valid(String isbn) {
        return isIsbn13Valid(convert(isbn));
    }
    
    public boolean isIsbn13Valid(int[] isbn) {
        if(isbn.length != 13) {
            return false;
        }
        int sum = 0;
        for(int i = 0; i < isbn.length - 1; i++) {
            if (i % 2 == 0) {
                sum += isbn[i];
            } else {
                sum += isbn[i] * 3;
            }
        }
        int checksum = 10 - (sum % 10);
        
        return checksum == isbn[isbn.length - 1];
    }
    
    private int[] convert(String isbn) {
        return isbn.chars().map(x -> x - '0').toArray();
    }
    
}
