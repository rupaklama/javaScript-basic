// ES6 classes - nicer & modern syntax
// Javascript is not a class based language but a prototype based language. 
// JavaScript is an object-based language based on prototypes, rather than being class-based.

// NOTE - Every Functions in a javaScript automatically have a property - 'Prototype' 
// & Constructor Function is one of it. With Prototype property, we can make copy of Methods & Properties and reuse it.
// Now, Every Object created by Certain Constructor Function will get access to all 
// the methods and properties defined in Constructor Prototype Property.

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

// Another Example
class Player {
  // constructor is to create and initialize object properties
  // super() method in the constructor method is to call the parent's constructor method
  // and gets access to the parent's properties and methods:

  // ES6 features - we can declare variables inside of a class as a default object properties
  //  Player {score: 0, numLives: 10, first: 'blue', last: 'steele'}
  // INITIAL DEFAULT VALUES

  // private field/property - should be only use/accessible inside of this Class only
  // to stop changing/reassigning it's value from other Class Instances
  #score = 0;
  #numLives = 10;

  // first thing, we need to do is add a Constructor method
  // Constructor is actually a method of this class
  constructor(first, last) {
    this.first = first;
    this.last = last;

    // calling private method inside this class
    this.#taunt();
  }

  // getter
  getScore() {
    return this.#score;
  }

  // setter - to update score inside of the class
  setScore(newScore) {
    this.#score = newScore;
  }

  // private method - not accessible in other Class Instances
  #taunt() {
    console.log("Yeah");
  }

  loseLife() {
    this.numLives -= 1;
  }
}

// new object instance
// Newly created Object also has an access to properties/methods of Class which is a Function
// and Function is an Object in javaScript.
// Prototypal Inheritance - inheriting from One Object from Another Object - Class Object here
const player1 = new Player("blue", "steele");

console.log(player1);

console.log(player1.numLives);
player1.loseLife();
console.log(player1.numLives);

// get score
console.log(player1.getScore());

// set score
console.log(player1.setScore(10));

// get new score
console.log(player1.getScore());

console.log(player1);



