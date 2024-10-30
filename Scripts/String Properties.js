let movie = {
    name : 'abc',
    releaseYear : "2022",
    directorName : "Mosh",
    ratings: 4.5
}

stringProperties(movie);

function stringProperties(obj){
    var value = 0;
    for (let key in obj) {
        if(typeof obj[key] === "string"){
            value++;
        }
    }
    console.log(value);
}