
let marks = [80, 80, 50];

function findGrade(marks){
    let totalMarks = 0;

    for (const mark of marks) {
        totalMarks += mark;
    }

    let averageMarks = totalMarks / marks.length;
    console.log(averageMarks);

    if(averageMarks < 60){
        return 'F';
    }
    else if(averageMarks < 70){
        return 'D';
    }
    else if(averageMarks < 80){
        return 'C';
    }
    else if(averageMarks < 90){
        return 'B';
    }
    return 'A';
}

console.log(findGrade(marks));