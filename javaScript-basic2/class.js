// ES6 classes - nicer & modern syntax
// Javascript is not a class based language but a prototype based language. 
// JavaScript is an object-based language based on prototypes, rather than being class-based.

// class expression
// const Person = class {}

// class declaration
class Person {
  // first thing we need to do is to add a CONSTRUCTOR method of this class
  // It is executed automatically when a new object is created
  // It is used to initialize object properties

  // note - The constructor method is a special method for creating and initializing an object created with a class. 
  // initial properties as arguments in the constructor
  constructor(firstName, birthYear) {
    // Person.firstName = firstName - meaning firstName property of Person object is equal to value we receive
    // Object's properties
    this.firstName = firstName;
    this.birthYear = birthYear;
    // note: this keyword inside of constructor will also be set to the newly created empty object
  }

  // methods - Shorthand method definition
  // Methods will be added to .prototype property of Person class for inheritance
  calcAge() {
    console.log(2021 - this.birthYear);
  }

  // Another thing, we can add STATIC methods - simply attached to the class
  // which are not inherited by class instances / object created by class. 
  // Static methods are often used to create utility functions / helper methods
  static greeting() {
    console.log('hi there!')
  }

}
// When you have a class, you can use the class to create objects
// The constructor method is called automatically when a new object is created
const indira = new Person('Indira', 1987);
console.log(indira);

// indira.greeting(); - this will result in error, this static method cannot be access here

// Able to access class method because of Prototypal Inheritance 
// NOTE: If property or method can't be found in object, javaScript will look into object's prototype. 
// Prototype is inherited properties or methods. 
// Prototype helps optimize performance since each object can access properties and methods from its prototype
// instead of listing on them again. 
indira.calcAge();


