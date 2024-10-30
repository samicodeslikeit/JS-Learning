function sumOfMultiples(limit){
    let result = 0;
    for (let i = 0; i <= limit; i++){
        if(i % 3 == 0 || i % 5 == 0){
            result += i;
        }
    }
    console.log(result);
}

sumOfMultiples(10);