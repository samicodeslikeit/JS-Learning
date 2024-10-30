function GetDemeritPoints(speed){
    let maxSpeedBeforeDemerits = 70;
    let kmForSingleDemerit = 5;
    let maxPointsBeforeLicenseSuspension = 12;
    
    if(speed >= maxSpeedBeforeDemerits + (kmForSingleDemerit * maxPointsBeforeLicenseSuspension)){
        return "License Suspended";
    }
    else if(speed - maxSpeedBeforeDemerits >= kmForSingleDemerit){
        let demeritPoints = ((speed - maxSpeedBeforeDemerits)/kmForSingleDemerit);
        return demeritPoints;
    }
    else {
        return "ok";
    }
}


console.log(GetDemeritPoints(180));