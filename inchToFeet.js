// const player1HeightInch = 12;
// const player1HeightFeet = player1HeightInch / 12;
// console.log(player1HeightFeet);

// const player2HeightInch = 60;
// const player2HeightFeet = player2HeightInch / 12;
// console.log(player2HeightFeet);

// const player3HeightInch = 48;
// const player3HeightFeet = player3HeightInch / 12;
// console.log(player3HeightFeet);

function inchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}

const player1HeightInch = 70;
const player1HeightFeet = inchToFeet(player1HeightInch);
console.log(player1HeightFeet);

const player2HeightInch = 49;
const player2HeightFeet = inchToFeet(player2HeightInch);
console.log(player2HeightFeet);

const player3HeightInch = 63;
const player3HeightFeet = inchToFeet(player3HeightInch);
console.log(player3HeightFeet);