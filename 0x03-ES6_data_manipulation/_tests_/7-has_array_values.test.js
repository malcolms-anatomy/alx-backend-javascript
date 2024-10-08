import hasValuesFromArray from '../7-has_array_values.js';

describe('hasValuesFromArray', () => {
  it('should return true if all elements in the array exist within the set', () => {
    const set = new Set([1, 2, 3, 4, 5]);
    expect(hasValuesFromArray(set, [1])).toBe(true);
  });

  it('should return false if any element in the array does not exist within the set', () => {
    const set = new Set([1, 2, 3, 4, 5]);
    expect(hasValuesFromArray(set, [10])).toBe(false);
  });

  it('should return false if any element in the array does not exist within the set', () => {
    const set = new Set([1, 2, 3, 4, 5]);
    expect(hasValuesFromArray(set, [1, 10])).toBe(false);
  });
});

