# Incorrect GCD Calculation using Euclidean Algorithm

This repository demonstrates a common error in implementing the Euclidean algorithm for finding the greatest common divisor (GCD) of two numbers in JavaScript.

## Bug Description
The provided JavaScript function `foo` intends to calculate the GCD using recursion. It correctly handles some cases, but fails when the first number is larger than the second number and their difference is not divisible by the smaller number.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` and run the code.
3. Observe the incorrect outputs for certain input pairs. 

## Solution
The solution is in `bugSolution.js`. It corrects the conditional statement to correctly check if the GCD is reached and returns the correct GCD value.

## License
MIT