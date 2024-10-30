const numbers = ArrayInRange(-10, 4);

function ArrayInRange(min, max){
    let array = [];
    for(let i = min; i <= max; i++){
        array.push(i);
    }
    return array;
}

console.log(numbers);