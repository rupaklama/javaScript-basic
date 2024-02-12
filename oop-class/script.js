'use strict';

// NOTE
// 1. Classes are NOT HOISTED
// 2. Classes are first-class citizens - we can pass them into functions & also return it from functions
// 3. Classes are executed in strict mode

// ES6 Classes to create Objects - nicer & modern alternative syntax to traditional Constructor Function
// NOTE  - Classes in javascript do not work like traditional Classes in other languages like Java, c++.
// Classes in javascript are just SYNTACTIC SUGAR for Constructor Functions.
// So, they still implement PROTOTYPICAL INHERITANCE behind the scene since
// JavaScript is a Prototype Based Language, Object inheriting properties/methods from another Object

// Note - Classes are functions in javascript
// therefore, we have Class Expression & Class Declaration

// class expression
// const Person = class {}

// class declaration
// NOTE - Private Class Fields and Methods are actually not part of javascript yet
// for data privacy - Encapsulation to prevent external code from accidentally
// manipulating internal properties/state.
// Encapsulation is to keep properties and methods PRIVATE inside the class,
// so they are not accessible from outside the class.
// Some methods can be exposed as public interface (API).

// NOTE - New Class Features, 'Fields' which are known as properties in other languages
// They are 8 in total but we will mainly focus on 4 Fields
// 1. Public fields
// 2. Private fields
// 3. Public methods
// 4. Private methods
class Person {
  // 1. Public fields - we declare 'Public' Fields here like a global variable property
  // NOTE - This properties will be added in 'instances' but not in 'prototype'
  // fullName = fullName;
  // birthYear = birthYear;

  // 2. Private fields - properties are not truly accessible from outside
  // NOTE - This properties will be added in 'instances' but not in 'prototype'
  // '#' is a syntax that makes a Field Private
  #id = 123;

  // first thing, we need to do is add a Constructor method
  // Constructor is actually a method of this class

  // passing arguments basically for the properties that we want the object to have
  constructor(fullName, birthYear) {
    // this keyword is set to current Person Object & to also newly created empty object
    // '_' meaning private property/field (older approach), don't mutate or access directly instead use getter or setter to do so
    this._fullName = fullName; 
    this.birthYear = birthYear;
  }

  // Note - This method is automatically added to the Prototype property of the Class Object
  calcAge() {
    console.log(2021 - this.birthYear);
  }

  // Note - every object in javascript can have Setter & Getter properties
  // Both are Functions to SET & Get a value, both are very useful for data validation
  // 3. Public method
  get age() {
    return 2021 - this.birthYear;
  }

  // 4. Private methods - to hide implementation details from the outside
  #getId() {
    console.log(this.#id);
  }

  // Setter sets a value as a property on calling the method
  // Setter function to validate data to check if it's actually a full name on fullName property
  // Here, we are creating Setter Function with a property name which is already exists in Class
  // Now each time when 'fullName' property gets executed above, so whenever we set a 'fullName' on 'this' keyword
  // then this Setter Function going to be executed and this will override the property
  set setFullName(name) {
    // NOTE - need to add _ before fullName since the Setter is setting the property
    // Convention to avoid Naming conflict, creating new variable property '_fullName'
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  // Getter gets a value store in a property on calling the method
  get getFullName() {
    return this._fullName;
  }
}

// new Person object
const rupak = new Person('Rupak Lama', 1985);
console.log(rupak.getFullName); // getter -  note: getter & setter is set as a property in class, not a method
console.log(rupak.setFullName = 'dang dang');

// Newly created Object also has an access to properties/methods of Class which is a Function
// and Function is an Object in javaScript.
// Prototypal Inheritance - inheriting from One Object from Another Object - Class Object here
rupak.calcAge();

// is 'rupak' object prototype of Person object
console.log(rupak.__proto__ === Person.prototype); // true

// NOTE - we can also add METHODS manually to the prototype - class object
Person.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

// calling on newly created object
rupak.greet();

// NOTE - Inheritance
// To implement Inheritance between ES6 Classes, we only need 'extend' keyword & 'super' function
class Student extends Person {
  // this Class will receive all the properties & methods of Person Class by default &
  // it can additionally also have its own properties & methods as well
  constructor(fullName, birthYear, course) {
    // 'super' is the constructor function of parent class - Person
    // just pass an arguments of the constructor of Parent class to link here
    // NOTE - Always need to happen 'super' first on top here
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I
      am studying ${this.course}`);
  }
}

// creating new Student Object
const indira = new Student('Indira Rai', 1987, 'Nursing');
console.log(indira);

// calling Student Class method
indira.introduce();

// calling method in Parent Class with new Student Object
indira.calcAge();

// NOTE - accessing Private field in Parent Class - Person
// can't access here
// console.log(indira.#id); // Private field '#id' must be declared in an enclosing class

// NOTE - accessing Private Method in Parent Class - Person
// indira.#getId();

// NOTE - we can Chain Methods in Class
// indira.age().age()
