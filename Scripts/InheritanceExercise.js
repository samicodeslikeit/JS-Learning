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
function HTMLSelectElement(...HTMLElements){
    HTMLElement.prototype.constructor.call(HTMLSelectElement.prototype);
    this.items = HTMLElements;

    this.removeItem = function(HTMLElement){
        if(this.items.includes(HTMLElement)){
            this.items.splice(this.items.indexOf(HTMLElement), 1);
        }
    }

    this.addItem = function (HTMLElement){
        this.items.push(HTMLElement);
    }
}

HTMLSelectElement.prototype = Object.create(HTMLElement.prototype);
// HTMLSelectElement.prototype.constructor = HTMLSelectElement;

let s = new HTMLSelectElement();
console.log(s);