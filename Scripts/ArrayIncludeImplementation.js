const numbers = [1, 2, 3, 4];

function includes(array, searchElement){
    
    for(let n of array)
        if(n === searchElement)
            return true;
    
    return false;
}

console.log(includes(numbers, 4));