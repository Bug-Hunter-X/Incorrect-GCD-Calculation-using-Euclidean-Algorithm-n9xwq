function foo(a, b) {
  if (a === b) {
    return true;
  } else if (a > b) {
    return foo(a - b, b);
  } else {
    return foo(a, b - a);
  }
}

console.log(foo(12, 18)); // Output: true (Correct)
console.log(foo(15, 25)); // Output: true (Correct)
console.log(foo(25, 15)); // Output: true (Incorrect - should be false)
console.log(foo(100, 200));// Output: true (Incorrect - should be false)