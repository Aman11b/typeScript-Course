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

type StringOrNumber = string | number;
let value: StringOrNumber;
value = ":hell";
value = 3;

type Theme = "light" | "dark";
let theme: Theme;
theme = "dark";
theme = "light";

function setTheme(t: Theme) {
  theme = t;
  console.log(t);
}
setTheme("light");

// challenge alias
type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

function printStaffDetailes(staff: Staff): void {
  if ("employees" in staff) {
    console.log(
      `${staff.name} is an Manager in the ${staff.employees.length} employees`
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department`
    );
  }
}

const alice: Employee = {
  id: 1,
  name: "alice",
  department: "sales",
};
const bravo: Employee = {
  id: 2,
  name: "bravo",
  department: "IT",
};

const Bob: Manager = {
  id: 1,
  name: "bob",
  employees: [alice, bravo],
};

printStaffDetailes(Bob);
printStaffDetailes(alice);

/**
 * Intersection Type
 */
type Book = { id: number; name: string; price: number };
const book1: Book = {
  id: 1,
  name: "kafka on shores",
  price: 250,
};

const book2: Book = {
  id: 2,
  name: "noreign woods",
  price: 350,
};

const dicountedBook: Book & { discount: number } = {
  id: 3,
  name: "white night",
  price: 200,
  discount: 0.15,
};

/**
 * computed properties
 */
const propName = "age";
type Animal = {
  [propName]: number;
};
let tiger: Animal = { [propName]: 5 };

/**
 * INTERFACE -> shape of object only object
 */

// this will just have a blue print
interface Book1 {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // method
  printAuthor(): void;
  printTitle(message: string): string;
  // alternative way to set method
  // property as a function
  printSomething: (someValue: number) => number;
}

// type alias
const deepWork: Book1 = {
  isbn: 123,
  title: "deep work",
  author: "carl",
  genre: "self help",
  // price:100
  // printAuthor() {
  //   console.log(this.author);
  // },
  printTitle(value) {
    return `${this.title} ${value}`;
  },
  // alternative way to set method
  // 1st option

  printSomething: function (someValue) {
    return someValue;
  },

  // 2nd option
  // => catch the global this

  // printSomething: (someValue) => {
  //   // console.log(this)
  //   console.log(deepWork.author);
  //   return someValue;
  // },

  // 3rd option

  // printSomething(someValue) {
  //   return someValue;
  // },

  printAuthor: () => {
    console.log(deepWork.author);
  },
};

// deepWork.isbn=234;

// interface method
deepWork.printAuthor();
console.log(deepWork.printTitle("is an awasome book"));

// alternative way to set method
console.log(deepWork.printSomething(34));
deepWork.printAuthor();

// challenge
interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  upgreadeRam(increase: number): number;
  storage?: number;
}

const laptop1: Computer = {
  id: 1,
  brand: "random brand",
  ram: 8,
  upgreadeRam(amount) {
    this.ram += amount;
    return this.ram;
  },
};
laptop1.storage = 256;
laptop1.upgreadeRam(4);
console.log(laptop1);

/**
 * // interface merge and extend
 */
interface Person {
  name: string;
  getDetaile(): string;
}
interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

interface Person {
  age: number;
}

// interface merge
const person: Person = {
  name: "jhon",
  age: 30,
  getDetaile() {
    return `Name: ${this.name} ,Age: ${this.age}`;
  },
};

console.log(person.getDetaile());

// extend interface

interface Employee1 extends Person {
  employeeId: number;
}
const employee2: Employee1 = {
  name: "jane",
  age: 28,
  employeeId: 123,
  getDetaile() {
    return `Name: ${this.name}, Aage: ${this.age}, Employee ID" ${this.employeeId}`;
  },
};

console.log(employee2);

interface Manager1 extends Person, DogOwner {
  managePeopple(): void;
}

const manager: Manager1 = {
  name: "bablu",
  age: 23,
  dogName: "rex",
  getDetaile() {
    return `Name: ${this.name}, Aage: ${this.age}`;
  },
  getDogDetails() {
    return `Name: ${this.dogName}`;
  },
  managePeopple() {
    console.log("managing people...");
  },
};

manager.managePeopple();
console.log(manager.getDetaile());
console.log(manager.getDogDetails());

// challenge

console.log("------------challenge---------");
interface Person2 {
  name: string;
}
interface DogOwner2 extends Person2 {
  dogName: string;
}
interface Manager2 extends Person2 {
  managePeople(): void;
  delegateTask(): void;
}
function getEmployee2(): Person2 | DogOwner2 | Manager2 {
  const random = Math.random();
  if (random < 0.33) {
    return {
      name: "jhon",
    };
  } else if (random < 0.66) {
    return {
      name: "tom",
      dogName: "rex",
    };
  } else {
    return {
      name: "bob",
      managePeople() {
        console.log("managing people...");
      },
      delegateTask() {
        console.log("delegrating task...");
      },
    };
  }
}
const emp: Person2 | Manager2 | DogOwner2 = getEmployee2();
console.log(emp);
console.log(emp.name);
// console.log(emp.delegrateTask());

function isManager(obj: Person2 | DogOwner2 | Manager2): obj is Manager2 {
  return "managePeople" in obj;
}
if (isManager(emp)) {
  emp.delegateTask();
}

console.log(isManager(emp));

/**
 * TUPLES
 */

console.log("----------tuples--------");
let per: [string, number] = ["jhon", 25];
// let per: [string, number] = [25, "jhon"];
// let per: [string, number] = ["jhon", 25,true];
let date: readonly [number, number, number] = [12, 17, 2001];
// date.push("hello")
// date.push(34);
console.log(date);
function getPerson(): [string, number] {
  return ["jhon", 25];
}
let randomPerson = getPerson();
console.log(randomPerson[0]);

let sus: [string, number?] = ["susan"];

/**
 * ENUMs
 */
console.log("------------ENUMS------------");
