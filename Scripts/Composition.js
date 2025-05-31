///* MIXINS
    //? Definition: a mixin is a function that adds features to a class


//* Example (An example of football player creation with adding valid features)

//* Features
const canTouchOtherThanFoot = {
    touch: function(){

    }   
}

const canKick = {
    kick: function(){

    }
}

const commitFoul = {
    commitFoul: function(){

    }
}

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

//* Composition

//? Minin fucntion
function mixin(taget, ...sources){
    Object.assign(taget.prototype, ...sources);
}

function Player (shirtNumber) {
    this.shirtNumber = shirtNumber;
};
function GoalKeeper(shirtNumber) {
    Player.prototype.constructor.call(this, shirtNumber);
};

//? Basic composition
mixin(Player, canKick, commitFoul);                                 //* Added features

//? Advanced composition with inheritance
extend(GoalKeeper, Player);                                         //* Inheritance from Player
mixin(GoalKeeper, canTouchOtherThanFoot, canKick, commitFoul);      //* Added features

let ronaldo = new Player(7);
let neuer = new GoalKeeper(4);

console.log(ronaldo);
console.log(neuer);


