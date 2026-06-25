export default class Person {
  constructor(inputName, inputAge) {
    console.log("I'm constructor");
    this.name = inputName;
    this.age = inputAge;
  }

  static egStatic() {
    return "this is egstatic";
  }

  info() {
    return `${this.name} is ${this.age} years old.`;
  }

  eat() {
    return "can eat";
  }

  teach() {
    return "im teach";
  }
}
