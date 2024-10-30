const numbers = [1, 2, 3, 4];

function except(array, exceptingArray){
    for(let i = 0; i < array.length; i++)
        for(let m = 0; m < exceptingArray.length; m++)
            if(array[i] == exceptingArray[m]){
                array.splice(i, 1);
                continue;   
            }

    return array;
}

console.log(except(numbers, [2, 4]));