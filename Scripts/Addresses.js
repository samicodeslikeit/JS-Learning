// Adress Contains
// Street, city, zipcode

// Constructor
function Address(street, city, zipcode){
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

// Factory Function
function FactoryAddress(street, city, zipcode){
    return {
        street,
        city, 
        zipcode
    };
}

// let newAddress = new Address(4, 'Lahore', 54000);
let newAddress = FactoryAddress(45, 'lahore', 54000, "pakistan");


function showAddress(address){
    console.log(objectKeysAndValuesToString(address));
}

function objectKeysAndValuesToString(object){
    let resultantString = "";
    for (const key in object) {
        resultantString += `${CapitalizeFirstLetter(key)}: ${object[key]}, `;
    }
    resultantString = resultantString.slice(0, resultantString.length - 2);
    return resultantString;
}

function CapitalizeFirstLetter(value){
    return value.charAt(0).toUpperCase() + value.slice(1);
}

let address1 = new FactoryAddress('a', 'b', 'c')
let address2 = new FactoryAddress('a', 'b', 'c')
let address3 = address1;


function areSame(address1, address2){
    return address1 === address2;
}

function areEqual(address1, address2){
    if(Object.keys(address1).length == Object.keys(address2).length){
        return matchValues(address1, address2);
    }
    return false;
}

function matchValues(obj1, obj2){
    for(const key in obj1){
        console.log(obj1[key], obj2[key]);
        if(obj1[key] !== obj2[key]){
            return false
        }
    }
    return true;
}


console.log(areSame(address1, address3));