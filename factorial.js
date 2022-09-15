// 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9

function factorial(number) {
    let result = 1;
    for (let i = number; i >= 1; i--) {
        result *= i;
    }
    return result;
}

const value = 10;
const fact = factorial(value);
console.log('factorial of', value, 'is:', fact);