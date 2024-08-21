class Person {
  constructor(
    private age: number,
    private name: string
  ) {}
  getSummary() {
    return `I'm ${this.name} and my age is ${this.age}`;
  }
}

const diego = new Person(30, 'Diego');
diego.getSummary();
