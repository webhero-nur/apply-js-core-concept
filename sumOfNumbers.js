// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9

function findSumOfNumbers(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum += i;
    }
    return sum;
}

const value = 10;
const result = findSumOfNumbers(value);
console.log(result);