function isEven(value) {
    const remainder = value % 2
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}

const number1 = 120;
const number2 = 125;

const isEvenCheck1 = isEven(number1);
console.log(isEvenCheck1);

const isEvenCheck2 = isEven(number2);
console.log(isEvenCheck2);