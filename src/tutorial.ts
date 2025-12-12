console.log("typeScript tutorial");
// interface someValue {
//   name: string;
//   id: number;
// }
// let someObj: someValue = {
//   name: "random",
//   id: 123,
// };
// console.log(someObj);

/************************
 * TYPE ANNOTATION
 *************************/
let awesomeName: string = "shakeAndBake";
awesomeName = "something...";
awesomeName = awesomeName.toUpperCase();
console.log(awesomeName);

// awesomeName=20;
// awesomeName=true;

let amount: number = 20;
amount = 12 - 1;
// amount="pant"

let isAwesome: boolean = true;
isAwesome = false;
// isAwesome=3

/************************
 * TYPE INFERENCE
 ************************/

let awesomeName1 = "shakeAndBake";
awesomeName1 = "somethingINFERENCE";
awesomeName1 = awesomeName1.toUpperCase();
console.log(awesomeName1);

// awesomeName=20;
// awesomeName=true;

let amount1 = 20;
amount1 = 12 - 1;
// amount="pant"

let isAwesome1 = true;
isAwesome1 = false;
// isAwesome=3

/**->>>>>>>>>>>>>>>>>>>
 * CHALLENGE 1
 ->>>>>>>>>>>>>>>>>>>>>*/
let chaString: string = "challengeString";
console.log(chaString.toUpperCase());

let chaNumber: number = 23.3;
chaNumber += 5;
console.log(chaNumber);

let isAdult: boolean = chaNumber >= 20;
isAdult = !isAdult;
console.log(isAdult);

// ->throw error
// chaString = 10;
// chaNumber = "he";
// isAdult = "YES";

// still ist shows here if you run but when you build it you need to go via TS check and it will fail in build it tsc & vite build thats the reason
console.log(chaString, chaNumber, isAdult);

/*******************************
 * UNION TYPE (multiple types for same variable)
 ********************************/
let tax: number | string = 10;
tax = "100";
tax = 200;
console.log(tax);

let requestStatus: "pending" | "success" | "error" = "pending";
requestStatus = "success";
// requestStatus='random'

/**********************
 * TYPE ANY (opt out from type checker)
 **********************/

let notSure: any = 4;
notSure = "he";
notSure = true;

let random;
// right now the type is any

// ->>> Practical Example

const books = ["1984", "Brave New World", "Fahrenheit 451"];

let foundBook: string | undefined;

for (let book of books) {
  if (book === "Fahrenheit 451") {
    foundBook = book;
    foundBook.toUpperCase();
    break;
  }
}
// type is any
// foundBook = 10;
console.log(foundBook?.length, foundBook);

/****************************
 * UNION TYPE CHALLENGE
 *****************************/

let discount: number | string = 20;
discount = "20%";
// discount=true;

let orderStatus: "processing" | "shipped" | "delivered" = "processing";
orderStatus = "shipped";
// orderStatus='cancelled'

/************************
 * ARRAY
 ************************/

let price: number[] = [10, 12, 32];
// price.push("hello");

let fruit: string[] = ["a", "b"];

// let randomValue: [] = [1, 2, 3];
// TS assume that this will always be empty array

let emptyValue = [1, 2, "4"];
let ary: (string | number)[] = ["a", 1];

/****************************
 * array challenge
 *******************************/
let temperatures: number[] = [20, 25, 70];
// temperatures.push("hot");
let colors: string[] = ["red", "green"];
// colors.push(true);
let mixed: (number | string)[] = [1, "two"];
// mixed.push(true)

/*******************
 * OBJECT Fundamentals
 ********************/

let car: { brand: string; year: number } = { brand: "toyota", year: 2020 };
car.brand = "ford";
// car.color='blue';

let car1: {
  brand: string;
  year: number;
} = { brand: "audi", year: 2020 };

let book = { title: "book", cost: 20 };
let pen = { title: "pen", cost: 10 };
let notebook = { title: "notebook" };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];
// items[0].title="new book";

// OBJECT CHALLENGE

let bike: { brand: string; year: number } = { brand: "yamaha", year: 2020 };
// bike.year='old'

let laptop: { brand: string; year: number } = { brand: "dell", year: 2001 };
// let lap2:{brand:string;year:number}={brand:"HP"}

let product1 = { title: "shirt", price: 20 };
let product2 = { title: "pant" };

let products: { title: string; price?: number }[] = [product1, product2];

/*************************
 * FUNCTIONS
 ***************************/

// -> function parameter
//-> any
//-> config   "strict": true,  false
//-> type

function sayHi(name: string) {
  console.log(`Hello ${name.toUpperCase()}`);
}
sayHi("jhon");
// sayHi(3)

// function return
function calculateDiscount(price: number): number {
  return price * 0.9;
}

const finalPrice = calculateDiscount(200);

// optional parameter
function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}
console.log(calculatePrice(100, 20));
console.log(calculatePrice(100));

// default parameter
function calculateScore(
  initialScore: number,
  penaltyPoint: number = 30
): number {
  return initialScore - penaltyPoint;
}

console.log(calculateScore(100, 20));
console.log(calculateScore(300));

// rest parameter
function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);
  let total = numbers.reduce((previous, current) => {
    return previous + current;
  }, 0);
  return `${message}: ${total}`;
}
let result = sum("The total is ", 1, 2, 3, 4, 5, 6);
console.log(result);

// void keyword-> function does not return a value
function logMessage(message: string) {
  console.log(message);
}
logMessage(`Hello, Typescript`);

/**
 * TYPE GUARD
 */
function processInput(input: string | number) {
  console.log(input);
  // console.log(input*2)
  if (typeof input === "number") {
    console.log(input * 2);
  } else {
    console.log(input.toLocaleLowerCase());
  }
}
processInput(10);
processInput("HELLO");

// OBJECT AS PARAMETER
function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}

const first = createEmployee({ id: 1 });
console.log(first);

// alternative
function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome ${student.name.toUpperCase()}!!!`);
}
const newStudent = {
  id: 5,
  name: "anna",
  email: "anna@gmail.com",
};
createStudent(newStudent);

// excess property check

createStudent({ id: 1, name: "bob", email: "bobo@gmail.com" });

// Function challenge 2
function processDate(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === "number") {
    return input * input;
  } else {
    return config.reverse
      ? input.toUpperCase().split("").reverse().join("")
      : input.toUpperCase();
  }
}

console.log(processDate(10));
console.log(processDate("hello"));
console.log(processDate("hello", { reverse: true }));

/**
 * type alias
 */

type USER = { id: number; name: string; isActive: boolean };

const john: USER = {
  id: 1,
  name: "john",
  isActive: true,
};
const susan: USER = {
  id: 1,
  name: "susan",
  isActive: false,
};

function createUser(user: USER): {
  id: number;
  name: string;
  isActive: boolean;
} {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}
