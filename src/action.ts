export function sayHello(name: string): void {
  console.log(`Hello ${name}`);
}

export let person2 = "susan";

export type Student1 = {
  name: string;
  age: number;
};

const newStudent1: Student1 = {
  name: "peter",
  age: 24,
};

export default newStudent1;
