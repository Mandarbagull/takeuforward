// 1. Problem Statement: Given an integer N, return the number of digits in N

const numberOfDigits = (n) => {
    let counter=0;
    while (n>0) {
        n = Math.floor(n/10);
        counter ++
    }
    return counter;
}
console.log(numberOfDigits(1234))

// Time Complexity: O(log10(n))

// 2. Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
const reverseNumber = (n) => {
    let reverseNum = 0;
    let lastDigit;
    let sign = n < 0 ? -1 : 1;
    n = Math.abs(n);
    while (n > 0) {
        lastDigit = n % 10;
        n = Math.floor(n / 10);
        reverseNum= (reverseNum * 10) + lastDigit;
    }
    return reverseNum * sign
}
console.log(reverseNumber(-123))

// Palindrome
const palindrome = (n) => {
    let ogNumber = n;
    let lastDigit = 0;
    let reverseNumber = 0;
    while (n > 0) {
        lastDigit = n % 10;
        reverseNumber = (reverseNumber * 10) + lastDigit
        n = Math.floor(n / 10);
    }
    return ogNumber == reverseNumber ? 'Palindrome' : 'Not Palindrome'
}
console.log(palindrome(121))
console.log(palindrome(123))

// ArmStrong 
const armstrong = (n) => {
    let lastDigit = 0;
    let ogNumber = n;
    let sum = 0;
    while (n > 0) {
        lastDigit = n % 10;
        n = Math.floor(n / 10)
        sum = sum +  (lastDigit ** 3);
    }
    return sum == ogNumber ? 'Armstrong' : 'not armstrong'
}
console.log(armstrong(153))
console.log(armstrong(234))