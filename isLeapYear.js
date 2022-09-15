function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    }
    return false;
}

const year1 = 1998;
const year2 = 2001;
const year3 = 2000;

console.log(isLeapYear(year1));
console.log(isLeapYear(year2));
console.log(isLeapYear(year3));