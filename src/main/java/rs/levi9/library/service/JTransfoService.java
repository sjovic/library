package rs.levi9.library.service;

import java.util.ArrayList;
import java.util.List;
import org.jtransfo.JTransfo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;

public abstract class JTransfoService {
    protected final JTransfo jTransfo;

    public JTransfoService(JTransfo jTransfo) {
        this.jTransfo = jTransfo;
    }

    protected <T> List<T> convertList(List<?> source, Class<T> targetClass) {
        List<T> result = new ArrayList<T>();
        if (!source.isEmpty()) {
            result = jTransfo.convertList(source, targetClass);
        }
        return result;
    }

    protected <T> Page<T> convertListToPage(List<?> source, Class<T> targetClass) {
        return new PageImpl<T>(convertList(source, targetClass));
    }

}
