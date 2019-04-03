/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding looks into all the possibilities 
* 2. implicit binding when dot notation is used to invoke a function.
* 3. new binding is a new object created from an existing
* 4. Explicit binding when .call(), .apply(), or .bind() are used on a function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name) {
    console.log(this);
    return name;
}
console.log(sayName("Thomas"));
// Principle 2

// code example for Implicit Binding

const myGreet = {
    greeting: 'Hello,',
    sayHello: function(name) {
        console.log(`${this.greeting} I am ${name}`);
        
    }
}

console.log(myGreet.sayHello("Thomas"));
// Principle 3

// code example for New Binding

function Character(greeter) {
    this.greeting = 'Hello I am ';
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

// Principle 4

// code example for Explicit Binding

const rebecca = new Character('Rebecca');
const zoey = new Character('Zoey');

rebecca.speak.call(zoey);
zoey.speak.apply(rebecca);

rebecca.speak();
zoey.speak();

