export const replaceArrayItem = (array, itemToReplace, replaceAtIndex) =>
  array.map((item, index) => (index === replaceAtIndex ? itemToReplace : item));

export const incrementIndex = previousIndex =>
  previousIndex + 1 < 8 ? previousIndex + 1 : 7;

export const decrementIndex = previousIndex =>
  previousIndex - 1 >= 0 ? previousIndex - 1 : 0;
