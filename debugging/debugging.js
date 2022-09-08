console.log();
console.clear();
console.warn();
console.error();
console.table();

// 1. log
console.log('Hello my name is Emil');

const name = 'Emil';

console.log(name);

const responseDataOne = [
  {
    name: 'Emil',
    age: 29,
  },
  {
    name: 'Hesham',
    age: 30,
  },
];

const responseDataTwo = [
  {
    name: 'Emil',
    age: 29,
  },
  {
    name: 'Hesham',
    age: 30,
  },
];

console.log('responseDataOne: ', JSON.stringify(responseDataOne));
console.table('responseDataTwo: ', responseDataTwo);

const sum = 9 + 20;

console.log(`I am ${sum} years old`);

console.log(responseDataOne + responseDataTwo);

const convertResponseOne = JSON.stringify(responseDataOne);
const convertResponsetwo = JSON.stringify(responseDataTwo);

const converted = convertResponseOne + convertResponsetwo;
console.log(converted);

// console.table
console.table(responseDataOne);

// console.time();
// console.timeEnd();

function counter() {
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }
}

console.time('myTimer');
counter();
console.timeEnd('myTimer');

console.time('myTimer');
counter();
console.timeEnd('myTimer');

console.time('myTimer');
counter();
console.timeEnd('myTimer');

function totalSum(sum1, sum2) {
  return sum1 + sum2;
}

let total = totalSum(1, 2);

console.log(total);

// make a function that calculate the average
function getAverage(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

let average = getAverage(133, 266, 2);

console.log(average);

let myNumbers = [5, 14, 16, 28, 47, 29, 122];

function getAverage2(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

let averageSum = getAverage2(myNumbers);
console.log(averageSum);

function getCatFacts() {
  fetch('https://catfact.ninja/fact')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {});
}

getCatFacts();

async function getCatFacts2() {
  const response = await fetch('https://catfact.ninja/fact');
  console.log(response);
  const catFacts = await response.json();
  console.log(catFacts);
  return catFacts;
}

const myCatFacts = getAverage2();
console.log(myCatFacts);
