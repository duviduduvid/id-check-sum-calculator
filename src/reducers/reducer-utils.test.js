import {
  incrementIndex,
  decrementIndex,
  replaceArrayItem
} from './reducer-utils';

describe('reducer-utils', () => {
  describe('testing incrementIndex', () => {
    it('should increment index lower than 7', () => {
      expect(incrementIndex(0)).toBe(1);
      expect(incrementIndex(5)).toBe(6);
    });
    it('should not increment index higher than or equal to 7', () => {
      expect(incrementIndex(7)).toBe(7);
      expect(incrementIndex(12)).toBe(7);
    });
  });

  describe('testing decrementIndex', () => {
    it('should decrement index higher than 0', () => {
      expect(decrementIndex(1)).toBe(0);
      expect(decrementIndex(7)).toBe(6);
    });
    it('should not decrement index lower than or equal to 0', () => {
      expect(decrementIndex(0)).toBe(0);
      expect(decrementIndex(-3)).toBe(0);
    });
  });

  describe('testing replaceArrayItem', () => {
    const originalArray = [
      { index: 0, value: '10' },
      { index: 1, value: '20' },
      { index: 2, value: '30' }
    ];
    const newItem = { index: 3, value: 'this is a new item' };

    it('should not mutate original array', () => {
      const expected = [...originalArray];
      replaceArrayItem(originalArray, newItem, 1);
      expect(originalArray).toEqual(expected);
    });
    it('should change the item in the specified index', () => {
      const expected = [originalArray[0], newItem, originalArray[2]];
      expect(replaceArrayItem(originalArray, newItem, 1)).toEqual(expected);
    });
    it('should not change array content when the specified index is out of bound', () => {
      expect(replaceArrayItem(originalArray, newItem, 3)).toEqual(
        originalArray
      );
    });
  });
});
