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
