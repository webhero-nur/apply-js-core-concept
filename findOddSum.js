function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum += element;
        console.log(index, element, sum);
    }
    return sum;
}

function getOddNumberOfAnArray(numbers) {
    let oddNumber = [];
    console.log('Index Value');
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 === 1) {
            console.log(index, element);
            oddNumber.push(element);
        }
    }
    return oddNumber;
}

const myNumbers = [35, 19, 87, 46, 84, 96, 84, 91, 68, 48, 79];
const oddArray = getOddNumberOfAnArray(myNumbers);
console.log('Odd value array:', oddArray);
const total = getSumOfAnArray(oddArray);
console.log('Total of odd numbers', total);