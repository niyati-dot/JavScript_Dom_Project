//comments
console.log('Hello World');
//variables
let fName = 'Niyati';
console.log(fName);
//constant variable
const intrestRate = 0.3;
//Primitives Data types
let name = 'Niya'; //String Literal
let age = 27; //Number Literal
let isApproved = false; // boolean literal
let firstName; //if we don't define any value then it's undefined
let lastName = null; //null

//Reference type - Object
let person = {
  name: 'Niya',
  age: 27
}
console.log(person);
//now i wanna change value of this object variables
//1st way Dot Notation - objectName.propertyName
person.name = 'Niya P';
console.log(person.name);
//2nd way = Bracket Notation
person['name'] = 'Niya Harsh P';
console.log(person['name']);

//Reference type - Array
let someColor = ['Red', 'Purple'];
console.log(someColor[1]); //fetch by index
someColor[2] = 'Pink'; //insert into array
console.log(someColor.length);

//Reference type - Function
function greet(name, lastName) {
  console.log('Hello ' + name + ' ' + lastName)
}
greet('Niya', 'Patel')
//Calculating a value
function square(number) {
  return number * number;
}
console.log(square(2));

itemQty1 = 2;
itemPrice1 = 2095;
itemQty2 = 2;
itemPrice2 = 799;
itemsTotal = (itemQty1 * itemPrice1) + (itemQty2 * itemPrice2)
shipp = (499 + 499)
taxCal = (itemsTotal + shipp) * 0.1;
line1 = `Items(${itemQty1 + itemQty2}): $${itemsTotal / 100}`
line2 = `Shipping & Handling: $${shipp / 100}`
line3 = `Total before Tax: $${(itemsTotal + shipp) / 100}`
line4 = `Estimated tac(10%): $${Math.round(taxCal) / 100}`
line5 = `Order Total: $${Math.round((itemsTotal + shipp + taxCal)) / 100}`
cart = `${line1}\n${line2}\n${line3}\n${line4}\n${line5}`;
console.log(cart);

const age1 = 15;
if (age1 >= 16) {
  console.log("You can drive!");
} else if (age1 >= 14) {
  console.log('Almost There!');
} else {
  console.log('You can not drive!');
}
//fetching current date and time with Date() and then fetching only hourse using getHours()
const currentDate = new Date();
let hour = currentDate.getHours();
const namee = 'Niya';
if (hour >= 6 && hour <= 12) {
  console.log(`Good Morning, ${namee}!`);
} else if (hour > 13 && hour <= 17) {
  console.log(`Good Afternoon,${namee}!`);
} else {
  console.log(`Sweet Dreams, ${namee}!`);
}

const agee = 65;
const isHoliday = false;
if (isHoliday && (agee <= 6 || agee >= 65)) {
  console.log('Yaay,Discount!!');
} else {
  console.log('Opps,No Discount!');
}

//calling function
taxCalculator();
taxCalculator1(1000);
taxCalculator2(1000, 10);
//functions
function taxCalculator() {
  console.log(1000 * 0.1);
}
function taxCalculator1(price) {
  console.log(price * 0.1);
}
function taxCalculator2(price, taxPer) {
  taxPer /= 100;
  console.log(price * taxPer);
}

function greet(name) {
  name ? console.log(`Hello, ${name}!`) : console.log(`Hi there!`);
}
greet('Niya');
greet('Harsh');
greet(); //passing undefined value so it will print else code 'Hi there' one

function tempCheck(temp, tempUnit) {
  let tempConvertor = '';
  let convert = '';
  if (tempUnit === 'C') {
    convert = 'F';
    tempConvertor = (temp * 9 / 5) + 32;
  } else if (tempUnit === 'F') {
    convert = 'C';
    tempConvertor = (temp - 32) * 5 / 9;
  } else {
    console.log("Invalid Entry, Please type C or F");
  }
  console.log(`Temprature is: ${temp}${tempUnit} => ${tempConvertor}${convert}`);
}
tempCheck(25, 'C');
tempCheck(86, 'F');
