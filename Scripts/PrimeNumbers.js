
function primeNumbers(limit){
    for(let i = 2; i <= limit; i++){
        if(isPrime(i)) console.log(i);
    }
}

function isPrime(number){
    if(number < 4){
        return true;
    }

    for(let j = 2; j <= number / 2; j++){
        // console.log("i =", i, " % ", "j=",  j, i % j == 0? "==": "!="," 0")
        if(number % j == 0){
            return false
        }
    }

    return true;
}

primeNumbers(10);
