export default class Person {
  name = "kzs";
  age = 18;

  constructor(inputName, inputAge) {
    console.log("I'm constructor");
    this.name = inputName;
    this.age = inputAge;
  }
  teach() {
    return "im teach";
  }
}
