function foo(a, b) {
  // Ensure a and b are non-negative
  a = Math.abs(a);
  b = Math.abs(b);

  if (b === 0) {
    return a;
  } else {
    return foo(b, a % b);
  }
}

console.log(foo(12, 18)); // Output: 6
console.log(foo(15, 25)); // Output: 5
console.log(foo(25, 15)); // Output: 5
console.log(foo(100, 200));// Output: 100