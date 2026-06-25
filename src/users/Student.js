import Person from "./Person";

export default class Student extends Person {
  constructor(name, age, sub) {
    super(name, age);
    this.sub = sub;
  }
  canLearn() {
    return "can learn";
  }
}
