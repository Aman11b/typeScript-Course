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
