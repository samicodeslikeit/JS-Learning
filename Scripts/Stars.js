


function printStars(lineCount){
    let result = "";
    for(let i = 0; i < lineCount; i++){
        result = "";
        for(let j = 0; j <= i; j++){
            result += '*';
        }
        console.log(result);
    }
        
}

printStars(2);