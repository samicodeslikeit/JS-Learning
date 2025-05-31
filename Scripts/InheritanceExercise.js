// Exercise - Inheritance

// Statement
// Create HTMLElement
// It has an own property named `click`
// It has a prototype property named `focus`

// Create HTMLSelectElement
// It should inherit from HTMLElement
// It can be created with a parameterized constructor with items
// It has a property named `items` 
// It also has a method as `addItem` and `removeItem`
// The rest should follow the same logic as HTMLElement

// Base class
function HTMLElement(){
    this.click = function(){
        console.log("clicked");
    }
}

HTMLElement.prototype.focus = function(){
    console.log("focused");
}

let h = new HTMLElement();
// console.log(h);

// Derived/Child class
function HTMLSelectElement(HTMLElements = []){
    // HTMLElement.prototype.constructor.call(HTMLSelectElement.prototype);  //? Wrong approach for calling the constructor on a prototype, the constructors are meant to be run while creating a new object on that object, not on its prototypes
    this.items = HTMLElements;

    this.removeItem = function(HTMLElement){
        if(this.items.includes(HTMLElement)){
            this.items.splice(this.items.indexOf(HTMLElement), 1);
        }
    }

    this.addItem = function (HTMLElement){
        this.items.push(HTMLElement);
    }

    this.render = function(){
        let html = "<select>\n";
        for(item of this.items)
            html += `<option>${item}</option>\n`
        html += "</select>"
        return html;
    }
}

// HTMLSelectElement.prototype = Object.create(HTMLElement.prototype); //? Wrong approach calling for inheriting the instance methods
HTMLSelectElement.prototype = new HTMLElement();
// HTMLSelectElement.prototype.constructor = HTMLSelectElement;

let s = new HTMLSelectElement([1, 4, 3]);
// console.log(s);
// console.log(s.render());


//* Adding Polymorphism exercise

// Add another child class as HTMLImageElement, 
// Add a render method to be inherited for derived object from HTMLElement
// Implement the render() method for each object accordingly

function HTMLImageElement(src){
    this.src = src;

    this.render = function(){
        return `<img src = "${this.src}" />`;
    }
}

HTMLImageElement.prototype = new HTMLElement();

// let v = new HTMLImageElement("https://");

let elements = [
    new HTMLSelectElement([1, 2, 3]),
    new HTMLImageElement("https://")
]

for(element of elements)
    console.log(element.render());