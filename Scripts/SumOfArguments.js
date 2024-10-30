function sum(...myArguments){
    let sumValue = 0;
    for (let i = 0; i < myArguments.length; i++) {
        if(Array.isArray(myArguments[i])){
            sumValue += SumAllElementsOfArray(myArguments[i]);
        }
        else{
            sumValue += myArguments[i];
        }
    }
    return sumValue;
}

function SumAllElementsOfArray(arrayParameter){
    // arrayParameter.forEach(element => {
    //     sumValue += element;
    // });

    return arrayParameter.reduce((a,b) => (a+b))
}


console.log(sum([1, 2, 10, 45], 2));
