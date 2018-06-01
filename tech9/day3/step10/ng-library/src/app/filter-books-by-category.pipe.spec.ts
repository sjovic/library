import { FilterBooksByCategoryPipe } from './filter-books-by-category.pipe';

describe('FilterBooksByCategoryPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterBooksByCategoryPipe();
    expect(pipe).toBeTruthy();
  });
});
