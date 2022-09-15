// 1. variable
var myName = 'Nure Alom'
// math operation: +, -, *, /, %
// shorthand: +=, -=, *=, /=
// ++, -- 

// 2. Array
var numbers = [10, 35, 41, 65, 41, 68, 54];

var thirdNumber = numbers[2];
numbers[3] = 44;

// 3. conditionals
// >, <, >=, <=, ==, ===, !=, !==

if (numbers.length < 4) {
    console.log('all subject result not published');
}
else {
    console.log('result published');
}

// 4. loop

var value = 0;
while (value <= 6) {
    console.log(value);
    value++;
}

for (var i = 0; i <= 10; i++) {
    //loop body
}

// 5. function
function isMoonUp(time) {
    if (time > 7) {
        return true;
    }
}

// 6. object

var laptop = {
    brand: 'DCL',
    model: 'DC4103M',
    storage: '256GB',
    memory: '8GB',
    display: 'FHD',
    processor: 'i3-10110U'
}
