import groceriesList from '../9-groceries_list.js';

describe('groceriesList', () => {
  it('should return a map of groceries with the correct items and quantities', () => {
    const groceries = groceriesList();
    expect(groceries.get('Apples')).toBe(10);
    expect(groceries.get('Tomatoes')).toBe(10);
    expect(groceries.get('Pasta')).toBe(1);
    expect(groceries.get('Rice')).toBe(1);
    expect(groceries.get('Banana')).toBe(5);
  });
});

