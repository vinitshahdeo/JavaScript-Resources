/**
 * multiply(a)(b)(c)....(n)() should return the product of all the numbers a*b*c*..*n.
 *
 * For example, multiply(1)(2)(3)() = 6
 *
 */

// ES5 Solution
function mul(a) {
  return function (b) {
    if (!b) return a;
    return mul(a * b);
  };
}

// ES6 Solution
const multiply = (a) => {
  return (b) => {
    if (!b) return a;
    return multiply(a*b);
  }  
}

// one-liner solution
const multiplication = a => b => b ? multiply(a*b) : a
