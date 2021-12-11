/**
 *
 * Flatten the given array
 * Input: [1,2,[3,4,[5,6]],7,8,[9,10]]
 * Output: [1,2,3,4,5,6,7,8,9,10]
 *
 */
const flattenArray = (arr) => {
  let flattenedArray = [];
  arr.forEach((item) => {
    if (Array.isArray(item))
        flattenedArray.push(...flattenArray(item));
    else 
        flattenedArray.push(item);
  });
  return flattenedArray;
};

console.log(flattenArray([1, 2, [3, 4, [5, 6, 7]], 8]));
