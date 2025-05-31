
/**
 * Sets up the prototype chain for inheritance between a child and parent
 * constructor functions.
 *
 * @param {Function} Child - The child constructor function.
 * @param {Function} Parent - The parent constructor function.
 */
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

//* Example usage
//?   Base Class -> Shape
//?        -> Child Class -> Rectangle
//?        -> Child Class -> Circled

//* Base class constructor
function Shape(x, y) {
    this.position = {x, y};

    this.setPosition = function(x, y){
        this.position.x = x;
        this.position.y = y;
    }

    // Object.defineProperty(this, 'Position', {
    //     get: function(){
    //         return position;
    //     },
    //     set: function(value){
    //         position = value;
    //     }
    // });
}

Shape.prototype.displayInfo = function(){
    console.log(`Position: (${this.position.x}, ${this.position.y})`);
}

//* Child class constructor
function Rectangle(x, y, width, height) 
{
    Shape.call(this, x, y); //? Calling Super Constructor

    this.width = width;
    this.height = height;
}

//* Child class constructor
function Circle(x, y, radius) 
{
    Shape.call(this, x, y); //? Calling Super Constructor

    this.radius = radius;
}

//* Prototypal Inheritance
extend(Rectangle, Shape);
extend(Circle, Shape);

//* Overriding methods
//! Necessary to be overridden after the prototype chain is established
Circle.prototype.displayInfo = function(){
    Shape.prototype.displayInfo.call(this);
    console.log(`Radius: ${this.radius}`);
}

//* Objects creation
let rectangle = new Rectangle(1, 2, 100, 100);
let circle = new Circle(1, 2, 10);
